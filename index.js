let weather= {
  fetchWeather : function(city){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&appid=" + "c9b218962d765cd27facbc87ee3a2e06"
    )
    .then((res)=>{
      
      return res.json()
      
    })
    .then((data)=>{
      this.displayWeather(data)
      console.log(data)
    })
  },
  displayWeather: function(data){
    const {name} =data
    const{humidity, temp}=data.main
    const{description , icon}=data.weather[0]
    const {speed}=data.wind
    const{timezone}=data
    
    var date = new Date();
    let currentHours = date.getHours()
    let currentmins = date.getMinutes()
    console.log(currentmins)
    console.log(currentHours)

    if(timezone!==19800){
      console.log(Math.floor((timezone-19800)/60/60) )
     var hours = currentHours+Math.floor((timezone-19800)/60/60) 
     var mins  = currentmins+30
    //  let hours =  currentHours - Math.floor( (data.timezone)/60/60) 
    }
    else{
      hours = currentHours
      mins = currentmins
    }

    
    console.log(name, humidity , temp, description, icon,speed, timezone)
    document.querySelector(".city").innerHTML=name
    document.querySelector('.temp').innerHTML=temp+" °C"
    document.querySelector('.description').innerHTML=description
    document.querySelector('.humidity').innerHTML='humidity : '+humidity+' %'
    document.querySelector('.wind').innerHTML='speed        : '+ speed + ' M/S'
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.body.style.backgroundImage=  "url('https://source.unsplash.com/1600x900/?" + name + "')";
    document.querySelector(".hour").innerHTML=hours+" Hr"
    document.querySelector(".mins").innerHTML=mins+" Min"
  },
  search:function(){this.fetchWeather(document.querySelector(".search-bar").value)}
}
document.querySelector('.search button').addEventListener('click',()=>{weather.search()})
document.querySelector('.search-bar').addEventListener('keyup', (e)=>{if(e.key=='Enter'){weather.search()}})
weather.fetchWeather("tirupati")


// var date = new Date();
// console.log(hours)
// 
// document.querySelector(".hour").innerHTML=hours+" Hr"

// 	console.log(date.getHours(),":", date.getMinutes())
