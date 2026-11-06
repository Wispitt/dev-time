import SearchBar from '@/components/SearchBar';
import { homeStyles } from '@/styles/home.styles';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

export default function App() {
    const router = useRouter();

    const handleSearch = (cityName: string): void => {
        router.push({
            pathname: '/details',
            params: { cityName }
        });
    };

    return (
        <SafeAreaView style={homeStyles.safeArea}>
            <StatusBar barStyle='dark-content' />
            <ScrollView style={homeStyles.container}>
                <View style={homeStyles.header}>
                    <Text style={homeStyles.title}>Dev Tempo</Text>
                    <Text style={homeStyles.subTitle}>Busque o clima em qualquer cidade do mundo!</Text>
                </View>

                <SearchBar onSearch={handleSearch} />

                <View style={homeStyles.emptyContainer}>
                    <Text style={homeStyles.emptyText}>Digite o nome de uma cidade acima para começar</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
