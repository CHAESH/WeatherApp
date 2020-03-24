import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "49aef28cb6c216174ad8cf11251c2e51";

export default class extends React.Component{
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({
      isLoading: false, 
      condition: weather[0].main,
      temp
      });
  };
  
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      // send to API and get weather
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch {
      Alert.alert("can not find you.", "so sad");
    } 
  };
  componentDidMount(){
     this.getLocation();
     
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

