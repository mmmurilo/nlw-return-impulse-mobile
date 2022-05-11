import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const lightStyle = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: light.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + 16,
    right: 16
  },
  modal: {
    backgroundColor: light.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16
  },
  indicator: {
    backgroundColor: light.colors.text_primary,
    width: 56
  }
});

export const darkStyle = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: dark.colors.brand,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + 16,
    right: 16
  },
  modal: {
    backgroundColor: dark.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16
  },
  indicator: {
    backgroundColor: dark.colors.text_primary,
    width: 56
  }
});