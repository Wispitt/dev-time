import { searchBarStyles } from "@/styles/searchBar.styles";
import { LinearGradient } from "expo-linear-gradient";
import { Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
    onSearch: (cityName: string) => void;
    loading?: boolean;
};

export default function SearchBar({ onSearch, loading = false }: SearchBarProps) {
    const [searchText, setSearchText] = useState<string>('');
    const [errorText, setErrorText] = useState<boolean>(false);

    const handleSearch = () => {
        if (!searchText) {
            setErrorText(true);
            return;
        }
        onSearch(searchText);
    };

    useEffect(() => {
        if (searchText) {
            setErrorText(false)
        }
    }, [searchText]);

    return (
        <View style={searchBarStyles.container}>
            <View style={searchBarStyles.containerButtonAndInput}>
                <View style={searchBarStyles.inputContainer}>
                    <TextInput
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholder="São Paulo, Rio de Janeiro..."
                        placeholderTextColor='#999'
                        autoCapitalize="words"
                        autoCorrect
                        editable={!loading}
                        returnKeyType="search"
                        onSubmitEditing={handleSearch}
                        style={!errorText ? searchBarStyles.input : searchBarStyles.inputError}
                    />
                    {errorText && (
                        <View style={searchBarStyles.ContainerParagraphError}>
                            <Text style={searchBarStyles.paragraphError}>Digite o nome da cidade</Text>
                        </View>
                    )}
                </View>

                <LinearGradient
                    colors={['#3828D8', '#A99AFB', '#7655ED']}
                    style={searchBarStyles.linearGradient}
                    start={{ x: 0.01, y: 0.5 }}
                    end={{ x: 1, y: -0.5 }}
                >
                    <Text>
                        <TouchableOpacity
                            style={searchBarStyles.buttonLinearGradient}
                            disabled={loading}
                            onPress={handleSearch}
                        >
                            <Text style={searchBarStyles.searchButton}><Search color='#000000' size={22} /></Text>
                            <Text style={searchBarStyles.buttonText}> {loading ? 'Buscando...' : 'Buscar'} </Text>
                        </TouchableOpacity>
                    </Text>
                </LinearGradient>
            </View>
        </View>
    );
};