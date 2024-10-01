import {FC} from "react"
import {Dimensions, ScrollView, StyleSheet, View} from "react-native"

import {ImageWithFallback, ScreenWrapper, Text} from "@/shared/components"

import {useProductData} from "./hooks"

import {Colors, getRatingColor} from "@/utils/colors"
import {NativeStackScreenProps} from "@react-navigation/native-stack"

import {RootStackParamList} from "@/types/navigation"

type Props = NativeStackScreenProps<RootStackParamList, "Product">

const screenWidth = Dimensions.get("window").width
const containerWidth = screenWidth - 20 * 2 // 20 = padding

export const ProductScreen: FC<Props> = ({route}) => {
  const {data, isError} = useProductData(route.params.productId)

  return (
    <ScreenWrapper>
      {data ? (
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <ImageWithFallback
            source={{uri: data?.image}}
            style={{width: containerWidth, height: containerWidth}}
          />
          <Text type="title">{data?.title}</Text>
          {data.category ? <Text>Category: {data?.category}</Text> : null}
          <View style={styles.rowContainer}>
            <Text type="title" color={Colors.blue}>
              ${data?.price}
            </Text>
            {data?.rating ? (
              <Text>
                <Text color={getRatingColor(data?.rating.rate)}>
                  ✭{data?.rating.rate}
                </Text>{" "}
                ({data?.rating.count})
              </Text>
            ) : null}
          </View>
          <Text>{data?.description}</Text>
        </ScrollView>
      ) : (
        <View style={styles.fallbackContainer}>
          <Text type="title">{isError ? "Something went wrong :(" : "Loading..."}</Text>
        </View>
      )}
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20
  }
})
