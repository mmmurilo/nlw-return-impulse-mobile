import React from 'react';
import { View, Text, useColorScheme } from 'react-native';

import { lightStyle, darkStyle } from './styles';
import { light, dark } from '../../theme';

export function Copyright() {
  const colorScheme = useColorScheme()
  let theme = light, styles = lightStyle
  if (colorScheme === 'dark') {
    theme = dark
    styles = darkStyle
  }
  return (
    <View>
        <Text style={styles.text}>
            Feito pela Troquecommerce
        </Text>
    </View>
  );
}