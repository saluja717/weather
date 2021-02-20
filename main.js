   

   var b;
    b =prompt("Hii Please enter your city name","Do not Hit the cancel Button");
    
    var c= b.length;



    if(c!==0)
    {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+b+'&appid=34e1b0b6cb8d45e7518fd209deb5069b')
    .then(res => (res.json()))
    .then(data =>{


       city.innerHTML= `NAME OF CITY - ${data['name']}`,

       temp.innerHTML= `TEMPREATURE - ${data['main']['temp']}<sup>o</sup>C`,

       humi.innerHTML = `HUMIDITY - ${data['main']['humidity']}`,

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

      let date = new Date().getFullYear();
   	  document.getElementById('foot_p').innerHTML=`&copy; CopyRight ${date}`;

   
   var btn = document.querySelector('.btn');
   var inp =document.querySelector('.inp');
   var city =document.querySelector('.city');
   var temp =document.querySelector('.temp');
   var humi =document.querySelector('.humi');
    var image =document.querySelector('.image');
   


    btn.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inp.value+'&appid=34e1b0b6cb8d45e7518fd209deb5069b')
    .then(res => (res.json()))
    .then(data =>{


       city.innerHTML= `NAME OF CITY - ${data['name'].toUpperCase()}`,

       temp.innerHTML= `TEMPREATURE - ${data['main']['temp']}<sup>o</sup>C`,

       humi.innerHTML = `HUMIDITY - ${data['main']['humidity']}`
      
       document.getElementById("inside-card").style.backgroundImage=`url("https://source.unsplash.com/300x430/?${inp.value}")`;

    });
   })    