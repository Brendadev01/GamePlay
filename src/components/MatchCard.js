import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Adicionei 'onPress' aqui nas props
export default function MatchCard({ cover, title, date, category, status, hasSeparator, onPress }) {
  const isHost = status === 'anfitriao';
  const statusColor = isHost ? '#E51C44' : '#32BD50';
  const statusText = isHost ? 'Anfitrião' : 'Visitante';
  const statusIcon = isHost 
    ? require('../../assets/icon-anfitriao.png') 
    : require('../../assets/icon-visitante.png');

  // Troquei o View principal por TouchableOpacity e adicionei onPress e activeOpacity
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Camada da Esquerda: Capa do Jogo */}
      <Image 
        source={cover} 
        style={styles.cover} 
        resizeMode="cover" 
      />

      {/* Camada do Meio e Direita: Informações */}
      <View style={styles.infoContainer}>
        
        {/* Linha de Cima: Título e Categoria */}
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.category}>{category}</Text>
        </View>

        {/* Linha de Baixo: Data e Status */}
        <View style={styles.bottomRow}>
          <View style={styles.rowItem}>
            <Image 
              source={require('../../assets/icon-calendar.png')} 
              style={styles.smallIcon} 
              resizeMode="contain" 
            />
            <Text style={styles.dateText}>{date}</Text>
          </View>

          <View style={styles.rowItem}>
            <Image 
              source={statusIcon} 
              style={styles.smallIcon} 
              resizeMode="contain" 
            />
            <Text style={[styles.statusText, { color: statusColor }]}>{statusText}</Text>
          </View>
        </View>
      </View>

      {/* Linha Separadora */}
      {hasSeparator && <View style={styles.separator} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 16,
    marginBottom: 16,
  },
  cover: {
    width: 64,
    height: 68,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 18,
    color: '#DDE3F0',
  },
  category: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#ABB1CC',
  },
  dateText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#DDE3F0',
    marginLeft: 6,
  },
  statusText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginLeft: 6,
  },
  smallIcon: {
    width: 16,
    height: 16,
  },
  separator: {
    position: 'absolute',
    bottom: 0,
    left: 80,
    right: 0,
    height: 1,
    backgroundColor: '#1D2766',
  },
});