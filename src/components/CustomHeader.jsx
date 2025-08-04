import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center px-4 py-3 bg-white gap-8">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronLeft color="#2d2d2d" size={30} />
      </TouchableOpacity>
      <View>
        <Text className="text-3xl font-semibold text-gray-800">{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
