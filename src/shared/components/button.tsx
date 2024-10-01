import {FC} from "react"
import {StyleSheet, TouchableOpacity} from "react-native"
import {TouchableOpacityProps} from "react-native-gesture-handler"

import {Text} from "./text"

import {Colors} from "@/utils/colors"

interface Props extends TouchableOpacityProps {
  title: string
}

export const Button: FC<Props> = ({style, disabled, title, ...restProps}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.conatiner,
        {
          opacity: disabled ? 0.5 : 1
        },
        style
      ]}
      disabled={disabled}
      {...restProps}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
    color: Colors.white
  }
})
