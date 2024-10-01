import {FC} from "react"
import {StyleSheet, TouchableOpacity, View} from "react-native"

import {Text} from "@/shared/components"

import {Colors} from "@/utils/colors"

import {ProductSortValue} from "@/types/products"

interface Props {
  sort: ProductSortValue
  setSort: (sort: ProductSortValue) => void
}

export const ProductListHeader: FC<Props> = ({sort, setSort}) => {
  return (
    <View style={styles.container}>
      <Text>Sort: </Text>
      <TouchableOpacity onPress={() => setSort("asc")}>
        <Text color={Colors[sort === "asc" ? "blue" : "gray"]}>ASC</Text>
      </TouchableOpacity>
      <Text style={styles.separator}>|</Text>
      <TouchableOpacity onPress={() => setSort("desc")}>
        <Text color={Colors[sort === "desc" ? "blue" : "gray"]}>DESC</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingBottom: 10
  },
  separator: {
    marginHorizontal: 10
  }
})
