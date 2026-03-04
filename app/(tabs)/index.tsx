import * as React from "react";
import { View } from "react-native";

import { CameraView } from "expo-camera";

export default function HomeScreen() {
  const cameraRef = React.useRef<CameraView>(null);
  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={cameraRef} style={{ flex: 1 }} />
    </View>
  );
}
