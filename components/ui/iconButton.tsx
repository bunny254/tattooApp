import { Ionicons } from "@expo/vector-icons";
import { SFSymbol, SymbolView } from "expo-symbols";
import { ComponentProps } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

const CONTAINER_PADDING = 5;
const CONTAINER_WIDTH = 34;
const ICON_SIZE = 25;

interface IconButtonProps {
  iosName: SFSymbol;
  androidName: ComponentProps<typeof Ionicons>["name"];
  contaianerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  width?: number;
  height?: number;
}

export default function IconButton({
  androidName,
  iosName,
  contaianerStyle,
  onPress,
  width,
  height,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor: "#00000050",
          borderRadius: (CONTAINER_WIDTH + CONTAINER_PADDING * 2) / 2,
          width: CONTAINER_WIDTH,
          padding: CONTAINER_PADDING,
        },
        contaianerStyle,
      ]}
    >
      <SymbolView
        name={iosName}
        size={ICON_SIZE}
        style={width && height ? { width, height } : {}}
        tintColor={"white"}
        fallback={
          <Ionicons size={ICON_SIZE} name={androidName} color="white" />
        }
      />
    </Pressable>
  );
}
