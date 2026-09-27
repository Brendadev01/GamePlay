import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({ navigation }) {
  return (
    <LinearGradient
      colors={['#0E1647', '#0A1033']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea} edges={['top']}>

        {/* Container que segura as duas imagens empilhadas */}
        <View style={styles.headerContainer}>
          {/* Camada de baixo: As faixas */}
          <Image
            source={require('../../assets/faixas.png')}
            style={styles.faixas}
            resizeMode="cover"
          />

          {/* Camada de cima: O personagem */}
          <Image
            source={require('../../assets/personagem.png')}
            style={styles.personagem}
            resizeMode="contain"
          />
        </View>

        {/* Título sobreposto */}
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>

        {/* Botão Discord */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../../assets/discord-icon.png')}
            style={styles.icon}
            resizeMode="contain"
          />

          {/* Linha vertical separadora */}
          <View style={styles.separator} />

          <Text style={styles.buttonText}>Entrar com Discord</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    height: 340,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faixas: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  personagem: {
    width: '100%',
    height: '100%',
    elevation: 2,
    zIndex: 1,
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 40,
    lineHeight: 40,
    color: '#DDE3F0',
    textAlign: 'center',
    marginTop: -20,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    lineHeight: 25,
    color: '#DDE3F0',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E51C44',
    width: 274,
    height: 56,
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 40,
    paddingLeft: 24, // Espaço à esquerda para o ícone
    paddingRight: 16, // Espaço à direita
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    width: 24,
    height: 18,
  },
  separator: {
    width: 1,
    height: 56,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginLeft: 16, // Espaço entre ícone e linha
    marginRight: 16, // Espaço entre linha e texto
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: '#DDE3F0',
    flex: 1, // Faz o texto ocupar o espaço restante
    textAlign: 'center', // Centraliza o texto no espaço disponível
  },
});