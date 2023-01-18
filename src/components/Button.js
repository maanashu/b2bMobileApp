import { useTheme } from "@react-navigation/native";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, SH, TextStyles } from "@/theme";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    width: "100%",
    backgroundColor: COLORS.activeTab,
    borderWidth: 0,
    height: SH(45),
  },
});

export function Button({ style, textStyle, title, ...rest }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: colors.border }, style]}
      {...rest}
    >
      <Text style={[{ color: COLORS.white }, TextStyles.label, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
