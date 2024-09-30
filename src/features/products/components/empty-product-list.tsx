import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@/shared/components';

interface Props {
  title: string;
}

export const EmptyProductList: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text type="title">{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
