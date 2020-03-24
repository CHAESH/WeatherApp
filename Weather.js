import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet, StatusBar} from "react-native"; 
import {MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"; // expo icon 
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#ffb347", "#ffcc33"],
        title: "Clear",
        subtitle: "You just go outside!"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Thunderstorm",
        subtitle: "Watchout for thunderstorm!"
    },
    Drizzle : {
        iconName: "weather-hail",
        gradient: ["#000C40","#F0F2F0"],
        title: "Drizzle",
        subtitle: "Nice weather to stay home"
    },
    Rain : {
        iconName: "weather-pouring",
        gradient: ["#0F2027","#203A43", "#2C5364"],
        title: "Rain ",
        subtitle: "Nice weather to drink a cup of coffee"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#928DAB","#00d2ff"],
        title: "Snow",
        subtitle: "Do you wanna build a snowman?"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2C3E50","#4CA1AF"],
        title: "Cloud",
        subtitle: "Do you like candy fluff"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#2c3e50","#3498db"],
        title: "Mist",
        subtitle: "I can't see you!"
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#2c3e50","#3498db"],
        title: "Smoke",
        subtitle: "I can't see you!"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#2c3e50","#3498db"],
        title: "Haze",
        subtitle: "I can't see you!"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#2c3e50","#3498db"],
        title: "Fog",
        subtitle: "I can't see you!"
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient} 
            style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}> 
                <MaterialCommunityIcons Ionicons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle", 
        "Rain", 
        "Snow",
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Fog"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom:10
    },
    subtitle: {
        color: "white",
        fontSize:24,
        fontWeight:"600"
    },
    textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 30
        
    }
})
    
