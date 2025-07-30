import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full p-5 bg-slate-400 h-screen">
      <View className="flex flex-row flex-wrap gap-5 w-full py-10">
        <View className="w-[47.5%] bg-orange-400 rounded-lg p-3 h-48 flex items-center justify-center">
          <TouchableOpacity onPress={() => navigation.navigate('Gaan')}>
            <Text className="text-3xl font-bold text-[#2d2d2d]">Gozol</Text>
          </TouchableOpacity>
        </View>
        <View className="w-[47.5%] bg-[#4d0066] rounded-lg p-3 h-48 flex items-center justify-center">
          <Text className="text-3xl font-bold text-[#FFF]">Gozol</Text>
        </View>
        <View className="w-[47.5%] bg-[#a1a475] rounded-lg p-3 h-48 flex items-center justify-center">
          <Text className="text-3xl font-bold text-[#FFF]">Gozol</Text>
        </View>
        <View className="w-[47.5%] bg-[#de27d7] rounded-lg p-3 h-48 flex items-center justify-center">
          <Text className="text-3xl font-bold text-[#2d2d2d]">Gozol</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
