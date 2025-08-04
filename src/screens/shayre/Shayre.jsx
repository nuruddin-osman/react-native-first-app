import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { shayre } from '../../components/DummyArr';
import CustomHeader from '../../components/CustomHeader';
import { shareQuote } from '../../components/share';
import { copyToClipboard } from '../../components/copy';

const Shayre = () => {
  return (
    <View className="px-3 bg-white">
      <CustomHeader title="Shayre" />
      <FlatList
        data={shayre}
        renderItem={({ item }) => (
          <>
            <View className="mb-10">
              <View className="bg-zinc-800 w-full h-[30vh] p-5 rounded-s-xl">
                <Text className="text-white text-xl text-center">
                  {item.content}
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center bg-blue-400 p-5 rounded-e-xl">
                <TouchableOpacity
                  onPress={() => copyToClipboard(item.content)}
                  className="bg-[#e1ecf4] px-4 py-2 rounded-lg"
                >
                  <Text className="text-[#39739d] font-bold">কপি করুন</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => shareQuote(item.content)}
                  className="bg-green-600 px-4 py-2 rounded-lg"
                >
                  <Text className="text-white font-bold">শেয়ার করুন</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Shayre;
