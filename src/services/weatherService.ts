import { WeatherData } from '@/types/weather';
import axios from 'axios';

export type WeatherResult = {
    success: true;
    data: WeatherData;
} | {
    success: false;
    error: string;
};

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        ppid: API_KEY,
        lang: 'pt_br',
        units: 'metric',
    },
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
console.log('BASE_URL:', BASE_URL);
console.log('API_KEY existe:', !!API_KEY);
console.log('Chave atual:', API_KEY?.slice(0, 5));
console.log('Tamanho da chave:', API_KEY?.length);
export const getCurrentWeather = async (cityName: string): Promise<WeatherResult> => {
    try {
        const trimmedCity = cityName.trim();
        if (!trimmedCity) {

            return {
                success: false,
                error: 'City not found'
            };
        };

        const response = await api.get<WeatherData>('/weather', {
            params: {
                q: trimmedCity
            }
        });
        console.log(response.data)
        return {
            success: true,
            data: response.data
        };

    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log('Mensagem:', err.message);
            console.log('URL:', err.config?.baseURL);
            console.log('Código:', err.code);
            console.log('Resposta:', err.response?.data);
        } else {
            console.log('Erro inesperado:', err);
        }

        return {
            success: false,
            error: 'Erro ao buscar clima. Tente novamente'
        };
    };
};

export const getWeatherIcon = (iconCode: string): string => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};