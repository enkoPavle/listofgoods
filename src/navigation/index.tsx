import {CreateProductScreen, ProductListScreen, ProductScreen} from "@/features/products"
import {AddProductButton} from "@/shared/components"

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {RootStackParamList} from "@/types/navigation"

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{
          title: "Products",
          headerRight: () => <AddProductButton />
        }}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen
        name="CreateProduct"
        component={CreateProductScreen}
        options={{title: "Create Product"}}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
