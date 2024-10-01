import {FC} from "react"
import {StyleSheet, Text as RNText, TextProps} from "react-native"

import {Colors} from "@/utils/colors"

interface Props extends TextProps {
  type?: "title" | "text"
  color?: string
  center?: boolean
}

export const Text: FC<Props> = ({type, center, color, style, ...restProps}) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          fontSize: type === "title" ? 22 : 16,
          textAlign: center ? "center" : "left",
          color: color ?? Colors.black
        },
        style
      ]}
      {...restProps}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    color: Colors.black
  }
})
