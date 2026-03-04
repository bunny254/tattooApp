import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";

export function useFirstTimeOpen() {
  const [isFirstTimeOpen, setIsFirstTimeOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function checkFirstTimeOpen() {
      try {
        const hasOpened = await AsyncStorage.getItem("hasOpened");

        if (hasOpened === null) {
          setIsFirstTimeOpen;
        } else {
          setIsFirstTimeOpen(false);
        }
      } catch (e) {
        console.error("Error checking first time open:", e);
      } finally {
        setIsLoading(false);
      }
    }
    checkFirstTimeOpen();
  }, []);

  return { isFirstTimeOpen, isLoading };
}
