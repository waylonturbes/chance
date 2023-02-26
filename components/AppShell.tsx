import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Theme } from "tamagui";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";

import config from "../tamagui.config";
import { useThemeStore } from "../stores";
import { TabsProvider } from "./TabsProvider";

export function AppShell() {
  const colorScheme = useColorScheme();
  const currentAppTheme = useThemeStore((state) => state.theme);
  const colorMode = useThemeStore((state) => state.colorMode);
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        <TabsProvider />
      </Theme>
    </TamaguiProvider>
  );
}
