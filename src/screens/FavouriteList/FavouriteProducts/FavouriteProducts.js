import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import {
  getFavouriteProducts,
  getFavouritesProduct,
} from "@/actions/UserActions";
import { useEffect } from "react";

export function FavouriteProducts() {
  const dispatch = useDispatch();
  const data = {
    page: 1,
    limit: 10,
  };
  useEffect(() => {
    dispatch(getFavouriteProducts(data));
  }, []);

  return <View></View>;
}

const styles = StyleSheet.create({});
