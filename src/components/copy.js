import Clipboard from '@react-native-clipboard/clipboard';
import { Alert } from 'react-native';

export const copyToClipboard = content => {
  Clipboard.setString(content);
  Alert.alert('অনুলিপি সফল', 'উক্তিটি কপি করা হয়েছে ✅');
};
