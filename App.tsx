import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { Button, TamaguiProvider, Theme, YStack } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import config from "./tamagui.config";
import { BottomNavigator } from "./components/BottomNavigator";

export default function App() {
  const colorScheme = useColorScheme();
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
        <YStack flex={1} backgroundColor={"$backgroundSoft"}>
          <YStack flex={1} justifyContent="center" alignItems="center">
            <SafeAreaView>
              <Button color="$color" justifyContent="center">
                {colorScheme}
              </Button>
            </SafeAreaView>
          </YStack>
          <BottomNavigator />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
