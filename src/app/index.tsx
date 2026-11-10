import SearchBar from '@/components/SearchBar';
import { UseLocation } from '@/hooks/UseLocation';
import { getCurrentWeatherByCoords } from '@/services/weatherService';
import { homeStyles } from '@/styles/home.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Cloud, CloudSun } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const { getCurrentLocation, loading } = UseLocation();

    const handleSearch = (cityName: string): void => {
        router.push({
            pathname: '/details',
            params: { cityName }
        });
    };

    const handleLocation = async () => {
        setError(null);
        const locationResult = await getCurrentLocation();

        if (!locationResult.success) {
            setError(locationResult.error);
        } else {
            const { latitude, longitude } = locationResult.coordinates;
            const weatherResult = await getCurrentWeatherByCoords(latitude, longitude);

            if (!weatherResult.success) {
                setError(weatherResult.error);
            } else {
                router.push({
                    pathname: '/details',
                    params: { cityName: weatherResult.data.name }
                });
            }
        }
    };

    return (
        <SafeAreaView style={homeStyles.safeArea}>
            <StatusBar barStyle='dark-content' />
            <ScrollView style={homeStyles.container}>
                <View style={homeStyles.header}>
                    <Text style={homeStyles.title}>
                        <CloudSun size={47} color='#4935D5' />Dev Tempo</Text>
                    <Text style={homeStyles.subTitle}>Busque o clima em qualquer cidade do mundo!</Text>
                </View>

                <SearchBar onSearch={handleSearch} />

                <View style={homeStyles.emptyContainer}>
                    <Text style={homeStyles.emptyText}>Digite o nome de uma cidade acima para começar</Text>
                </View>

                <View style={homeStyles.containerCloud}>
                    <View style={homeStyles.line} />
                    <Cloud size={26} color='#4935D5' />
                    <View style={homeStyles.line} />
                </View>

                <LinearGradient
                    colors={['#3828D8', '#A99AFB', '#7655ED']}
                    style={homeStyles.linearGradient}
                    start={{ x: 1, y: 0.5 }}
                    end={{ x: 0.5, y: 1 }}
                ><Text>
                        <TouchableOpacity
                            style={homeStyles.gpsButton}
                            disabled={loading}
                            onPress={handleLocation}>
                            {loading ? (
                                <ActivityIndicator size={'large'} style={{ marginVertical: 'auto' }} color='#000000' />
                            ) : (
                                <Text style={homeStyles.buttonText}>Usar minha localização</Text>
                            )}
                        </TouchableOpacity>
                    </Text>
                </LinearGradient>

                {true && (
                    <View style={homeStyles.ContainerParagraphError}>
                        <Text style={homeStyles.paragraphError}> {error} </Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
