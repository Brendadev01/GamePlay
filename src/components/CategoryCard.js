import { View, Text, Image, StyleSheet } from 'react-native';

export default function CategoryCard({ icon, title }) {
  // Se não tem ícone, renderiza apenas o card vazio (retângulo azul)
  if (!icon) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <Image 
        source={icon} 
        style={styles.icon} 
        resizeMode="contain" 
      />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2766',
    width: 90,
    height: 90,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 42,
    height: 42,
    marginBottom: 6,
  },
  title: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 14,
    color: '#DDE3F0',
  },
});