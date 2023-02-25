import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, YStack } from "tamagui";

import { BottomNavigator } from "./BottomNavigator";

interface AppLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export function AppLayout({ children }: AppLayoutProps) {
  const [scrollViewWidth, setScrollViewWidth] = useState(320);

  return (
    <YStack flex={1} backgroundColor={"$backgroundSoft"}>
      <YStack flex={1} justifyContent="center" alignItems="center">
        <SafeAreaView
          onLayout={(e) => setScrollViewWidth(e.nativeEvent.layout.width)}
          style={{
            width: "100%",
          }}
        >
          <ScrollView
            h="100%"
            w={scrollViewWidth}
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            {children}
          </ScrollView>
        </SafeAreaView>
      </YStack>
      <BottomNavigator />
    </YStack>
  );
}
