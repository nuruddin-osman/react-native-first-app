import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import './global.css';

const App = ({
  backgroundColor = '#6200ee',
  barStyle = 'light-content', // 'dark-content' or 'light-content'
  translucent = true,
}) => {
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
      <View>
        <Text className="text-xl text-red-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          veritatis, blanditiis dolor vitae eius, deleniti corporis voluptate
          officiis pariatur illo ullam maxime. Maiores quibusdam quod
          necessitatibus voluptatibus accusamus molestias commodi debitis, unde
          velit dolores perspiciatis nemo suscipit deleniti veniam, pariatur
          nisi neque aspernatur ipsum officiis obcaecati. Tempora hic inventore
          sapiente?
        </Text>
      </View>
    </>
  );
};

export default App;
