import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PlayerCard from '../components/PlayerCard';

export default function Details({ navigation, route }) {
  const { title } = route.params || {};

  const players = [
    { id: 1, name: 'Tiago Luchtenberg', status: 'disponivel', avatar: require('../../assets/avatar-tiago.png') },
    { id: 2, name: 'Rodrigo Gonçalves', status: 'ocupado', avatar: require('../../assets/avatar-rodrigo.png') },
    { id: 3, name: 'Diego Fernandes', status: 'ocupado', avatar: require('../../assets/avatar-diego.png') },
  ];

  return (
    <LinearGradient
      colors={['#0E1647', '#0A1033']}
      style={styles.container}
    >
      {/* 1. HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require('../../assets/icon-voltar.png')} 
            style={styles.headerIcon} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Detalhes</Text>
        
        <TouchableOpacity>
          <Image 
            source={require('../../assets/icon-compartilhar.png')} 
            style={styles.headerIconShare} 
            resizeMode="contain" 
          />
        </TouchableOpacity>
      </View>

      {/* 2. CONTEÚDO ROLÁVEL */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Capa com texto sobreposto */}
        <View style={styles.coverContainer}>
          <Image 
            source={require('../../assets/capa-detalhes.png')} 
            style={styles.coverImage} 
            resizeMode="cover" 
          />
          
          <View style={styles.coverOverlay}>
            <Text style={styles.matchTitle}>{title || 'Lendários'}</Text>
            <Text style={styles.matchDescription}>
              É hoje que vamos chegar ao challenger sem{'\n'}perder uma partida da md10
            </Text>
          </View>
        </View>

        {/* Seção de Jogadores */}
        <View style={styles.playersSection}>
          <View style={styles.playersHeader}>
            <Text style={styles.playersTitle}>Jogadores</Text>
            <Text style={styles.playersTotal}>Total 3</Text>
          </View>

          {players.map((player, index) => (
            <PlayerCard 
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              status={player.status}
              hasSeparator={index < players.length - 1}
            />
          ))}
        </View>

        {/* Espaço para o botão não cobrir */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* 3. BOTÃO FIXO */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.joinButton}>
          {/* Ícone no fluxo normal (igual ao Login) */}
          <Image 
            source={require('../../assets/discord-icon-white.png')} 
            style={styles.buttonIcon} 
            resizeMode="contain" 
          />
          
          {/* Linha vertical separadora no fluxo normal (igual ao Login) */}
          <View style={styles.buttonSeparator} />
          
          {/* Texto centralizado no espaço restante (igual ao Login) */}
          <Text style={styles.buttonText}>Entrar na partida</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 20,
    color: '#DDE3F0',
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerIconShare: {
    width: 18,
    height: 19,
  },

  // Scroll
  scrollContent: {
    paddingBottom: 20,
  },

  // Capa
  coverContainer: {
    width: '100%',
    height: 234,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  coverOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
  },
  matchTitle: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 28,
    color: '#DDE3F0',
    lineHeight: 28,
    marginBottom: 8,
  },
  matchDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#DDE3F0',
    lineHeight: 21,
  },

  // Jogadores
  playersSection: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
  playersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  playersTitle: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 18,
    color: '#DDE3F0',
  },
  playersTotal: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#ABB1CC',
  },

  // Botão (EXATAMENTE igual ao Login)
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E51C44',
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#991F36',
    paddingLeft: 24,
    paddingRight: 16,
  },
  buttonIcon: {
    width: 24,
    height: 18,
  },
  buttonSeparator: {
    width: 1,
    height: 56,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginLeft: 16,
    marginRight: 16,
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: '#DDE3F0',
    flex: 1,
    textAlign: 'center',
  },
});