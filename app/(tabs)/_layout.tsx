import { Redirect, Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useFirstTimeOpen } from "@/hooks/use-first-time-open";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isFirstTimeOpen, isLoading } = useFirstTimeOpen();

  if (isLoading) return <></>;
  if (isFirstTimeOpen) return <Redirect href="/onboarding" />;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Camera",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name={"camera"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
