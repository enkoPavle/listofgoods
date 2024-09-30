import {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from './text';
import {useAppNavigation} from '../hooks';
import {Colors} from '@/utils/colors';

export const AddProductButton: FC = () => {
  const {navigate} = useAppNavigation();

  return (
    <TouchableOpacity hitSlop={20} onPress={() => navigate('CreateProduct')}>
      <Text color={Colors.blue}>Add</Text>
    </TouchableOpacity>
  );
};
