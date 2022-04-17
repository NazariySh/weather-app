let key = 'ff4f775fc720bf99d771f775a6f7775c';
const dateObj = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[dateObj.getMonth()];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[dateObj.getDay()];
let number  = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let t = dateObj.getMinutes();
let info = document.querySelector('#info');
info.innerText = day + ', ' + number + ' ' + month + ', ' + year;
let tme = document.querySelector('#time');
dateOfDay1.innerHTML = `  ${number+1}  ${month}`;
dateOfDay2.innerHTML = `  ${number+2}  ${month}`;
dateOfDay3.innerHTML = `  ${number+3}  ${month}`;
dateOfDay4.innerHTML = `  ${number+4}  ${month}`;
dateOfDay5.innerHTML = `  ${number+5}  ${month}`;
dateOfDay6.innerHTML = `  ${number+6}  ${month}`;

    
    const date = new Date();
   tme.innerHTML = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
  
   let timeOfDay = new Date().getHours();
   
   let timeInfo = timeOfDay;
 //get time for hourly forecast
   function getTimeInfo(timeInfo){
      if(timeInfo===0 || timeInfo<=13){
      
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo + 4 + ':00';
      p6.innerHTML = timeInfo  + 5 + ':00';
      p7.innerHTML = timeInfo  + 6 + ':00';
      p8.innerHTML =timeInfo  + 7 + ':00';
      p9.innerHTML = timeInfo  + 8 + ':00';
      p10.innerHTML = timeInfo  + 9 + ':00';
      p11.innerHTML = timeInfo  + 10+ ':00';
      p12.innerHTML = timeInfo  + 11 + ':00';
      }else if(timeInfo===14){
       
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo + 4 + ':00';
      p6.innerHTML = timeInfo  + 5 + ':00';
      p7.innerHTML = timeInfo  + 6 + ':00';
      p8.innerHTML =timeInfo  + 7 + ':00';
      p9.innerHTML = timeInfo  + 8 + ':00';
      p10.innerHTML = timeInfo  + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24  + 11 + ':00';
      }else if(timeInfo===15){
       
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo + 4 + ':00';
      p6.innerHTML = timeInfo  + 5 + ':00';
      p7.innerHTML = timeInfo  + 6 + ':00';
      p8.innerHTML =timeInfo  + 7 + ':00';
      p9.innerHTML = timeInfo  + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===16){
        
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo + 4 + ':00';
      p6.innerHTML = timeInfo  + 5 + ':00';
      p7.innerHTML = timeInfo  + 6 + ':00';
      p8.innerHTML =timeInfo  + 7 + ':00';
      p9.innerHTML = timeInfo -24  + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===17){
       
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo + 4 + ':00';
      p6.innerHTML = timeInfo  + 5 + ':00';
      p7.innerHTML = timeInfo  + 6 + ':00';
      p8.innerHTML =timeInfo -24 + 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24  + 11 + ':00';
      }else if(timeInfo===18){
         
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo + 4 + ':00';
      p6.innerHTML = timeInfo  + 5 + ':00';
      p7.innerHTML = timeInfo -24 + 6 + ':00';
      p8.innerHTML =timeInfo -24 + 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===19){
        
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo + 4 + ':00';
      p6.innerHTML = timeInfo -24 + 5 + ':00';
      p7.innerHTML = timeInfo -24 + 6 + ':00';
      p8.innerHTML =timeInfo  -24+ 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===20){
       
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo + 3 + ':00';
      p5.innerHTML = timeInfo -24 + 4 + ':00';
      p6.innerHTML = timeInfo -24 + 5 + ':00';
      p7.innerHTML = timeInfo -24 + 6 + ':00';
      p8.innerHTML =timeInfo -24 + 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===21){
       
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo  + 2 + ':00';
      p4.innerHTML = timeInfo -24 + 3 + ':00';
      p5.innerHTML = timeInfo -24 + 4 + ':00';
      p6.innerHTML = timeInfo -24 + 5 + ':00';
      p7.innerHTML = timeInfo -24 + 6 + ':00';
      p8.innerHTML =timeInfo -24 + 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===22){
        
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo + 1 + ':00';
      p3.innerHTML = timeInfo -24 + 2 + ':00';
      p4.innerHTML = timeInfo -24 + 3 + ':00';
      p5.innerHTML = timeInfo -24+ 4 + ':00';
      p6.innerHTML = timeInfo -24 + 5 + ':00';
      p7.innerHTML = timeInfo -24 + 6 + ':00';
      p8.innerHTML =timeInfo -24 + 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===23){
      
         p1.innerHTML = timeInfo  + ':00';
      p2.innerHTML = timeInfo-24 + 1 + ':00';
      p3.innerHTML = timeInfo  -24 + 2 + ':00';
      p4.innerHTML = timeInfo -24+ 3 + ':00';
      p5.innerHTML = timeInfo  -24+ 4 + ':00';
      p6.innerHTML = timeInfo -24 + 5 + ':00';
      p7.innerHTML = timeInfo -24 + 6 + ':00';
      p8.innerHTML =timeInfo -24 + 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }else if(timeInfo===24){
      
         p1.innerHTML = timeInfo -24 + ':00';
      p2.innerHTML = timeInfo-24 + 1 + ':00';
      p3.innerHTML = timeInfo  -24 + 2 + ':00';
      p4.innerHTML = timeInfo -24+ 3 + ':00';
      p5.innerHTML = timeInfo  -24+ 4 + ':00';
      p6.innerHTML = timeInfo -24 + 5 + ':00';
      p7.innerHTML = timeInfo -24 + 6 + ':00';
      p8.innerHTML =timeInfo -24 + 7 + ':00';
      p9.innerHTML = timeInfo -24 + 8 + ':00';
      p10.innerHTML = timeInfo -24 + 9 + ':00';
      p11.innerHTML = timeInfo -24 + 10+ ':00';
      p12.innerHTML = timeInfo -24 + 11 + ':00';
      }
      
      
      
      
   }
  
