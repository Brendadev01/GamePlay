import { View, Text, Image, StyleSheet } from 'react-native';

export default function PlayerCard({ avatar, name, status, hasSeparator }) {
  const isAvailable = status === 'disponivel';
  const statusColor = isAvailable ? '#32BD50' : '#E51C44';
  const statusText = isAvailable ? 'Disponível' : 'Ocupado';

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Avatar */}
        <Image 
          source={avatar} 
          style={styles.avatar} 
          resizeMode="cover" 
        />

        {/* Informações */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.statusRow}>
            <View style={[styles.indicator, { backgroundColor: statusColor }]} />
            <Text style={styles.statusText}>{statusText}</Text>
          </View>
        </View>
      </View>

      {/* Linha separadora */}
      {hasSeparator && <View style={styles.separator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#243189',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 18,
    color: '#DDE3F0',
    lineHeight: 18,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#ABB1CC',
    lineHeight: 17,
  },
  separator: {
    height: 1,
    backgroundColor: '#1D2766',
    marginTop: 8,
  },
});