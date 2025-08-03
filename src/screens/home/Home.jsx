import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HomeBg from '../../assets/image/homeBg.jpg';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={HomeBg} resizeMode="cover">
      <View className="w-full h-screen px-4">
        <View className="flex flex-row flex-wrap gap-5 w-full ">
          <View className="w-[47%] bg-orange-400 rounded-lg p-3 h-48 flex items-center justify-center">
            <TouchableOpacity onPress={() => navigation.navigate('Gaan')}>
              <Text className="text-3xl font-bold text-[#2d2d2d]">Gaan</Text>
            </TouchableOpacity>
          </View>
          <View className="w-[47%] bg-[#4d0066] rounded-lg p-3 h-48 flex items-center justify-center">
            <TouchableOpacity onPress={() => navigation.navigate('Gozol')}>
              <Text className="text-3xl font-bold text-[#FFF]">Gozol</Text>
            </TouchableOpacity>
          </View>
          <View className="w-[47%] bg-[#a1a475] rounded-lg p-3 h-48 flex items-center justify-center">
            <TouchableOpacity onPress={() => navigation.navigate('Kobita')}>
              <Text className="text-3xl font-bold text-[#2d2d2d]">Kobita</Text>
            </TouchableOpacity>
          </View>
          <View className="w-[47%] bg-[#de27d7] rounded-lg p-3 h-48 flex items-center justify-center">
            <TouchableOpacity onPress={() => navigation.navigate('Shayre')}>
              <Text className="text-3xl font-bold text-[#2d2d2d]">Shayre</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;
