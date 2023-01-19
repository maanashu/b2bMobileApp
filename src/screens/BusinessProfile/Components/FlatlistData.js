import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  equip1,
  equip2,
  equip3,
  equip4,
  fiveStarReview,
  flagAmerica,
  fourRating,
  fullStarRating,
  pdfImage,
  purchasedItemPic,
  videoPic1,
  videoPic2,
  videoPic3,
  videoPic4,
} from "@/assets";
import { strings } from "@/localization";

export const Data = [
  {
    id: 1,
    image: certificate1,
  },
  {
    id: 2,
    image: certificate2,
  },
  {
    id: 3,
    image: certificate3,
  },
  {
    id: 4,
    image: certificate4,
  },
];
export const Inspection = [
  { id: 1, image: pdfImage },
  { id: 2, image: pdfImage },
];

export const Rating = [
  { id: 1, image: fourRating, title: strings.businessProfile.suplierService },
  {
    id: 2,
    image: fullStarRating,
    title: strings.businessProfile.onTimeShipment,
  },
  { id: 3, image: fourRating, title: strings.businessProfile.productQuality },
];

export const Bags = [
  {
    id: 1,
    image: videoPic1,
    title: strings.businessProfile.madeWell,
    subTitle: strings.businessProfile.subTitle,
    quantity: strings.businessProfile.moq,
  },
  {
    id: 2,
    image: videoPic2,
    title: strings.businessProfile.madeWell,
    subTitle: strings.businessProfile.subTitle,
    quantity: strings.businessProfile.moq,
  },
  {
    id: 3,
    image: videoPic3,
    title: strings.businessProfile.madeWell,
    subTitle: strings.businessProfile.subTitle,
    quantity: strings.businessProfile.moq,
  },
  {
    id: 4,
    image: videoPic4,
    title: strings.businessProfile.madeWell,
    subTitle: strings.businessProfile.subTitle,
    quantity: strings.businessProfile.moq,
  },
];

export const ProductDetails = [
  { id: 1, title: strings.businessProfile.yearestablished, detail: "2013" },
  {
    id: 2,
    title: strings.businessProfile.businessType,
    detail: "Custom manufacturer",
  },
  {
    id: 3,
    title: strings.businessProfile.country,
    detail: "Zhejiang, China",
  },
  {
    id: 4,
    title: strings.businessProfile.mainProducts,
    detail:
      "Baseball Cap/ Snapback Cap/ Bucket Hat/ Truck Cap/ Military Cap/ Ivy Cap",
  },
  {
    id: 5,
    title: strings.businessProfile.revenue,
    detail: "US$1 Million - US$2.5 Million",
  },
  {
    id: 6,
    title: strings.businessProfile.mainMarkets,
    detail: strings.businessProfile.mainMarketDetail,
  },
  {
    id: 7,
    title: strings.businessProfile.patents,
    detail:
      "Xichenqi Shouna Zhijia, Yizhong Wusheng Xichenqi Shouna Zhijia, The utility model relates to a metal lifting bag handle fixing structure, Vacuum cleaner storage bracket",
  },
  {
    id: 8,
    title: strings.businessProfile.productCertification,
    detail: "CE",
  },
];

export const ProductionEquipment = [
  { id: 1, image: equip1 },
  { id: 2, image: equip2 },
  { id: 3, image: equip3 },
  { id: 4, image: equip4 },
];

export const ReviewDetail = [
  {
    id: 1,
    country: flagAmerica,
    name: "B********h",
    rating: fiveStarReview,
    review: strings.businessProfile.customerReview,
    purchasedProduct: strings.businessProfile.purchasedProducts,
    purchasedItemPic: purchasedItemPic,
    productName: strings.businessProfile.madeWell,
    quantity: strings.businessProfile.itemNo,
  },
  {
    id: 2,
    country: flagAmerica,
    name: "B********h",
    rating: fiveStarReview,
    review: strings.businessProfile.customerReview,
    purchasedProduct: strings.businessProfile.purchasedProducts,
    purchasedItemPic: purchasedItemPic,
    productName: strings.businessProfile.madeWell,
    quantity: strings.businessProfile.itemNo,
  },
];
