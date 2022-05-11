import { StyleSheet } from 'react-native';
import { light, dark } from '../../theme';

export const lightStyle = StyleSheet.create({
    container: {
        width: 104,
        height: 112,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: light.colors.surface_secondary
    },
    image: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 14,
        marginTop: 8,
        fontFamily: light.fonts.medium,
        color: light.colors.text_primary
    }
});

export const darkStyle = StyleSheet.create({
    container: {
        width: 104,
        height: 112,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        borderRadius: 8,
        marginHorizontal: 8,
        backgroundColor: dark.colors.surface_secondary
    },
    image: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 14,
        marginTop: 8,
        fontFamily: dark.fonts.medium,
        color: dark.colors.text_primary
    }
});