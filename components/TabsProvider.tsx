import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useTheme } from "tamagui";

export function TabsProvider() {
  const theme = useTheme();
  console.log(theme.background.val);

  return (
    <ThemeProvider value={DarkTheme}>
      <Tabs screenOptions={{}} />
    </ThemeProvider>
  );
}
