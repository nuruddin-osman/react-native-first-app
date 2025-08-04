import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import { kobita } from '../../components/DummyArr';
import CustomHeader from '../../components/CustomHeader';
import { shareQuote } from '../../components/share';
import { copyToClipboard } from '../../components/copy';

const Kobita = () => {
  return (
    <View className="px-3 bg-white">
      <CustomHeader title="Kobita" />
      <FlatList
        data={kobita}
        renderItem={({ item }) => (
          <>
            <View className="mb-10">
              <ScrollView className="bg-violet-950 w-full h-[60vh] p-5 rounded-tl-xl rounded-tr-xl">
                <Text className="text-white text-xl text-center">
                  {item.content}
                </Text>
              </ScrollView>
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

export default Kobita;
