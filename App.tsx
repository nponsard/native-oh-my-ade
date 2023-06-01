import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import {
  Button,
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Persons from "./Persons";

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  console.log(theme);

  const paperTheme = useMemo(
    () =>
      colorScheme === "dark"
        ? { ...MD3DarkTheme, colors: theme.dark }
        : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );

  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Persons />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
