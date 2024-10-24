import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView as RNGestureHandlerRootView} from 'react-native-gesture-handler';

interface GestureHandlerRootView
  extends React.ComponentProps<typeof RNGestureHandlerRootView> {}

const GestureHandlerRootView: React.FC<GestureHandlerRootView> = ({
  children,
}) => {
  return (
    <RNGestureHandlerRootView style={styles.container}>
      {children}
    </RNGestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default GestureHandlerRootView;
