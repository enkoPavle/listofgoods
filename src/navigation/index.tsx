import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreateProductScreen,
  ProductListScreen,
  ProductScreen,
} from '@/features/products';
import {RootStackParamList} from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductListScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
