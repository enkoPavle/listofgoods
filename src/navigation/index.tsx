import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CreateProductScreen,
  ProductListScreen,
  ProductScreen,
} from '@/features/products';
import {AddProductButton} from '@/shared/components/add-product-button';
import {RootStackParamList} from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          title: 'Products',
          headerRight: () => <AddProductButton />,
        }}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
