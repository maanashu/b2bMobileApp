/**
 * @format
 */

import { AppRegistry } from "react-native";
import { App } from "@/App";
import { name as appName } from "./app.json";

import "react-native-gesture-handler"; // do not remove this line ever

AppRegistry.registerComponent(appName, () => App);
