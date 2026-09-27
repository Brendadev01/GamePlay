import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import MatchCard from '../components/MatchCard';

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image 
            source={require('../../assets/avatar.png')} 
            style={styles.avatar} 
          />
          
          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>
              <Text style={styles.greetingMedium}>Olá, </Text>
              <Text style={styles.greetingBold}>Tiago</Text>
            </Text>
            <Text style={styles.subtitle}>Hoje é dia de vitória</Text>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CATEGORIAS */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        <CategoryCard icon={require('../../assets/icon-ranqueada.png')} title="Ranqueada" />
        <CategoryCard icon={require('../../assets/icon-duelo.png')} title="Duelo 1x1" />
        <CategoryCard icon={require('../../assets/icon-diversao.png')} title="Diversão" />
        <CategoryCard icon={null} />
      </ScrollView>

      {/* LISTA DE PARTIDAS */}
      <View style={styles.matchesContainer}>
        <View style={styles.matchesHeader}>
          <Text style={styles.matchesTitle}>Partidas agendadas</Text>
          <Text style={styles.matchesTotal}>Total 6</Text>
        </View>

        <MatchCard
          cover={require('../../assets/game-lol.png')}
          title="Lendários"
          date="18/06 às 21:00h"
          category="Ranqueada"
          status="anfitriao"
          hasSeparator={true}
        />

        <MatchCard
          cover={require('../../assets/game-rdr2.png')}
          title="Yeah, boy"
          date="23/06 às 19:00h"
          category="Diversão"
          status="visitante"
          hasSeparator={true}
        />

        <MatchCard
          cover={require('../../assets/game-csgo.png')}
          title="Rumo ao topo"
          date="20/06 às 09:00h"
          category="1x1"
          status="anfitriao"
          hasSeparator={true}
        />

        <MatchCard
          cover={require('../../assets/game-apex.png')}
          title="Bora queimar tudo"
          date="20/06 às 14:20h"
          category="Ranqueada"
          status="anfitriao"
          hasSeparator={true}
        />

        <MatchCard
          cover={require('../../assets/game-valorant.png')}
          title="Valorosos"
          date="18/06 às 21:00h"
          category="Diversão"
          status="anfitriao"
          hasSeparator={false}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1647',
  },
  contentContainer: {
    paddingBottom: 150,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 8,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 24,
    color: '#DDE3F0',
  },
  greetingMedium: {
    fontFamily: 'Rajdhani-Medium',
  },
  greetingBold: {
    fontFamily: 'Rajdhani-Bold',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#ABB1CC',
    marginTop: 2,
  },
  addButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
    marginTop: -2,
  },
  categoriesContainer: {
    maxHeight: 100,
    marginBottom: 24,
  },
  categoriesContent: {
    paddingHorizontal: 24,
  },
  matchesContainer: {
    paddingHorizontal: 24,
  },
  matchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  matchesTitle: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 18,
    color: '#DDE3F0',
  },
  matchesTotal: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#ABB1CC',
  },
});