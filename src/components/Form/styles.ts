import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';

export const lightStyle = StyleSheet.create({
  container: {
      paddingHorizontal: 24,
      alignItems: 'center'
  },
  header: {
      flexDirection: 'row',
      marginVertical: 16
  },
  titleContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 24
  },
  titleText: {
      fontSize: 20,
      color: light.colors.text_primary,
      fontFamily: light.fonts.medium
  },
  image: {
      width: 24,
      height: 24,
      marginRight: 8
  },
  input: {
      height: 112,
      width: "100%",
      padding: 12,
      marginBottom: 8,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: light.colors.stroke,
      color: light.colors.text_primary,
      fontFamily: light.fonts.regular
  },
  footer: {
      flexDirection: 'row',
      marginBottom: 16
  }
});


export const darkStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        marginVertical: 16
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 24
    },
    titleText: {
        fontSize: 20,
        color: dark.colors.text_primary,
        fontFamily: dark.fonts.medium
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    input: {
        height: 112,
        width: "100%",
        padding: 12,
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: dark.colors.stroke,
        color: dark.colors.text_primary,
        fontFamily: dark.fonts.regular
    },
    footer: {
        flexDirection: 'row',
        marginBottom: 16
    }
  });