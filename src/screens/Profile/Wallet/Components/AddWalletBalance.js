import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import { scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';

import {
  addWalletBalanceApi,
  getWalletBalance,
  TYPES,
} from '@/actions/WalletActions';
import { Fonts, tick } from '@/assets';
import { strings } from '@/localization';
import { digits } from '@/utils/validators';
import { Button, Spacer } from '@/components';
import { COLORS, SF, SH, ShadowStyles, SW } from '@/theme';
import { isLoadingSelector } from '@/selectors/StatusSelectors';

const AddWalletBalance = ({
  openModal,
  changeModalState,
  bankAccount,
  setBalance,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const amountHander = text => {
    setAmount(text);
    if (bankAccount.length === 1) {
      selectBank(bankAccount[0].account_name);
    }
  };

  const selectBank = name => setName(name);

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => selectBank(item.account_name)}
      style={[
        styles.itemMainView,
        {
          borderColor:
            name === item.account_name ? COLORS.primary : COLORS.secondary,
          borderWidth: name === item.account_name ? 2 : 0,
        },
      ]}
    >
      <View
        style={[styles.accountItemView, { justifyContent: 'space-between' }]}
      >
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.labelStyle}>{strings.payment.accountNo}</Text>
            <Text style={styles.valueStyle}>{item.account_number}</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.labelStyle}>
              {strings.payment.accountHolder}
            </Text>
            <Text style={styles.valueStyle}>{item.account_owner_name}</Text>
          </View>
        </View>

        <View>
          {name === item.account_name ? (
            <View>
              <Image source={tick} style={styles.selectedBankImage} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );

  const isWalletLoading = useSelector(state =>
    isLoadingSelector([TYPES.ADD_BALANCE], state)
  );

  const addBalanceHandler = async () => {
    if (!amount) {
      alert(strings.validation.enterAmount);
    } else if (amount && digits.test(amount) === false) {
      alert(strings.validation.validAmount);
    } else if (!name) {
      alert(strings.validation.selectAccount);
    } else {
      const finalAmount = amount * 100;
      dispatch(
        addWalletBalanceApi(finalAmount, name, res => {
          if (res) {
            dispatch(
              getWalletBalance(res => {
                setBalance(res?.sila_balance);
              })
            );
            setAmount('');
            setName('');
            changeModalState(false);
          }
        })
      );
    }
  };

  return (
    <Modal
      propagateSwipe
      transparent={true}
      statusBarTranslucent
      isVisible={openModal}
      style={styles.modalStyle}
      onBackdropPress={() => changeModalState(false)}
    >
      <View style={styles.modalMainView}>
        <View style={{ padding: 15 }}>
          <Text style={[styles.modalHeadingText, { paddingLeft: 10 }]}>
            {strings.payment.walletBalance}
          </Text>

          <Spacer space={SH(20)} />
          <TextInput
            value={amount}
            placeholder={'$0'}
            returnKeyType={'done'}
            keyboardType={'number-pad'}
            style={styles.textInputStyle}
            placeholderTextColor={COLORS.secondary}
            onChangeText={text => amountHander(text)}
          />

          <Spacer space={SH(20)} />
          <Text style={[styles.modalHeadingText, { paddingLeft: 10 }]}>
            {strings.payment.selectBank}
          </Text>

          <Spacer space={SH(10)} />
          <View style={{ height: 300 }}>
            <FlatList
              scrollEnabled
              data={bankAccount}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
            />
          </View>

          <Spacer space={SH(30)} />
          <Button
            pending={isWalletLoading}
            onPress={addBalanceHandler}
            title={strings.payment.walletBalance}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddWalletBalance;

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    height: Dimensions.get('window').height / 2,
  },
  modalMainView: {
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  modalHeadingText: {
    textAlign: 'center',
    fontSize: scale(14),
    color: COLORS.black,
    alignItems: 'center',
    fontFamily: Fonts.SemiBold,
  },
  textInputStyle: {
    width: SW(70),
    height: SH(40),
    borderRadius: 5,
    alignSelf: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: COLORS.black,
    fontFamily: Fonts.MaisonRegular,
    backgroundColor: COLORS.inputBorder,
  },
  leftArrowImageStyle: {
    left: 5,
    width: SH(20),
    height: SH(30),
    resizeMode: 'contain',
    tintColor: COLORS.text,
  },
  headerText: {
    left: 10,
    fontSize: scale(14),
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
  },
  itemMainView: {
    width: '94%',
    borderWidth: 0,
    borderRadius: 8,
    marginTop: SH(10),
    alignSelf: 'center',
    paddingVertical: SH(20),
    ...ShadowStyles.shadow,
    paddingHorizontal: SW(5),
    backgroundColor: COLORS.white,
    borderColor: COLORS.termsBorder,
  },
  accountItemView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  labelStyle: {
    fontSize: SF(14),
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    textAlignVertical: 'center',
  },
  valueStyle: {
    fontSize: SF(12),
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    textAlignVertical: 'center',
  },
});
