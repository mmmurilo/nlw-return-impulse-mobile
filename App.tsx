import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { useColorScheme, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { light, dark } from './src/theme';
import Widget from './src/components/Widget';

export default function App() {
  const colorScheme = useColorScheme()
  let theme = light
  if (colorScheme === 'dark') {
    theme = dark
  }
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.surface_primary
    }}>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />

      <Widget />
    </View>
  );
}