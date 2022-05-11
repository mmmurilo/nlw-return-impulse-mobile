import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';

export const lightStyle = StyleSheet.create({
  container: {
      flex: 1,
      height: 40,
      backgroundColor: light.colors.brand,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4
  },
  title: {
      fontSize: 14,
      fontFamily: light.fonts.medium,
      color: light.colors.text_on_brand_color
  }
});


export const darkStyle = StyleSheet.create({
  container: {
      flex: 1,
      height: 40,
      backgroundColor: dark.colors.brand,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4
  },
  title: {
      fontSize: 14,
      fontFamily: dark.fonts.medium,
      color: dark.colors.text_on_brand_color
  }
});