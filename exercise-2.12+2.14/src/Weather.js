import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowWeather = (props) => {
    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    const url = 'https://api.openweathermap.org/data/3.0/onecall?lat='+props.lat+'&lon='+props.lon+'&units=imperial&exclude=hourly,daily,minutely,alerts&appid='+api_key
    console.log("url = ", url)

    useEffect(() => {
      axios
        .get(url)
        .then(response => {
          setWeather(response.data)
        })
    }, [])

    console.log("weather =", weather)

   const icon = 'http://openweathermap.org/img/wn/'+weather.current.weather[0].icon+'@2x.png'

return (
    <div>
        <p>temperature {weather.current.temp} Fahrenheit</p>
        <img src={icon} alt="" width="100"></img>
        <p>wind {weather.current.wind_speed} miles/hour</p>
    </div>
)


}

export default ShowWeather