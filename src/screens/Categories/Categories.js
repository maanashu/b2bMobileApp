import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Categories.styles";
import { Apparel, Electronices, Food, Sports, Tobacco } from "@/assets";
import { Button, ScreenWrapper, Spacer } from "@/components";
import { SH, SW } from "@/theme/ScalerDimensions";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants/navigation";
import { Search } from "@/components/Search";
import { COLORS } from "@/theme";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/actions/CategoryActions";
import { strings } from "@/localization";
import { categoryReducer } from "@/reducers/CategoryReducer";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
export function Categories() {
  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);

  const categoryArray = categoryData?.categories;

  const [selectedId, setSelectedId] = useState(null);

  const [select, setSelect] = useState(categoryArray);

  const isCategoryLoading = useSelector((state) =>
    isLoadingSelector([TYPES.GET_CATEGORY], state)
  );

  const SelectCategory = (item) => {
    const newItem = select.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected};
      } else {
        return val;
      }
    });

    setSelect(newItem);
  };

  const renderNoData = () => (
    <View>
      <Text>{strings.common.noDataFound}</Text>
    </View>
  );

  const DATA = [
    {
      id: "1",
      title: " Apparel ",
      image: Apparel,
    },
    {
      id: "2",
      title: " Tobacco ",
      image: Tobacco,
    },
    {
      id: "3",
      title: " Food ",
      image: Food,
    },
    {
      id: "4",
      title: " Electronices ",
      image: Electronices,
    },
    {
      id: "5",
      title: " Sports ",
      image: Sports,
    },
  ];
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity
      onPress={() => SelectCategory(item)}
      style={[
        styles.item,
        backgroundColor,
        { borderColor: item.selected ? COLORS.primary : COLORS.light_border },
      ]}
    >
      <Image source={{ uri: item?.image }} style={styles.iconStyle} />
      <Text style={[styles.title, textColor]}> {item?.name}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }) => {
    const color = item.title === selectedId ? "red" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.title)}
        textColor={{ color }}
      />
    );
  };

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  useEffect(() => {}, [categoryData]);

  return (
    <ScreenWrapper style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>{strings.buttonText.skip}</Text>
        </TouchableOpacity>

        <Spacer space={SH(34)} />
        <Text style={styles.mainHeading}>{strings.categories.addtopCat}</Text>

        <Spacer space={SH(15)} />
        <Text style={styles.heading}>{strings.categories.letsHelp}</Text>

        <Spacer space={SH(40)} />
        <Search
          placeholder={strings.categories.seatchHere}
          style={{ width: SW() }}
        />

        <Spacer space={SH(30)} />
        <Text style={styles.smalltext}>{strings.categories.suggestion}</Text>

        <Spacer space={SH(10)} />
        {isCategoryLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={select}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={select}
            numColumns={3}
            ListEmptyComponent={renderNoData}
          />
        )}

        <Spacer space={SH(15)} />

        <Button
          title={"Next"}
          onPress={() => {
            navigate(NAVIGATION.home);
          }}
          style={styles.buttonStyle}
          textStyle={{ color: COLORS.black }}
        />
        <Spacer space={SH(20)} />
      </View>
    </ScreenWrapper>
  );
}
