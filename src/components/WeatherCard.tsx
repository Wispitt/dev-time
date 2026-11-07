import { getWeatherIcon } from "@/services/weatherService";
import { weatherCardStyles } from "@/styles/weatherCard.styles";
import { WeatherData } from "@/types/weather";
import React from "react";
import { Image, Text, View } from "react-native";

interface WatherBarProps {
    weather: WeatherData;
};

const temperatureCurrent = (temperature: number): React.JSX.Element => {
    if (temperature <= 15) {
        return (
            <Text style={weatherCardStyles.temperatureCold}>
                {temperature}°C
            </Text>
        )
    } else if (temperature > 15 && temperature <= 25) {
        return (
            <Text style={weatherCardStyles.temperatureMedium}>
                {temperature}°C
            </Text>
        )
    }
    return (
        <Text style={weatherCardStyles.temperatureHot}>
            {temperature}°C
        </Text>
    )
};

export default function WeatherCard({ weather }: WatherBarProps) {
    return (
        <View style={weatherCardStyles.card}>
            <Text style={weatherCardStyles.cityName}> {weather.name} </Text>

            {weather.weather[0] && <Image
                source={{ uri: getWeatherIcon(weather.weather[0].icon) }}
                style={weatherCardStyles.weaherIcon} />}

            {temperatureCurrent(Math.round(weather.main.temp))}

            {weather.weather[0] && <Text style={weatherCardStyles.description}>
                {weather.weather[0].description}
            </Text>}

            <View style={weatherCardStyles.detailContainer}>
                <View style={weatherCardStyles.detailItems}>
                    <Text style={weatherCardStyles.detailLabel}>Sensação Térmica:</Text>
                    <Text style={weatherCardStyles.detailValue}> {Math.round(weather.main.feels_like)}°C </Text>
                </View>

                <View style={weatherCardStyles.detailItems}>
                    <Text style={weatherCardStyles.detailLabel}>Umidade:</Text>
                    <Text style={weatherCardStyles.detailValue}> {weather.main.humidity}% </Text>
                </View>

                <View style={weatherCardStyles.detailItems}>
                    <Text style={weatherCardStyles.detailLabel}>Vento:</Text>
                    <Text style={weatherCardStyles.detailValue}> {weather.wind.speed}m/s </Text>
                </View>
            </View>
        </View>
    )
}