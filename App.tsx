import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GestureHandlerRootView from './src/GestureHandlerRootView';
import TransitionMaster from './src/TransitionMaster';

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <TransitionMaster />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
