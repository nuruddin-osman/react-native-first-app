import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
  Share,
} from 'react-native';
import React, { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import { bani } from '../../components/DummyArr';
import CustomHeader from '../../components/CustomHeader';

const Gaan = () => {
  const copyToClipboard = content => {
    Clipboard.setString(content);
    Alert.alert('অনুলিপি সফল', 'উক্তিটি কপি করা হয়েছে ✅');
  };

  const shareQuote = async content => {
    try {
      const result = await Share.share({
        message: content,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type: ', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {}
    Alert.alert('ত্রুটি', 'শেয়ার করতে ব্যর্থ ❌');
    console.error(error.message);
  };

  return (
    <View className="px-3 bg-white">
      <CustomHeader title="Gaan" />
      <FlatList
        data={bani}
        renderItem={({ item }) => (
          <>
            <View className="mb-10">
              <View className="bg-gray-950 w-full h-[30vh] p-5 rounded-s-xl">
                <Text className="text-white text-xl text-center">
                  {item.content}
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center bg-blue-400 p-5 rounded-e-xl">
                <TouchableOpacity
                  onPress={() => copyToClipboard(item.content)}
                  className="bg-red-600 px-4 py-2 rounded-lg"
                >
                  <Text className="text-white font-bold">কপি করুন</Text>
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

export default Gaan;
