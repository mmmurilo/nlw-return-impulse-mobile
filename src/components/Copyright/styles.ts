import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';

export const lightStyle = StyleSheet.create({
  text: {
      fontSize: 12,
      color: light.colors.text_secondary,
      fontFamily: light.fonts.medium
  }
});
export const darkStyle = StyleSheet.create({
  text: {
      fontSize: 12,
      color: dark.colors.text_secondary,
      fontFamily: dark.fonts.medium
  }
});