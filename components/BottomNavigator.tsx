import { createElement } from "react";
import { Button, XStack } from "tamagui";

import { CircleEllipsis, Home, Settings } from "@tamagui/lucide-icons";

import type { IconProps } from "@tamagui/lucide-icons/types/IconProps";

const bottomNavigatorButtons: BottomNavigatorButtonProps[] = [
  {
    Icon: Home,
    label: "Home",
    key: "bottom-navigator-button-1",
  },
  {
    Icon: Settings,
    label: "Settings",
    key: "bottom-navigator-button-2",
  },
  {
    Icon: CircleEllipsis,
    label: "About",
    key: "bottom-navigator-button-3",
  },
];

export function BottomNavigator() {
  return (
    <XStack
      justifyContent="center"
      alignItems="center"
      bg="$backgroundStrong"
      p="$2"
      borderTopLeftRadius="$5"
      borderTopRightRadius="$5"
    >
      {bottomNavigatorButtons.map((btnProps) =>
        createElement(BottomNavigatorButton, btnProps)
      )}
    </XStack>
  );
}

type BottomNavigatorButtonProps = {
  Icon: React.NamedExoticComponent<IconProps>;
  label: string;
  key: string;
};

function BottomNavigatorButton({ Icon, label }: BottomNavigatorButtonProps) {
  return (
    <Button
      size="$5"
      h="$6"
      flex={1}
      theme="blue"
      icon={Icon}
      scaleIcon={1.5}
      chromeless={true}
      style={{
        flexDirection: "column",
      }}
    >
      {label}
    </Button>
  );
}
