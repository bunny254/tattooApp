import { Colors } from "@/constants/theme";
import { CameraMode } from "expo-camera";
import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, View } from "react-native";

interface MainRowActionsProps {
  handleTakePicture: () => void;
  cameraMode: CameraMode;
  isRecording: boolean;
}

export default function MainRowActions({
  cameraMode,
  handleTakePicture,
  isRecording,
}: MainRowActionsProps) {
  return (
    <View>
      <Pressable onPress={handleTakePicture}>
        <SymbolView
          name={
            cameraMode === "picture"
              ? "camera"
              : isRecording
                ? "record.circle"
                : "circle.circle"
          }
          size={90}
          type="hierarchical"
          tintColor={isRecording ? Colors.light.snapPrimary : "white"}
          animationSpec={{
            effect: {
              type: isRecording ? "pulse" : "bounce",
            },
            repeating: isRecording,
          }}
        />
      </Pressable>
      {[0, 1, 2, 3].map((item) => (
        <SymbolView
          name="face.dashed"
          size={90}
          type="hierarchical"
          tintColor="white"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: 100,
    bottom: 0,
  },
});
