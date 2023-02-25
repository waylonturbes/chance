import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import { useFonts } from "expo-font";

import config from "./tamagui.config";
import { useThemeStore } from "./stores";
import { AppLayout } from "./components/AppLayout";

export default function App() {
  const colorScheme = useColorScheme();
  const theme = useThemeStore((state) => state.theme);
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
        <AppLayout></AppLayout>
      </Theme>
    </TamaguiProvider>
  );
}