getTimeInfo(timeInfo);

   
   


  


 


fetch('https://api.ipify.org/?format=json')
.then(res =>{
   return(res.json())
})
.then(data =>{

   let iP = data.ip;
   fetch('https://www.iplocate.io/api/lookup/'+iP)
   .then(res =>{
      return(res.json())
   })
   .then(data =>{
      console.log(data)
     
     let lat = data.latitude;
     let lon = data.longitude;
fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+key)
.then(res =>{
   return(res.json())
})
.then(data =>{
   console.log(data)

   let desc = document.querySelector('#desc');
   desc.innerText = data.weather[0].description;
   let feels = document.querySelector('#feels');
   feels.innerText = 'Feels like: ' + (data.main.feels_like-273.15).toFixed(2)+'°C';;
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  let countr = document.querySelector('#countr');
   countr.innerHTML = data.name + ', ' + data.sys.country
   temp.innerText =  (data.main.temp-273.15).toFixed(2)+'°C';
   let city = data.name;
   fetch('https://api.weatherapi.com/v1/current.json?key=83664bb452434c02a8174114221004&q='+city)
.then(res => res.json())
.then(data=>{
   console.log(data)
 

  let timeOfDay = 'day';
  const code = data.current.condition.code;
  if(!data.current.is_day){
     timeOfDay = 'night'
  }
  if(code==1000){
     document.body.style.backgroundImage = "url('img/"+timeOfDay+"/clear.jpg')"


     temp_place.style.backgroundImage = "url(img/sunny_foggy_color.png)";
  }else if(
     code == 1003||
     code== 1006||
     code== 1009||
     code== 1030||
     code== 1069||
     code== 1087||
     code== 1135||
     code== 1273||
     code== 1276||
     code== 1279||
     code== 1282
    
  ){
document.body.style.backgroundImage = "url('img/"+timeOfDay+"/cloudy.jpg')"
temp_place.style.backgroundImage = "url(img/icon.png)";
  }else if(
   code== 1063||
   code== 1069||
   code== 1072||
   code== 1150||
   code== 1153||
   code== 1180||
   code== 1183||
   code== 1186||
   code== 1189||
   code== 1192||
   code== 1195||
   code== 1204||
   code== 1207||
   code== 1240||
   code== 1243||
   code== 1246||
   code== 1249||
   code== 1252

  ){
     document.body.style.backgroundImage = "url('img/"+timeOfDay+"/rainy.jpg')"
     temp_place.style.backgroundImage = "url(img/rain_light_color.png)";
  }else{
     document.body.style.backgroundImage = " url('img/"+timeOfDay+"/snowy.jpg')"
     temp_place.style.backgroundImage = "url(img/windy_color.png)";
  }

})
   fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+key)
     .then(response =>{ return(response.json())})
.then(data=>{
   console.log(data);

 
   img1.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+"@2x.png')";
   img2.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+"@2x.png')";
   img3.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+"@2x.png')";
   img4.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+"@2x.png')";
   img5.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[5].weather[0].icon+"@2x.png')";
   img6.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[6].weather[0].icon+"@2x.png')";
 
   hourImg1.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[0].weather[0].icon+"@2x.png')";
   hourImg2.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[1].weather[0].icon+"@2x.png')";
   hourImg3.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[2].weather[0].icon+"@2x.png')";
   hourImg4.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[3].weather[0].icon+"@2x.png')";
   hourImg5.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[4].weather[0].icon+"@2x.png')";
   hourImg6.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[5].weather[0].icon+"@2x.png')";
   hourImg7.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[6].weather[0].icon+"@2x.png')";
   hourImg8.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[7].weather[0].icon+"@2x.png')";
   hourImg9.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[8].weather[0].icon+"@2x.png')";
   hourImg10.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[9].weather[0].icon+"@2x.png')";
   hourImg11.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[10].weather[0].icon+"@2x.png')";
   hourImg12.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[11].weather[0].icon+"@2x.png')";
  
   let day1 = document.querySelector('#day1');
   day1.innerHTML = (data.daily[1].temp.day-273.15).toFixed(2)+'°C';
   let day2 = document.querySelector('#day2');
   day2.innerHTML =  (data.daily[2].temp.day-273.15).toFixed(2)+'°C';
   let day3 = document.querySelector('#day3');
   day3.innerHTML = (data.daily[3].temp.day-273.15).toFixed(2)+'°C';
   let day4 = document.querySelector('#day4');
   day4.innerHTML = (data.daily[4].temp.day-273.15).toFixed(2)+'°C';
   let day5 = document.querySelector('#day5');
   day5.innerHTML = (data.daily[5].temp.day-273.15).toFixed(2)+'°C'
   let day6 = document.querySelector('#day6');
   day6.innerHTML = (data.daily[6].temp.day-273.15).toFixed(2)+'°C';

   let hour1 = document.querySelector('#hour1');
   hour1.innerHTML = (data.hourly[0].temp-273.15).toFixed(2)+'°C';
   let hour2 = document.querySelector('#hour2');
   hour2.innerHTML = (data.hourly[1].temp-273.15).toFixed(2)+'°C';
   let hour3 = document.querySelector('#hour3');
   hour3.innerHTML = (data.hourly[2].temp-273.15).toFixed(2)+'°C';
   let hour4 = document.querySelector('#hour4');
   hour4.innerHTML = (data.hourly[3].temp-273.15).toFixed(2)+'°C';
   let hour5 = document.querySelector('#hour5');
   hour5.innerHTML = (data.hourly[4].temp-273.15).toFixed(2)+'°C';
   let hour6 = document.querySelector('#hour6');
   hour6.innerHTML = (data.hourly[5].temp-273.15).toFixed(2)+'°C';
   let hour7 = document.querySelector('#hour7');
   hour7.innerHTML = (data.hourly[6].temp-273.15).toFixed(2)+'°C';
   let hour8 = document.querySelector('#hour8');
   hour8.innerHTML = (data.hourly[7].temp-273.15).toFixed(2)+'°C';
   let hour9 = document.querySelector('#hour9');
   hour9.innerHTML = (data.hourly[8].temp-273.15).toFixed(2)+'°C';
   let hour10 = document.querySelector('#hour10');
   hour10.innerHTML = (data.hourly[9].temp-273.15).toFixed(2)+'°C';
   let hour11 = document.querySelector('#hour11');
   hour11.innerHTML = (data.hourly[10].temp-273.15).toFixed(2)+'°C';
   let hour12 = document.querySelector('#hour12');
   hour12.innerHTML = (data.hourly[11].temp-273.15).toFixed(2)+'°C';
  
  let dop = document.querySelector('#dop');
  dop.innerText = 'humidity '+ ' : '+data.current.humidity+'%'+ ' | '  + ' pressure' + ' : ' +  data.current.pressure +'mbar '+ ' | '  +'wind speed ' + ' : '+ data.current.wind_speed+ 'km/h' + ' | ' +'visibility '+ ' : '+ data.current.visibility;
 
      let map = L.map('map').setView([data.lat, data.lon], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
}).addTo(map);

function onMapClick(e){
  
  
   fetch('http://api.openweathermap.org/data/2.5/weather?lat='+e.latlng.lat+'&lon='+e.latlng.lng+'&appid='+key)
   .then(response =>{
      return(response.json())
   })
   .then(data =>{
      console.log(data)
      
     
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
   
      .bindPopup('City: '+ data.name + '<br>' + data.weather[0].description + ',  ' + (data.main.temp-273.15).toFixed(2)+'°C')
      .openPopup();
     
      
   })
   }
   map.on('click' , onMapClick  )
     


   })
   
}


)
})
   });
    

 


  

search.onclick = function(){
   
let city = cityField.value; 
fetch('https://api.weatherapi.com/v1/current.json?key=83664bb452434c02a8174114221004&q='+city)
.then(res => res.json())
.then(data=>{
   console.log(data)
 
   function monthOfTheYear(day, month, year){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
      return months[new Date(`${day}/${month}/${year}`).getMonth()];
   }
   const date = data.location.localtime;


   const y = parseInt(date.substr(0, 4));
   const m = parseInt(date.substr(5, 2));
   const d = parseInt(date.substr(8, 2));
   
   const time = date.substr(11);
   const timeDate = parseInt(date.substr(11));
   let timeInfo = timeDate;


  
 
   getTimeInfo(timeInfo);
 
 
   
   
   info.innerHTML = `  ${d} , ${monthOfTheYear(day, month, year)} , ${y}`;
   tme.innerHTML = time;
   dateOfDay1.innerHTML = `  ${d+1}  ${monthOfTheYear(day, month, year)}`;
   dateOfDay2.innerHTML = `  ${d+2}  ${monthOfTheYear(day, month, year)}`;
   dateOfDay3.innerHTML = `  ${d+3}  ${monthOfTheYear(day, month, year)}`;
   dateOfDay4.innerHTML = `  ${d+4}  ${monthOfTheYear(day, month, year)}`;
   dateOfDay5.innerHTML = `  ${d+5}  ${monthOfTheYear(day, month, year)}`;
   dateOfDay6.innerHTML = `  ${d+6}  ${monthOfTheYear(day, month, year)}`;


  let timeOfDay = 'day';
  const code = data.current.condition.code;
  if(!data.current.is_day){
     timeOfDay = 'night'
  }
  if(code==1000){
   document.body.style.backgroundImage = "url('img/"+timeOfDay+"/clear.jpg')"


   temp_place.style.backgroundImage = "url(img/sunny_foggy_color.png)";
}else if(
   code == 1003||
   code== 1006||
   code== 1009||
   code== 1030||
   code== 1069||
   code== 1087||
   code== 1135||
   code== 1273||
   code== 1276||
   code== 1279||
   code== 1282
  
){
document.body.style.backgroundImage = "url('img/"+timeOfDay+"/cloudy.jpg')"
temp_place.style.backgroundImage = "url(img/icon.png)";
}else if(
 code== 1063||
 code== 1069||
 code== 1072||
 code== 1150||
 code== 1153||
 code== 1180||
 code== 1183||
 code== 1186||
 code== 1189||
 code== 1192||
 code== 1195||
 code== 1204||
 code== 1207||
 code== 1240||
 code== 1243||
 code== 1246||
 code== 1249||
 code== 1252

){
   document.body.style.backgroundImage = "url('img/"+timeOfDay+"/rainy.jpg')"
   temp_place.style.backgroundImage = "url(img/rain_light_color.png)";
}else{
   document.body.style.backgroundImage = " url('img/"+timeOfDay+"/snowy.jpg')"
   temp_place.style.backgroundImage = "url(img/windy_color.png)";
}

})
fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key)
.then(res =>{
    return(res.json())
})
.then(data =>{
    console.log(data)
    let desc = document.querySelector('#desc');
   desc.innerText = data.weather[0].description;
   let lat = data.coord.lat;
   let lon = data.coord.lon;
   let countr = document.querySelector('#countr');
    countr.innerHTML = data.name + ', ' + data.sys.country
    temp.innerText =  (data.main.temp-273.15).toFixed(2)+'°C';
    let feels = document.querySelector('#feels');
   feels.innerText = 'Feels like: ' + (data.main.feels_like-273.15).toFixed(2)+'°C';
function getDaysAndHoursForecast(){
   fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+key)
   .then(response =>{
       return(response.json())
   })
   .then(data=>{
       console.log(data)
   
       
     
      
      hourImg1.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[0].weather[0].icon+"@2x.png')";
      hourImg2.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[2].weather[0].icon+"@2x.png')";
      hourImg3.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[4].weather[0].icon+"@2x.png')";
      hourImg4.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[6].weather[0].icon+"@2x.png')";
      hourImg5.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[8].weather[0].icon+"@2x.png')";
      hourImg6.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[10].weather[0].icon+"@2x.png')";
      hourImg7.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[12].weather[0].icon+"@2x.png')";
      hourImg8.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[14].weather[0].icon+"@2x.png')";
      hourImg9.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[16].weather[0].icon+"@2x.png')";
      hourImg10.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[18].weather[0].icon+"@2x.png')";
      hourImg11.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[20].weather[0].icon+"@2x.png')";
      hourImg12.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.hourly[22].weather[0].icon+"@2x.png')";
     
       img1.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+"@2x.png')";
      img2.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+"@2x.png')";
      img3.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+"@2x.png')";
      img4.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+"@2x.png')";
      img5.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[5].weather[0].icon+"@2x.png')";
      img6.style.backgroundImage = "url('http://openweathermap.org/img/wn/"+data.daily[6].weather[0].icon+"@2x.png')";
      
      
      let dop = document.querySelector('#dop');
      dop.innerText = ' humidity '+ ' : '+data.current.humidity+'%'+ ' | '  + ' pressure' + ' : ' +  data.current.pressure +'mbar '+ ' | '  +'wind speed ' + ' : '+ data.current.wind_speed+ 'km/h' + ' | ' +'visibility '+ ' : '+ data.current.visibility;
      
      let day1 = document.querySelector('#day1');
      day1.innerHTML = (data.daily[1].temp.day-273.15).toFixed(2)+'°C'
      let day2 = document.querySelector('#day2');
      day2.innerHTML =  (data.daily[2].temp.day-273.15).toFixed(2)+'°C';
      let day3 = document.querySelector('#day3');
      day3.innerHTML = (data.daily[3].temp.day-273.15).toFixed(2)+'°C';
      let day4 = document.querySelector('#day4');
      day4.innerHTML = (data.daily[4].temp.day-273.15).toFixed(2)+'°C';
      let day5 = document.querySelector('#day5');
      day5.innerHTML = (data.daily[5].temp.day-273.15).toFixed(2)+'°C'
      let day6 = document.querySelector('#day6');
      day6.innerHTML = (data.daily[6].temp.day-273.15).toFixed(2)+'°C';
      
      let hour1 = document.querySelector('#hour1');
      hour1.innerHTML = (data.hourly[0].temp-273.15).toFixed(2)+'°C'
      let hour2 = document.querySelector('#hour2');
      hour2.innerHTML = (data.hourly[2].temp-273.15).toFixed(2)+'°C'
      let hour3 = document.querySelector('#hour3');
      hour3.innerHTML = (data.hourly[4].temp-273.15).toFixed(2)+'°C'
      let hour4 = document.querySelector('#hour4');
      hour4.innerHTML = (data.hourly[6].temp-273.15).toFixed(2)+'°C'
      let hour5 = document.querySelector('#hour5');
      hour5.innerHTML = (data.hourly[8].temp-273.15).toFixed(2)+'°C'
      let hour6 = document.querySelector('#hour6');
      hour6.innerHTML = (data.hourly[10].temp-273.15).toFixed(2)+'°C'
      let hour7 = document.querySelector('#hour7');
      hour7.innerHTML = (data.hourly[12].temp-273.15).toFixed(2)+'°C'
      let hour8 = document.querySelector('#hour8');
      hour8.innerHTML = (data.hourly[14].temp-273.15).toFixed(2)+'°C'
      let hour9 = document.querySelector('#hour9');
      hour9.innerHTML = (data.hourly[16].temp-273.15).toFixed(2)+'°C'
      let hour10 = document.querySelector('#hour10');
      hour10.innerHTML = (data.hourly[18].temp-273.15).toFixed(2)+'°C'
      let hour11 = document.querySelector('#hour11');
      hour11.innerHTML = (data.hourly[20].temp-273.15).toFixed(2)+'°C'
      let hour12 = document.querySelector('#hour12');
      hour12.innerHTML = (data.hourly[22].temp-273.15).toFixed(2)+'°C'
   
   
   
      
      
   })
}
getDaysAndHoursForecast();

cityField.value = ' ';
})


}





