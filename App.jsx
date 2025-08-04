import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import Gaan from './src/screens/gaan/Gaan';
import Gozol from './src/screens/gozol/Gozol';
import Kobita from './src/screens/kobita/Kobita';
import Shayre from './src/screens/shayre/Shayre';

const App = ({
  backgroundColor = '#6200ee',
  barStyle = 'light-content', // 'dark-content' or 'light-content'
  translucent = true,
}) => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <View
        style={{
          height:
            Platform.OS === 'android' && translucent
              ? StatusBar.currentHeight
              : 0,
          backgroundColor,
        }}
      >
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={barStyle}
          translucent={translucent}
        />
      </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'মোটিভেশনাল উক্তি ২০২৫',
              headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 4, // Android shadow
                shadowOpacity: 0.25, // iOS shadow
              },
              headerTitleStyle: {
                fontSize: 30,
                fontWeight: 'bold',
                color: '#333333',
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Gaan"
            component={Gaan}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Gozol"
            component={Gozol}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Kobita"
            component={Kobita}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Shayre"
            component={Shayre}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
