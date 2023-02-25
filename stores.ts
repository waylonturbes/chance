import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeState = {
  colorMode: "system" | "dark" | "light";
  theme: "orange" | "blue" | "red" | "purple" | "yellow" | "pink" | "green";
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, _) => ({
      theme: "blue",
      colorMode: "system",
      changeTheme: (newTheme: ThemeState["theme"]) => set({ theme: newTheme }),
      changeColorMode: (newColorMode: ThemeState["colorMode"]) =>
        set({ colorMode: newColorMode }),
    }),
    {
      name: "theme",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

type ScoreboardState = {
  wins: number;
  losses: number;
};

const scoreboardInitialState: ScoreboardState = { wins: 0, losses: 0 };

export const useScoreboardStore = create<ScoreboardState>()(
  persist(
    (set, get) => ({
      wins: 0,
      losses: 0,
      incrementWins: () => set({ wins: get().wins + 1 }),
      incrementLosses: () => set({ losses: get().losses + 1 }),
      reset: () => set(scoreboardInitialState),
    }),
    {
      name: "scoreboard",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
