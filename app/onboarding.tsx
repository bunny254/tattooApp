import { Alert, Button, StyleSheet } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Colors } from "@/constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCameraPermissions, useMicrophonePermissions } from "expo-camera";
import { Image } from "expo-image";
import { usePermissions } from "expo-media-library";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";

export default function OnboardingScreen() {
  const [cameraPermissions, requestCameraPermissions] = useCameraPermissions();
  const [microphonePermissions, requestMicrophonePermissions] =
    useMicrophonePermissions();
  const [mediaLibraryPermissions, requestMediaLibraryPermissions] =
    usePermissions();

  async function handleContinue() {
    const allPermissions = await requestAllPermissions();
    if (allPermissions) {
      router.replace("/(tabs)");
    } else {
      Alert.alert("All permissions are required to use this app.");
    }
  }
  async function requestAllPermissions() {
    const cameraStatus = await requestCameraPermissions();
    if (!cameraStatus.granted) {
      Alert.alert("Camera permission is required to use this app.");
      return false;
    }

    const microphoneStatus = await requestMicrophonePermissions();
    if (!microphoneStatus.granted) {
      Alert.alert("Microphone permission is required to use this app.");
      return false;
    }

    const mediaLibraryStatus = await requestMediaLibraryPermissions();
    if (!mediaLibraryStatus.granted) {
      Alert.alert("Media Library permission is required to use this app.");
      return false;
    }
    await AsyncStorage.setItem("hasOpened", "true");
    return true;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <SymbolView
          name="camera.circle"
          size={250}
          type="hierarchical"
          tintColor={Colors.dark.snapPrimary}
          animationSpec={{
            effect: {
              type: "bounce",
            },
          }}
          fallback={
            <Image
              source={require("@/assets/images/partial-react-logo.png")}
              style={styles.reactLogo}
            />
          }
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Snapchat Camera!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>
        {" "}
        Welcome! To provide the best experience, this app requires permission
        for the following:
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Camera Permissions</ThemedText>
        <ThemedText>Required to take photos and videos</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mic Permissions</ThemedText>
        <ThemedText>Required to record audio for videos</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Folder Access Permissions</ThemedText>
        <ThemedText>Save/ view your captures</ThemedText>
      </ThemedView>
      <Button title="Continue" onPress={handleContinue} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
