   

   var b;
    b =prompt("Hii Please enter your city name","Do not Hit the cancel Button");
    
    var c= b.length;

       var img  = document.getElementById('opacity');


    if(c!==0)
    {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+b+'&appid=34e1b0b6cb8d45e7518fd209deb5069b')
    .then(res => (res.json()))
    .then(data =>{


       city.innerHTML= `NAME OF CITY - ${data['name']}`,

       temp.innerHTML= `TEMPREATURE - ${data['main']['temp']}`,

       humi.innerHTML = `HUMIDITY - ${data['main']['humidity']}`,

       console.log(data);


      //img.src=`https://cdn.aerisapi.com/wxicons/v2/${data['weather'][0]['main'].toLowerCase()}.png`;
            img.src=`http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`.toLowerCase();

        document.getElementById("inside-card").style.backgroundImage=`url("https://source.unsplash.com/300x430/?${b}")`;
    });
     }

   	var a=0;
   	  const fun =  () =>
   	  {
         
          if(a%2==0)
          {
            document.getElementById("menu").style.display="block"; a++;
             document.getElementById("btn").style.display="none";
          } 

          else
          {
          	document.getElementById("btn").style.display="block";
   	        document.getElementById("menu").style.display="none";
             a++;
          }

        
   	  }

   	  const show = ()=>
   	  {
            document.getElementById("btn").style.display="block";
   	        document.getElementById("menu").style.display="none";
   	        a++;
   	  }

      //let date = new Date().getFullYear();
   	//  document.getElementById('foot_p').innerHTML=`&copy; CopyRight ${date}`;

   
   var btn = document.querySelector('.btn');
   var inp =document.querySelector('.inp');
   var city =document.querySelector('.city');
   var temp =document.querySelector('.temp');
   var humi =document.querySelector('.humi');
    var image =document.querySelector('.image');
   
   

   // const a1 = "cloud";
   // const a2 = "rainy";
   // const a3 = "snowy";
   // const a4 = "windy";
   // const a5 = "sunny";


    btn.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inp.value+'&appid=34e1b0b6cb8d45e7518fd209deb5069b')
    .then(res => (res.json()))
    .then(data =>{


       city.innerHTML= `NAME OF CITY - ${data['name'].toUpperCase()}`,

       temp.innerHTML= `TEMPREATURE - ${data['main']['temp']}`,

       humi.innerHTML = `HUMIDITY - ${data['main']['humidity']}`

      
       document.getElementById("inside-card").style.backgroundImage=`url("https://source.unsplash.com/300x430/?${inp.value}")`;
      
             img.src=`http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`.toLowerCase();


       // document.getElementById("card").style.opacity="2px";
   
       // if(a1.includes(data['weather'][0]['main'].toLowerCase()))
       // {
       //    img.src="cloudy.jpg";
       // }    
       // else if(a2.includes(data['weather'][0]['main'].toLowerCase()))
       // {
       //    img.src="rainy.png";
       // }    
       // else if(a3.includes(data['weather'][0]['main'].toLowerCase()))
       // {
       //    img.src="snowy.png";
       // }    
       // else if(a4.includes(data['weather'][0]['main'].toLowerCase()))
       // {
       //    img.src="windy.jpg";
       // }    
       // else if(a5.includes(data['weather'][0]['main'].toLowerCase()))
       // {
       //    img.src="Sun.png";
       // }    
       

       

       

       

       

    });
   })    