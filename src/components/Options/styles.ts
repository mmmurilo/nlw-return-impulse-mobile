import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';

export const lightStyle = StyleSheet.create({
  container: {
      alignItems: 'center',
  },
  options: {
    width: '100%',
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: light.fonts.medium,
    color: light.colors.text_primary
  }
});

export const darkStyle = StyleSheet.create({
  container: {
      alignItems: 'center',
  },
  options: {
    width: '100%',
    marginBottom: 48,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: dark.fonts.medium,
    color: dark.colors.text_primary
  }
});