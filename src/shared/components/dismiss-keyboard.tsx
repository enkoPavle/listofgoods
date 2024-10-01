import {FC, PropsWithChildren, useRef} from "react"
import {Keyboard, StyleSheet, View} from "react-native"
// tslint:disable-next-line
//@ts-ignore
import * as TextInputState from "react-native/Libraries/Components/TextInput/TextInputState"
import {Gesture, GestureDetector} from "react-native-gesture-handler"

export const DismissKeyboard: FC<PropsWithChildren> = ({children}) => {
  const isTargetTextInput = useRef(false)

  const tap = Gesture.Tap()

    .onEnd(() => {
      if (!isTargetTextInput.current) {
        Keyboard.dismiss()
      }
    })
    .runOnJS(true)

  return (
    <GestureDetector gesture={tap}>
      <View
        style={styles.container}
        onStartShouldSetResponderCapture={(e) => {
          isTargetTextInput.current = TextInputState.isTextInput(e.target)

          return false
        }}
        accessible={false}
      >
        {children}
      </View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
