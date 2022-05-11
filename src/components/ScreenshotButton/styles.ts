import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';

export const lightStyle = StyleSheet.create({
  container: {
      width: 40,
      height: 40,
      bordeRadius: 4,
      backgroundColor: light.colors.surface_secondary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      position: 'relative'
  },
  removeIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0
  },
  image: {
    width: 40,
    height: 40
  }
});

export const darkStyle = StyleSheet.create({
  container: {
      width: 40,
      height: 40,
      bordeRadius: 4,
      backgroundColor: dark.colors.surface_secondary,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
      position: 'relative'
  },
  removeIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0
  },
  image: {
    width: 40,
    height: 40
  }
});