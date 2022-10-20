export default function Navbar(props) {

    const currentDate = `${new Date().getDate()} ${new Date().toLocaleDateString(
      "default",
      { month: "long" }
    )} ${new Date().getFullYear()}`;
  
    return (
      <nav className="nav">
        <div className="nav-info">
          <div className="date-info">
            <h1 className="current-date">{currentDate}</h1>
            <p className="task-number">{props.numberOfTask} task active</p>
          </div>
          <div className="weather-info">
              <h2 className="current-weather">
                  {props.weatherData.main ? `Iasi ${Math.floor(props.weatherData.main.temp)}°C` : null}
                  {props.weatherData.weather ? ` ${props.weatherData.weather[0].main}` : null}
              </h2>
              <img className="weather-image" src={`http://openweathermap.org/img/wn/${props.weatherData.weather ? props.weatherData.weather[0].icon : null}@2x.png`} alt="weather"/>
          </div>
        </div>
      </nav>
    );
  }