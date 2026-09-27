import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Rajdhani-Bold': require('./assets/fonts/Rajdhani-Bold.ttf'),
    'Rajdhani-Medium': require('./assets/fonts/Rajdhani-Medium.ttf'), // Adicionado para o "Olá,"
    'Inter-Regular': require('./assets/fonts/Inter_18pt-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter_18pt-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Routes />
    </View>
  );
}