import {useCallback} from "react"
import {FlatList, RefreshControl, StyleSheet} from "react-native"

import {ScreenWrapper} from "@/shared/components"
import {useAppNavigation, useRefresh} from "@/shared/hooks"

import {EmptyProductList, ProductListHeader, ProductListItem} from "./components"
import {useProductsData} from "./hooks"

import {Product} from "@/types/products"

export const ProductListScreen = () => {
  const {data, sort, isLoading, isError, setProductsSort, refetch} = useProductsData()
  const {isRefreshing, refresh} = useRefresh(refetch)
  const {navigate} = useAppNavigation()

  const handleProductClick = useCallback(
    (productId: Product["id"]) => {
      navigate("Product", {productId})
    },
    [navigate]
  )

  const renderProductListItem = useCallback(({item}: {item: Product}) => {
    return <ProductListItem onPress={handleProductClick} {...item} />
  }, [])

  const renderProductListHeader = useCallback(() => {
    return <ProductListHeader sort={sort} setSort={setProductsSort} />
  }, [sort])

  const renderProductEmptyList = useCallback(() => {
    let title = ""

    if (isLoading) {
      title = "Loading..."
    } else if (isError) {
      title = "Something went wrong :("
    } else if (!data.length) {
      title = "No products yet"
    }

    return <EmptyProductList title={title} />
  }, [data, isLoading, isError])

  return (
    <ScreenWrapper>
      <FlatList
        data={data}
        style={styles.container}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapperStyle}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductListItem}
        ListHeaderComponent={renderProductListHeader}
        ListEmptyComponent={renderProductEmptyList}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refresh} />}
        showsVerticalScrollIndicator={false}
      />
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    gap: 20,
    flexGrow: 1
  },
  columnWrapperStyle: {
    justifyContent: "space-between"
  }
})
