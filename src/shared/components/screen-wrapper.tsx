import {FC} from "react"
import {StyleSheet, View} from "react-native"
import {SafeAreaView, SafeAreaViewProps} from "react-native-safe-area-context"

import {Colors} from "@/utils/colors"

export const ScreenWrapper: FC<SafeAreaViewProps> = ({style, children, ...restProps}) => {
  return (
    <SafeAreaView style={[styles.safeAreaContainer, style]} {...restProps}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20
  },
  container: {
    flex: 1
  }
})
