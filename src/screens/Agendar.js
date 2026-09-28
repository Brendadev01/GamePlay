import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// PADDINGS E MARGENS
const PADDING_HORIZONTAL = 48; // 24px de cada lado
const CARD_MARGIN_RIGHT = 8;

// Reduzido para 2.95 para empurrar o 4º card mais para a direita e esconder o ícone dele
const VISIBLE_CARDS = 2.95; 

const CARD_WIDTH = Math.floor(
    (SCREEN_WIDTH - PADDING_HORIZONTAL - CARD_MARGIN_RIGHT * (VISIBLE_CARDS - 1)) / VISIBLE_CARDS
);

const categorias = [
    { id: 'ranqueada', title: 'Ranqueada', icon: require('../../assets/icon-ranqueada.png') },
    { id: 'duelo', title: 'Duelo 1x1', icon: require('../../assets/icon-duelo.png') },
    { id: 'diversao', title: 'Diversão', icon: require('../../assets/icon-diversao.png') },
    { id: 'treino', title: 'Treino', icon: require('../../assets/icon-diversao.png') },
    { id: 'outros', title: 'Outros', icon: require('../../assets/icon-diversao.png') },
];

export default function Agendar({ navigation, route }) {
    const {
        servidorNome = 'Valorosos',
        servidorJogo = 'Valorant',
        servidorCapa = require('../../assets/game-valorant.png'),
    } = route.params || {};

    const [categoriaSelecionada, setCategoriaSelecionada] = useState('ranqueada');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [hora, setHora] = useState('');
    const [minuto, setMinuto] = useState('');
    const [descricao, setDescricao] = useState('');

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.headerWrapper}>
                <LinearGradient colors={['#1D2766', '#171F52']} style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../assets/icon-voltar.png')}
                            style={styles.backIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Agendar partida</Text>
                    <View style={styles.headerSpacer} />
                </LinearGradient>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* CATEGORIA */}
                <Text style={[styles.sectionTitle, { paddingHorizontal: 24 }]}>Categoria</Text>

                {/* CARROSSEL HORIZONTAL DE CATEGORIAS */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.categoriasScroll}
                    contentContainerStyle={styles.categoriasContent}
                >
                    {categorias.map((categoria) => {
                        const selecionada = categoriaSelecionada === categoria.id;
                        return (
                            <TouchableOpacity
                                key={categoria.id}
                                style={[styles.categoriaCard, !selecionada && styles.categoriaCardInativa]}
                                activeOpacity={0.7}
                                onPress={() => setCategoriaSelecionada(categoria.id)}
                            >
                                {selecionada ? (
                                    <View style={styles.categoriaIndicador} />
                                ) : (
                                    <LinearGradient
                                        colors={['#0E1647', '#0A1033']}
                                        style={styles.categoriaIndicadorInativo}
                                    />
                                )}
                                <Image source={categoria.icon} style={styles.categoriaIcon} resizeMode="contain" />
                                <Text style={styles.categoriaTitle}>{categoria.title}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

                <View style={styles.formPadding}>
                    {/* CARD DO SERVIDOR */}
                    <TouchableOpacity style={styles.servidorCard} activeOpacity={0.7}>
                        <Image source={servidorCapa} style={styles.servidorCapa} resizeMode="cover" />
                        <View style={styles.servidorInfo}>
                            <Text style={styles.servidorNome}>{servidorNome}</Text>
                            <Text style={styles.servidorJogo}>{servidorJogo}</Text>
                        </View>
                        <Text style={styles.servidorSeta}>{'>'}</Text>
                    </TouchableOpacity>

                    {/* DIA/MÊS E HORÁRIO */}
                    <View style={styles.dataHoraRow}>
                        {/* DIA E MÊS */}
                        <View style={styles.dataHoraColunaEsquerda}>
                            <Text style={styles.sectionTitle}>Dia e mês</Text>
                            <View style={styles.dataHoraCampos}>
                                <TextInput
                                    style={styles.campoInput}
                                    value={dia}
                                    onChangeText={setDia}
                                    keyboardType="numeric"
                                    maxLength={2}
                                    placeholderTextColor="#ABB1CC"
                                />
                                <Text style={styles.separador}>/</Text>
                                <TextInput
                                    style={styles.campoInput}
                                    value={mes}
                                    onChangeText={setMes}
                                    keyboardType="numeric"
                                    maxLength={2}
                                    placeholderTextColor="#ABB1CC"
                                />
                            </View>
                        </View>

                        {/* HORÁRIO */}
                        <View style={styles.dataHoraColunaDireita}>
                            <Text style={styles.sectionTitle}>Horário</Text>
                            <View style={styles.dataHoraCampos}>
                                <TextInput
                                    style={styles.campoInput}
                                    value={hora}
                                    onChangeText={setHora}
                                    keyboardType="numeric"
                                    maxLength={2}
                                    placeholderTextColor="#ABB1CC"
                                />
                                <Text style={styles.separador}>:</Text>
                                <TextInput
                                    style={styles.campoInput}
                                    value={minuto}
                                    onChangeText={setMinuto}
                                    keyboardType="numeric"
                                    maxLength={2}
                                    placeholderTextColor="#ABB1CC"
                                />
                            </View>
                        </View>
                    </View>

                    {/* DESCRIÇÃO */}
                    <View style={styles.descricaoHeader}>
                        <Text style={[styles.sectionTitle, styles.semMargem]}>Descrição</Text>
                        <Text style={styles.maxCaracteres}>Max 100 caracteres</Text>
                    </View>
                    <TextInput
                        style={styles.descricaoInput}
                        value={descricao}
                        onChangeText={setDescricao}
                        maxLength={100}
                        multiline
                        textAlignVertical="top"
                    />

                    {/* BOTÃO AGENDAR */}
                    <TouchableOpacity style={styles.agendarButton} activeOpacity={0.8}>
                        <Text style={styles.agendarButtonText}>Agendar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0E1647',
    },

    // Header
    headerWrapper: {
        backgroundColor: '#171F52',
        shadowColor: '#11173D',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 10,
        zIndex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 16,
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    headerTitle: {
        flex: 1,
        fontFamily: 'Rajdhani-Bold',
        fontSize: 20,
        lineHeight: 20,
        color: '#DDE3F0',
        textAlign: 'center',
    },
    headerSpacer: {
        width: 24,
    },

    scrollContent: {
        paddingTop: 32,
        paddingBottom: 40,
    },

    sectionTitle: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 18,
        color: '#DDE3F0',
        marginBottom: 12,
    },

    // Categoria Scroll Horizontal
    categoriasScroll: {
        marginBottom: 24,
    },
    categoriasContent: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    categoriaCard: {
        width: CARD_WIDTH,
        height: 120,
        backgroundColor: '#1D2766',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        marginRight: CARD_MARGIN_RIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoriaIndicador: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 2,
        backgroundColor: '#E51C44',
    },
    categoriaIndicadorInativo: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#243189',
        overflow: 'hidden',
    },
    categoriaIcon: {
        width: 48,
        height: 48,
        marginBottom: 8,
    },
    categoriaTitle: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 14,
        color: '#DDE3F0',
        textAlign: 'center',
    },
    categoriaCardInativa: {
        opacity: 0.5,
    },

    // Padding do formulário interno
    formPadding: {
        paddingHorizontal: 24,
    },

    // Card do servidor
    servidorCard: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 68,
        backgroundColor: 'transparent',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#243189',
        paddingRight: 16,
        marginBottom: 24,
        overflow: 'hidden',
    },
    servidorCapa: {
        width: 64,
        height: 68,
    },
    servidorInfo: {
        flex: 1,
        marginLeft: 16,
    },
    servidorNome: {
        fontFamily: 'Rajdhani-Bold',
        fontSize: 18,
        color: '#DDE3F0',
    },
    servidorJogo: {
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        color: '#ABB1CC',
        marginTop: 2,
    },
    servidorSeta: {
        fontSize: 18,
        color: '#ABB1CC',
        marginLeft: 8,
    },

    // Dia/mês e Horário
    dataHoraRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    dataHoraColunaEsquerda: {
        alignItems: 'flex-start',
    },
    dataHoraColunaDireita: {
        alignItems: 'flex-start',
    },
    dataHoraCampos: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    campoInput: {
        width: 48,
        height: 48,
        backgroundColor: '#1D2766',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        color: '#DDE3F0',
        textAlign: 'center',
    },
    separador: {
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        lineHeight: 20,
        color: '#ABB1CC',
        marginHorizontal: 8,
    },

    // Descrição
    descricaoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 12,
    },
    semMargem: {
        marginBottom: 0,
    },
    maxCaracteres: {
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        lineHeight: 17,
        color: '#ABB1CC',
        textAlign: 'right',
    },
    descricaoInput: {
        width: '100%',
        height: 95,
        backgroundColor: '#1D2766',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#243189',
        padding: 12,
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        color: '#DDE3F0',
        marginBottom: 21,
    },

    // Botão Agendar
    agendarButton: {
        height: 56,
        backgroundColor: '#E51C44',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    agendarButtonText: {
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        lineHeight: 25,
        color: '#DDE3F0',
        textAlign: 'center',
    },
});