// import React from "react";
// import {
//   FlatList,
//   Image,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { styles } from "./AddMoneyToWallet.styles";
// import { Spacer } from "@/components";
// import { SH } from "@/theme/ScalerDimensions";
// import { goBack, navigate } from "@/navigation/NavigationRef";
// import { ms } from "react-native-size-matters";
// import { coins, whiteJobr, rightArrowBlue, referralCorner } from "@/assets";
// import { strings } from "@/localization";
// import { NAVIGATION } from "@/constants";

// const data = [
//   {
//     name: "JBR 10",
//     sub: "USD $10",
//     id: 1,
//   },
//   {
//     name: "JBR 25",
//     sub: "USD $25",
//     id: 2,
//   },
//   {
//     name: "JBR 50",
//     sub: "USD $50",
//     id: 3,
//   },
//   {
//     name: "JBR 100",
//     sub: "USD $100",
//     id: 4,
//   },
// ];

// export function AddMoneyToWallet() {
//   const renderItem = ({ item }) => (
//     <View style={styles.rowMainCard}>
//       <View style={styles.renderinput}>
//         <Image source={whiteJobr} resizeMode="contain" style={styles.img} />
//         <Text
//           style={[
//             styles.getName,
//             { alignSelf: "center", paddingHorizontal: 10 },
//           ]}
//         >
//           {item.name}
//         </Text>
//       </View>

//       <TouchableOpacity
//         onPress={() => navigate(NAVIGATION.paymentMethod, { data: "wallet" })}
//         style={styles.row}
//       >
//         <Text style={styles.formText}>{item.sub}</Text>
//         <Image
//           source={rightArrowBlue}
//           resizeMode="contain"
//           style={styles.mask}
//         />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.cont}>
//       <Spacer space={SH(56)} />
//       <View style={{ alignItems: "flex-end", paddingHorizontal: ms(20) }}>
//         <TouchableOpacity onPress={() => goBack()}>
//           <Text style={styles.closeText}>{strings.wallet.close}</Text>
//         </TouchableOpacity>
//       </View>
//       <Spacer space={SH(7)} />
//       <View style={[styles.Container]}>
//         <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
//           <View style={styles.headingRowView}>
//             <Text style={styles.walletText}>{strings.wallet.wallet}</Text>
//             <Image
//               source={coins}
//               resizeMode="contain"
//               style={styles.coinIcon}
//             />
//           </View>
//           <View>
//             <Text style={{ textAlign: "center" }}>
//               {strings.wallet.useCoin}
//             </Text>
//           </View>
//           <Spacer space={SH(15)} />

//           <View style={{ paddingHorizontal: ms(20) }}>
//             <View style={styles.referralView}>
//               <View style={{ paddingLeft: ms(10) }}>
//                 <Spacer space={SH(10)} />
//                 <Text style={styles.refferalBigText}>Get 15.00 JBR</Text>

//                 <Text style={styles.refferalsmallText}>
//                   {strings.wallet.getJbr}
//                 </Text>
//                 <Spacer space={SH(17)} />
//                 <View style={styles.shareButton}>
//                   <Text style={styles.shareText}>Share</Text>
//                 </View>
//               </View>
//               <Image
//                 source={referralCorner}
//                 resizeMode="cover"
//                 style={styles.cornerImage}
//               />
//             </View>
//           </View>

//           <Spacer space={SH(15)} />
//           <FlatList
//             data={data}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//             showsVerticalScrollIndicator={false}
//             // initialNumToRender={2}
//             // maxToRenderPerBatch={2}
//             // windowSize={1}
//             removeClippedSubviews={true}
//           />
//           <Spacer space={SH(15)} />
//           <View style={{ paddingHorizontal: ms(20), alignItems: "center" }}>
//             <Text style={styles.agreementText}>{strings.wallet.agreement}</Text>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }
