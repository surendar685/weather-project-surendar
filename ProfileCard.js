import {  useState } from 'react';
import axios from 'axios';
import './Profile.css';


const ProfileCard = () => {
    
  const [search,setsearch]=useState("");
  const [weather,setWeather]=useState([]);

  const searchweatherHandler=()=>{
    if(search !==""){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e017f2524f71916bd4455ed68887c24&units=metric`)
      //axios.get("https:api.openweathermap.org/data/2.5/weather?q=${search}&appid=986f33bdf061bb9fab80a42b7df0602f")//
      .then(
        (response)=>{ 
          console.log(response.data);
          setWeather(response.data);
        }
      ).catch(
        (error)=>{
       console.log(error);
        }
      )
    }
  }

  return (
    <div>
        
      <div>
        {/* <form > */}
        <input className='search' type="search"  onChange={(e)=>setsearch(e.target.value)} value={search} />
        <button onClick={searchweatherHandler}> Search </button>
        {/* </form> */}

        </div>
    
    
    { 
        weather.length !== 0
           ?
    <>
    
    <div class="card-container">
	<span class="pro">PRO</span>
	<img class="round" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="user" />
	<h3>{weather.name}</h3>
	<h6>Feels like:{weather.main.feels_like}</h6>
	<div class="buttons">
		<button class="primary">
        Min Temp:{weather.main.temp_min}deg
		</button>
		<button class="primary ghost">
        Max Temp:{weather.main.temp_max}deg
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul>
			<li>humidity:{weather.main.humidity}</li>
			<li>pressure:{weather.main.pressure}</li>
		</ul>
	</div>
			 
</div>
 
    </> : <>
    <h3 className="btn btn-secondary">Please enter the city name</h3>
    
    </>
}
</div>
  )
}

export default ProfileCard