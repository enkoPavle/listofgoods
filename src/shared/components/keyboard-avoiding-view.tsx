import { FC } from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
} from "react-native";

export const KeyboardAvoidingView: FC<KeyboardAvoidingViewProps> = ({
  keyboardVerticalOffset,
  style,

  ...restProps
}) => (
  <RNKeyboardAvoidingView
    {...restProps}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    needsOffscreenAlphaCompositing={true}
    style={[{ flex: 1 }, style]}
  />
);
