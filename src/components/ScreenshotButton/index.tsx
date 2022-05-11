import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image, useColorScheme } from 'react-native';

import { lightStyle, darkStyle } from './styles';
import { light, dark } from '../../theme';

interface Props {
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
    const colorScheme = useColorScheme()
    let theme = light, styles = lightStyle
    if (colorScheme === 'dark') {
      theme = dark
      styles = darkStyle
    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshot ? onRemoveShot : onTakeShot}
        >
            {
                screenshot ?
                    <View>
                        <Image 
                            style={styles.image}
                            source={{uri: screenshot}}
                        />
                        <Trash
                            size={22}
                            color={theme.colors.text_secondary}
                            weight='fill'
                            style={styles.removeIcon}
                        />
                    </View>
                    :
                    <Camera
                        size={24}
                        color={theme.colors.text_secondary}
                        weight='bold'
                    />
            }
        </TouchableOpacity>
    );
}