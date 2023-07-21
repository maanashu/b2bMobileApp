import { Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./NewProducts.style";
import { ScreenWrapper, Spacer, SubHeader } from "@/components";
import { SF, SH, SW } from "@/theme/ScalerDimensions";
import { COLORS } from "@/theme/Colors";
import { backArrow, Fonts, image10 } from "@/assets";
import { strings } from "@/localization";
import { Header } from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCategorySelector } from "@/selectors/CategorySelectors";
import { getCategory } from "@/actions/CategoryActions";
import { getProduct } from "@/actions/ProductActions";
import { getProductSelector } from "@/selectors/ProductSelectors";
import { navigate } from "@/navigation/NavigationRef";
import { NAVIGATION } from "@/constants";
import FastImage from "react-native-fast-image";
import { renderNoData } from "@/components/FlatlistStyling";
import { isLoadingSelector } from "@/selectors/StatusSelectors";
import { TYPES } from "@/Types/Types";
import { Loader } from "@/components/Loader";
import { getUser } from "@/selectors/UserSelectors";
import { getSellers } from "@/actions/UserActions";

export function NewProducts() {
  const [selectedId, setSelectedId] = useState(0);

  const dispatch = useDispatch();
  const categoryData = useSelector(getCategorySelector);
  const user = useSelector(getUser);
  const categoryArray = categoryData?.categoryList?.data;
  const splicedArray = categoryArray?.slice(0, 7);

  const ProductsData = useSelector(getProductSelector);
  const Products = ProductsData?.product;
  const newValue = {
    name: "All",
  };
  splicedArray?.unshift(newValue);

  const handleNavigation = (item) => {
    const body = {
      page: 1,
      limit: 20,
      delivery_options: "4",
      product_id: item,
    };
    dispatch(getSellers(body));
    navigate(NAVIGATION.sellersByProduct, {
      itemId: item,
    });
  };

  const getAllProducts = () => {
    const probject = {
      app_name: "b2b",
      delivery_options: "4",
      page: 1,
      limit: 30,
      need_trending: "true",
      service_type: "product",
    };
    dispatch(getProduct(probject));
  };

  useEffect(() => {
    const Object = {
      page: 1,
      limit: 20,
      service_type: "product",
      main_category: true,
    };
    dispatch(getCategory(Object));
    getAllProducts();
    setSelectedId(splicedArray?.[0]?.id);
  }, []);

  const isLoadingProducts = useSelector((state) =>
    isLoadingSelector([TYPES.GET_PRODUCT], state)
  );

  const getProductsList = (item) => {
    setSelectedId(item?.id);
    const probject = {
      app_name: "b2b",
      delivery_options: "4",
      page: 1,
      limit: 30,
      category_ids: item.id,
      need_trending: true,
    };
    dispatch(getProduct(probject));
  };

  const renderCategory = ({ item, index }) => (
    <>
      <TouchableOpacity
        style={{
          paddingLeft: SW(10),
          alignItems: "center",
        }}
        onPress={() => {
          if (index === 0) {
            setSelectedId();
            getAllProducts();
          } else {
            getProductsList(item);
          }
        }}
      >
        <View
          style={{
            borderWidth: item?.id === selectedId ? 1 : null,
            padding: SW(5),
            borderRadius: SW(20),
            borderColor:
              item?.id === selectedId ? COLORS.primary : COLORS.light_grey,

            backgroundColor:
              item?.id === selectedId ? COLORS.white : COLORS.input_bg,
          }}
        >
          <Text
            style={{
              marginHorizontal: SW(1),
              fontFamily: item?.id === selectedId ? Fonts.Bold : Fonts.Regular,
              color: item?.id === selectedId ? COLORS.primary : COLORS.text,
            }}
          >
            {item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );

  const listDetail = ({ item, index }) => {
    const htmlText = item?.description;
    const regex = /<p>(.*?)<\/p>/; // Regex pattern to match the content within <p> tags

    const matches = htmlText?.match(regex); // Find matches using the regex pattern

    let extractedText = "";
    if (matches && matches.length > 1) {
      extractedText = matches[1]; // Extracted text is stored in the second element of the matches array
    }

    return (
      <>
        <TouchableOpacity
          onPress={() => handleNavigation(item?.id)}
          style={[
            styles.ShoesStyle,
            {
              paddingVertical: index % 2 === 0 ? SH(10) : SH(10),
              marginTop: index === 1 ? SH(40) : index === 0 ? SH(0) : SH(10),
              bottom: index % 2 === 0 ? SH(10) : SH(50),
            },
          ]}
        >
          <Spacer space={SH(10)} />
          <View style={{ alignItems: "center" }}>
            <FastImage
              source={item.image == undefined ? image10 : { uri: item.image }}
              resizeMode="cover"
              style={{
                width: SW(153),
                height: index === 0 ? SH(180) : SH(150),
                borderRadius: SW(5),
              }}
            />
          </View>
          <Spacer space={SH(5)} />

          <Text numberOfLines={2} style={styles.productsTitle}>
            {item.name}
            {item.description?.match(regex) ? (
              <Text>{" " + extractedText}</Text>
            ) : (
              <Text style={styles.productSubTitle}> {item.description}</Text>
            )}
          </Text>

          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            {/* <Text style={styles.productsQuantity}>{`MOQ:10`}</Text> */}

            <Spacer space={SH(1)} />
            {user?.user?.payload?.token && (
              <Text style={styles.priceText}>
                {"$ " + item.price} /
                <Text style={{ fontFamily: Fonts.Regular, fontSize: SF(14) }}>
                  {" Carton"}
                </Text>
                {/* <Text style={styles.categoryText}> {item.product_type.name}</Text> */}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <ScreenWrapper style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header
        title={strings.newProducts.newProducts}
        back={backArrow}
        enableBackButton
        isFilterIconRequired
        isSearcgIconRequired
      />
      <SubHeader
        title={strings.newProducts.newProducts}
        subTitle={strings.newProducts.subText}
      />

      <View
        style={{ paddingHorizontal: SW(20), flex: 1, paddingVertical: SH(15) }}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Products?.data ?? []}
          extraData={Products?.data}
          renderItem={listDetail}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={renderNoData}
          numColumns={2}
        />
        {isLoadingProducts ? <Loader message="Loading data ..." /> : null}
      </View>
      <View style={styles.upperView}>
        <Spacer space={SH(10)} />
        <View style={{ flexDirection: "row" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={splicedArray}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
