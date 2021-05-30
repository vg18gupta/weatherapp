import axios from 'axios';

export const getCityWeatherInfo = (city:any) =>{
    

    return (dispatch:any) =>{
        dispatch({
            type:'LOAD_SPINNER'
        })
        axios.get(`/weatherInfo/${city}`).then((res) => {
            
            dispatch({
                type:'WEATHER_REPORT_SUCCESS',
                payload:res.data
            })
        }).catch((err) => {
            console.log("[ERROR - getDealers] -- ", err);
            dispatch({
                type:'STOP_SPINNER'
            })
        })
    }
}