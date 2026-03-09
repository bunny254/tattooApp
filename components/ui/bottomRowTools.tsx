import { CameraMode } from "expo-camera";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../themed-text";
import IconButton from "./iconButton";

interface BottomRowToolsProps {
  cameraMode?: CameraMode;
  setCameraMode?: React.Dispatch<React.SetStateAction<CameraMode>>;
}
export default function BottomRowTools({
  cameraMode,
  setCameraMode,
}: BottomRowToolsProps) {
  return (
    <View style={[styles.directionRowItemsCenter, styles.bottomContainer]}>
      <Link href={"/media-library"} asChild>
        <IconButton
          androidName="library"
          iosName="photo.stack"
          onPress={() => {}}
        />
      </Link>
      <View style={[styles.directionRowItemsCenter]}>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText
            style={{ fontWeight: cameraMode === "picture" ? "bold" : "100" }}
          >
            Photo
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ThemedText
            style={{ fontWeight: cameraMode === "video" ? "bold" : "100" }}
          >
            Video
          </ThemedText>
        </TouchableOpacity>
      </View>
      <IconButton
        androidName="add"
        iosName="magnifyingglass"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  directionRowItemsCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    alignSelf: "center",
    bottom: 6,
  },
});
