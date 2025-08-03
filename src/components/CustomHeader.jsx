import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white shadow-md">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ChevronLeft color="red" size={48} />
      </TouchableOpacity>
      <Text className="text-lg font-semibold text-gray-800">{title}</Text>
      <View className="w-6" /> {/* ব্যালেন্স করার জন্য খালি স্পেস */}
    </View>
  );
};

export default CustomHeader;
