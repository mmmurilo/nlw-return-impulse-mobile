import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps, Image, ImageProps, Text, useColorScheme } from 'react-native';

import { lightStyle, darkStyle } from './styles';
import { light, dark } from '../../theme';

interface Props extends TouchableOpacityProps {
    title: string;
    image: ImageProps;
}


export function Option({ title, image, ...rest }: Props) {
    
  const colorScheme = useColorScheme()
  let theme = light, styles = lightStyle
  if (colorScheme === 'dark') {
    theme = dark
    styles = darkStyle
  }
  return (
    <TouchableOpacity 
        style={styles.container}
        {...rest}
    >
        <Image 
            source={image}
            style={styles.image}
        />

        <Text style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}