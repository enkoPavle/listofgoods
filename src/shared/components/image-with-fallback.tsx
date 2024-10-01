import React, {useState} from "react"
import {Image, ImageProps} from "react-native"
import imagePlaceholder from "@/assets/images/placeholder-square.jpg"

export const ImageWithFallback: React.FC<ImageProps> = ({source, style, ...props}) => {
  const [src, setSrc] = useState(source)

  return (
    <Image
      // @ts-ignore
      source={src?.uri ? source : imagePlaceholder}
      style={style}
      {...props}
      onError={() => setSrc(imagePlaceholder)}
    />
  )
}
