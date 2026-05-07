import React, { useState } from 'react';
import { StyleSheet, Pressable, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MainContainerProps {
  children?: React.ReactNode | undefined;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const [isSecure, setIsSecure] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={styles.container}
      >
        {children}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainContainer;
