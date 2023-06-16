import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { getFavouritesProduct } from "@/actions/UserActions";
import { useEffect } from "react";

export function FavouritesProduct() {

  const dispatch = useDispatch();
  const data = {
    page: 1,
    limit: 10,
  };
  useEffect(() => {
    dispatch(getFavouritesProduct(data));
  }, []);

  return (
    <View>
      <Text>FavouritesProduct</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
