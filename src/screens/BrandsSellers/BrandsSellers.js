import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./BrandsSellers.styles";
import { Header, ScreenWrapper, Spacer } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import {
  backArrow,
  circleStar,
  clockTiming,
  deliveryParcel,
  fav,
  Fonts,
} from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getBrands } from "@/actions/CategoryActions";
import FastImage from "react-native-fast-image";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import { renderNoData } from "@/components/FlatlistStyling";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { getUser } from "@/selectors/UserSelectors";
import { getSellers, sellerFavourites } from "@/actions/UserActions";
import { ShadowStyles } from "@/theme";
import { TYPES as TYPE } from "@/actions/UserActions";

export function BrandsSellers(params) {
  const dispatch = useDispatch();
  const routeId = params?.route?.params?.categoryId;
  const [selectedId, setSelectedId] = useState([0]);
  const [favourite, setFavourite] = useState(false);

  const brandsData = useSelector(getCategorySelector);
  const user = useSelector(getUser);
  const brandBody = {
    page: 1,
    limit: 10,
    category_id: params?.route?.params?.categoryId,
  };

  const getFavouriteSeller = useSelector(getUser)?.getFavouriteSellers;
  const [matchedIds, setMatchedIds] = useState(new Set());

  useEffect(() => {
    const idSet = new Set(getFavouriteSeller?.map((item) => item?.seller_id));
    setMatchedIds(idSet);
  }, [getFavouriteSeller]);

  useEffect(() => {
    dispatch(getBrands(brandBody));
  }, []);

  useEffect(() => {
    setSelectedId(brandsData?.brandsList?.[0]?.id);
    const sellersObject = {
      page: 1,
      limit: 10,
      brand_id: brandsData?.brandsList?.[0]?.id,
    };

    dispatch(getSellers(sellersObject));
  }, [brandsData]);

  const sellersGet = (item) => {
    setSelectedId(item.id);
    const sellersObject = {
      page: 1,
      limit: 10,
      brand_id: item.id,
    };
    dispatch(getSellers(sellersObject));
  };

  const isLoadingBrands = useSelector((state) =>
    isLoadingSelector([TYPES.GET_BRANDS], state)
  );
  const isLoadingProducts = useSelector((state) =>
    isLoadingSelector([TYPE.GET_SELLERS], state)
  );

  const colorChange = (item) => {
    setFavourite(!favourite);
    dispatch(sellerFavourites({ seller_id: item.id }));
  };

  const renderBrands = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={styles.categoryTouchableView}
        onPress={() => sellersGet(item)}
      >
        <View
          style={[
            styles.rowView,
            {
              borderWidth: item.id === selectedId ? 1 : 0,
              borderColor: COLORS.primary,
              backgroundColor:
                item.id === selectedId ? COLORS.white : COLORS.input_bg,
            },
          ]}
        >
          <FastImage
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.categoryImages}
          />
          <Text
            style={{
              marginHorizontal: SW(2),
              fontFamily: item.id === selectedId ? Fonts.Bold : Fonts.Regular,
              color: item.id === selectedId ? COLORS.primary : COLORS.text,
            }}
          >
            {item.name}
          </Text>
        </View>
        <Spacer space={SH(5)} />
        {/* <View
          style={{
            borderBottomWidth: item.id === selectedId ? 1 : null,
            borderColor: item.id === selectedId && COLORS.primary,
            width: "100%",
          }}
        ></View> */}
      </TouchableOpacity>
    </>
  );

  const renderSellers = ({ item, index }) => {
    const isMatched = matchedIds?.has(item?.id);
    return (
      <>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,
            flex: 1,
            paddingHorizontal: SW(15),
            marginHorizontal: SW(20),
            borderRadius: SW(10),
            paddingVertical: SH(15),
            ...ShadowStyles.shadow2,
          }}
          onPress={() =>
            navigate(NAVIGATION.productsBySeller, {
              sellerId: item?.unique_uuid,
              idSeller: item?.id,
            })
          }
        >
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => colorChange(item)}>
              <Image
                source={fav}
                style={[
                  styles.favIcon,
                  { tintColor: isMatched ? "red" : "black" },
                ]}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FastImage
              source={{ uri: item?.user_profiles?.profile_photo }}
              resizeMode="contain"
              style={styles.mainImageStyle}
            />
            <Spacer horizontal space={SW(15)} />
            <View>
              <Text
                style={{
                  color: COLORS.darkGrey,
                  fontFamily: Fonts.Bold,
                  fontSize: SF(18),
                  left: SW(3),
                }}
              >
                {item?.user_profiles?.organization_name}
              </Text>
              <View style={styles.rowAlign}>
                <Image
                  source={circleStar}
                  resizeMode="contain"
                  style={styles.iconStyle}
                />
                <Text style={styles.secondaryText}>
                  {item?.sellerRating?.rating}
                </Text>
              </View>
              <View style={styles.rowAlign}>
                <Image
                  source={clockTiming}
                  resizeMode="contain"
                  style={styles.iconStyle}
                />
                <Text style={styles.secondaryText}>
                  {item?.distance?.time}
                  {" min"}
                </Text>
              </View>
              <View style={styles.rowAlign}>
                <Image
                  source={deliveryParcel}
                  resizeMode="contain"
                  style={styles.iconStyle}
                />
                <Text style={styles.secondaryText}>
                  {item?.deliveryFee}
                  {" Delivery fee"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Spacer space={SH(15)} />
      </>
    );
  };
  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header title={"Sellers"} back={backArrow} enableBackButton />

      <View style={styles.upperView}>
        <Spacer space={SH(10)} />

        {isLoadingBrands ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={brandsData?.brandsList ?? []}
            renderItem={renderBrands}
            ListEmptyComponent={renderNoData}
            keyExtractor={(item) => item.id}
            extraData={brandsData?.brandsList ?? []}
          />
        )}
      </View>

      <Spacer space={SH(10)} />

      <View style={{ flex: 1 }}>
        {isLoadingProducts ? (
          <Loader message="Loading Sellers ..." />
        ) : (
          <FlatList
            data={user?.getSellersList ?? []}
            extraData={user?.getSellersList}
            renderItem={renderSellers}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </ScreenWrapper>
  );
}
