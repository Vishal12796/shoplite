import { AppImages } from "@/assets/appImages";
import React, { useState } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

type ImageViewProps = {
  uri: string;
  style: StyleProp<ImageStyle>;
};

export const ImageView: React.FC<ImageViewProps> = (props) => {
  const [error, setError] = useState(false);

  return (
    <Image
      source={error ? AppImages.placeholder : { uri: props.uri }}
      style={props?.style}
      resizeMode="cover"
      onError={() => setError(true)}
    />
  );
};
