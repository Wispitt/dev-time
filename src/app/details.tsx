import WeatherCard from '@/components/WeatherCard';
import { getCurrentWeather } from '@/services/weatherService';
import { detailsStyles } from '@/styles/details.styles';
import { WeatherData } from '@/types/weather';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function Details() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const router = useRouter();
    const { cityName } = useLocalSearchParams<{ cityName: string }>();

    const getWeatherData = async () => {
        setLoading(true);
        const result = await getCurrentWeather(cityName as string);
        setLoading(false);

        if (result.success) {
            setWeatherData(result.data);
        } else {
            setError(result.error);
        }
    };

    const handleReload = async () => {
        setError(null);
        setWeatherData(null);

        await getWeatherData();
    }

    useEffect(() => {
        if (cityName) {
            getWeatherData()
        }
    }, [cityName])

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
                    {loading && (<Text style={detailsStyles.subTitle}>Buscando: {cityName} </Text>)}
                </View>

                <View>
                    {loading && error ? (
                        <View style={detailsStyles.loadingContainer}>
                            <ActivityIndicator size='large' color='#000' />
                            <Text style={detailsStyles.loadingText}>Carregando...</Text>
                        </View>
                    ) : (
                        <View style={detailsStyles.errorContainer}>
                            <Text 
                            style={detailsStyles.error}>Erro ao buscar clima. {''}
                            <Text onPress={handleReload} style={{textDecorationLine: 'underline'}}>Tente novamente</Text></Text> 
                        </View>
                    )}
                </View>

                {!loading && !error && weatherData && (
                    <WeatherCard weather={weatherData} />
                )}
            </ScrollView>
        </SafeAreaView>
    );
};