import * as React from "react";
import { View } from "react-native";

import IconButton from "@/components/ui/iconButton";
import { CameraView } from "expo-camera";

export default function HomeScreen() {
  const cameraRef = React.useRef<CameraView>(null);
  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={cameraRef} style={{ flex: 1 }}>
        <IconButton
          androidName="accessibility"
          iosName="0.circle"
          onPress={() => {}}
        />
      </CameraView>
    </View>
  );
}
