import { searchBarStyles } from "@/styles/searchBar.styles";
import { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

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
            return ;
        } else {
            setErrorText(false);
            onSearch(searchText);
        }
    };

    return (
        <View style={searchBarStyles.container}>
            <View style={searchBarStyles.containerButtonAndInput}>
                <View style={searchBarStyles.inputContainer}>
                    <TextInput 
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Digite uma cidade..."
                    placeholderTextColor='#999'
                    autoCapitalize="words"
                    autoCorrect
                    editable={!loading}
                    returnKeyType="search"
                    onSubmitEditing={handleSearch}
                    style={!errorText ? searchBarStyles.input : searchBarStyles.inputError }
                    />
                    {errorText && (
                        <View style={searchBarStyles.ContainerParagraphError}>
                            <Text style={searchBarStyles.paragraphError}>Digite o nome a cidade</Text>
                        </View>
                    )}
                </View>
                
                <TouchableOpacity 
                onPress={handleSearch} 
                disabled={loading}
                style={searchBarStyles.button}
                >
                    <Text style={searchBarStyles.buttonText}> {loading ? 'Buscando...' : 'Buscar'} </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};