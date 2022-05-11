import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, useColorScheme } from 'react-native';

import { lightStyle, darkStyle } from './styles';
import { light, dark } from '../../theme';

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
}

export function Button({ isLoading, ...rest }: Props) {
    const colorScheme = useColorScheme()
    let theme = light, styles = lightStyle
    if (colorScheme === 'dark') {
      theme = dark
      styles = darkStyle
    }
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        {isLoading ? 
            <ActivityIndicator
                color={theme.colors.text_on_brand_color}
            />
            :
            <Text style={styles.title}>
                Enviar Feedback
            </Text>
        }
    </TouchableOpacity>
  );
}