import {FC, memo} from "react"
import {Dimensions, StyleSheet, TouchableOpacity} from "react-native"

import {Text, ImageWithFallback} from "@/shared/components"

import {Product} from "@/types/products"

const screenWidth = Dimensions.get("window").width
const containerWidth = (screenWidth - 20 * 3) / 2 // 20 = padding, 3 = 2 padding and 1 gap

interface Props extends Product {
  onPress: (productId: Product["id"]) => void
}

export const ProductListItem: FC<Props> = memo(({id, title, price, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
      <ImageWithFallback
        source={{uri: image}}
        style={{width: containerWidth, height: containerWidth}}
      />
      <Text numberOfLines={2} ellipsizeMode={"tail"}>
        {title}
      </Text>
      <Text>${price}</Text>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    gap: 10
  }
})
