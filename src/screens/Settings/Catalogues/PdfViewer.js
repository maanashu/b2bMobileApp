import React from "react";
import { View, StyleSheet } from "react-native";
import Pdf from "react-native-pdf";

export function PdfViewer(props) {
  console.log("url-->" + props?.route?.params?.pdfUrl);
  return (
    <View style={styles.container}>
      <Pdf
        source={{ uri: props?.route?.params?.pdfUrl }}
        style={styles.pdf}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: "100%",
  },
});
