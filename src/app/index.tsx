import SearchBar from '@/components/SearchBar';
import { UseLocation } from '@/hooks/UseLocation';
import { homeStyles } from '@/styles/home.styles';
import { useRouter } from 'expo-router';
import { Cloud, CloudSun } from 'lucide-react-native';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
    const router = useRouter();
    const { getCurrentLocation } = UseLocation();

    const handleSearch = (cityName: string): void => {
        router.push({
            pathname: '/details',
            params: { cityName }
        });
    };

    const handleLocation = async () => {
        console.log(await getCurrentLocation())
    }

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
                    <Cloud  size={26} color='#4935D5' />
                    <View style={homeStyles.line} />
                </View>

                <TouchableOpacity 
                onPress={handleLocation}>
                    <Text>Usar minha localização</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};
