import { Alert, Share } from 'react-native';

export const shareQuote = async content => {
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
  } catch (error) {
    Alert.alert('ত্রুটি', 'শেয়ার করতে ব্যর্থ ❌');
    console.error(error.message);
  }
};
