import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';

export const lightStyle = StyleSheet.create({
  container: {
      alignItems: 'center'
  },
  image: {
      width: 36,
      height: 36,
      marginTop: 42,
      marginBottom: 10
  },
  title: {
      fontSize: 20,
      marginBottom: 24,
      fontFamily: light.fonts.medium,
      color: light.colors.text_primary
  },
  button: {
      height: 40,
      backgroundColor: light.colors.surface_secondary,
      bordeRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      marginBottom: 56
  },
  buttonTitle: {
      fontSize: 14,
      fontFamily: light.fonts.medium,
      color: light.colors.text_primary
  }
});

export const darkStyle = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 36,
        height: 36,
        marginTop: 42,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        marginBottom: 24,
        fontFamily: dark.fonts.medium,
        color: dark.colors.text_primary
    },
    button: {
        height: 40,
        backgroundColor: dark.colors.surface_secondary,
        bordeRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginBottom: 56
    },
    buttonTitle: {
        fontSize: 14,
        fontFamily: dark.fonts.medium,
        color: dark.colors.text_primary
    }
  });