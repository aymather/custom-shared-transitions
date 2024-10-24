import {
  NavigationContainer,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

export const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  HomePage: undefined;
  DetailsPage: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomePage'
>;
export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DetailsPage'
>;
export type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'DetailsPage'
>;

const DetailsPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const back = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>Details Page</Text>
      <Button title="Back" onPress={back} />
      <Animated.View sharedTransitionTag="box" style={styles.box2} />
    </View>
  );
};

const HomePage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const goToDetails = () => {
    navigation.navigate('DetailsPage');
  };
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button onPress={goToDetails} title="Details" />
      <Animated.View sharedTransitionTag="box" style={styles.box1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    backgroundColor: 'red',
    borderRadius: 5,
    height: 100,
    width: 100,
  },
  box2: {
    backgroundColor: 'red',
    borderRadius: 50,
    height: 200,
    width: 200,
  },
});

const TransitionMaster = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TransitionMaster;
