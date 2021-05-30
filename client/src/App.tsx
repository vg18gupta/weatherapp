// @ts-ignore
import React from 'react';
import './App.css';
import LandingPage from './Components/landingPage';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEye,faTint,faSun,faCloudSun,faCloud,faCloudRain,faCloudSunRain ,faSnowflake,faMoon, faTemperatureHigh,faWind } from '@fortawesome/free-solid-svg-icons'
library.add(faEye,faTint,faSun,faCloudSun,faCloud,faCloudRain,faCloudSunRain, faSnowflake,faMoon, faTemperatureHigh,faWind)

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage></LandingPage>

      </header>
    </div>
  );
}

export default App;
