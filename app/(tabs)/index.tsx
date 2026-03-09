import * as React from "react";
import { View } from "react-native";

import BottomRowTools from "@/components/ui/bottomRowTools";
import MainRowActions from "@/components/ui/mainRowActions";
import { CameraMode, CameraView } from "expo-camera";

export default function HomeScreen() {
  const cameraRef = React.useRef<CameraView>(null);
  const [cameraMode, setCameraMode] = React.useState<CameraMode>("picture");
  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={cameraRef} style={{ flex: 1 }} mode={cameraMode}>
        <MainRowActions
          cameraMode={cameraMode}
          handleTakePicture={() => {}}
          isRecording={false}
        />
        <BottomRowTools setCameraMode={setCameraMode} cameraMode={cameraMode} />
      </CameraView>
    </View>
  );
}
