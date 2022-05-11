import React from 'react';
import { View, Image, Text, TouchableOpacity, useColorScheme } from 'react-native';
import sucessImage from '../../assets/success.png'
import { Copyright } from '../Copyright';

import { lightStyle, darkStyle } from './styles';
import { light, dark } from '../../theme';

interface Props {
    onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
    const colorScheme = useColorScheme()
    let theme = light, styles = lightStyle
    if (colorScheme === 'dark') {
      theme = dark
      styles = darkStyle
    }
  return (
    <View style={styles.container}>
        <Image 
            source={sucessImage}
            style={styles.image}
        />

        <Text style={styles.title}>
            Agradecemos o Feedback
        </Text>

        <TouchableOpacity
            style={styles.button}
            onPress={onSendAnotherFeedback}
        >
            <Text style={styles.buttonTitle}>
                Quero enviar outro!
            </Text>
        </TouchableOpacity>
        <Copyright />
    </View>
  );
}