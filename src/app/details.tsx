import { detailsStyles } from '@/styles/details.styles';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function Details() {
    const router = useRouter();
    const { cityName } = useLocalSearchParams<{cityName: string}>();

    return (
        <SafeAreaView style={detailsStyles.safeArea}>
            <StatusBar barStyle='dark-content' />
            <ScrollView style={detailsStyles.container}>
                <TouchableOpacity 
                style={detailsStyles.backButton}
                onPress={() => router.back()}>
                    <Text style={detailsStyles.backButtonText}> {'<'} Voltar</Text>
                </TouchableOpacity>

                <View style={detailsStyles.header}>
                    <Text style={detailsStyles.subTitle}>Clima atual</Text>
                    <Text style={detailsStyles.subTitle}>Buscando: {cityName} </Text>
                </View>

                <View style={detailsStyles.loadingContainer}>
                    <ActivityIndicator size='large' color='#000' />
                    <Text style={detailsStyles.loadingText}>Carregando...</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};