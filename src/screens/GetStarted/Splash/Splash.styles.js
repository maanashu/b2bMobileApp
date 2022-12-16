import { Fonts } from "@/assets";
import { COLORS } from "@/theme";
import { SH, SF, SW } from "@/theme";
import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.primary,
    alignItems:'center',
    paddingHorizontal:moderateScale(15)
  },
  flexOne:{
   flex:1
  },
  jobrSplash:{
    width:SW(213),
    height:SW(80),
    resizeMode:'contain'
  },
  register:{
    backgroundColor:COLORS.green,
    borderColor:'transparent',
    height:SH(64)
  },
  signIn:{
    backgroundColor:COLORS.primary,
    borderColor:'transparent',
    height:SH(64),
    borderRadius:5
  },
  textStyle:{
    // fontFamily:Fonts.Italic,
    fontSize:SF(16),
    color:COLORS.primary
  },
  signtextStyle:{
    // fontFamily:Fonts.Regular,
    fontSize:SF(16),
    color:COLORS.white
  }
});