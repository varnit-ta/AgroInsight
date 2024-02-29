const WeatherDispay = ({ weather }) => {
    return (
        <div className="weather-badge">
            <div className="date-part">
                <div className="date">{weather.date}</div>
                <div className="day"> {weather.day}</div>
                <hr />
            </div>
            <div className="weather-part">
                <div className="date">{weather.temp}</div>
            </div>
        </div>
    )
}

export default WeatherDispay;