fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3801289076602860794bddb717c8f4f5')
.then(function(respuestas){    return respuestas.json()})
.then(function(data){    
    console.log(data)    
    let info = data.results    
    let tiras =document.querySelector('');       
     for( let i=0; i<info.length; i++){        
         tiras.innerHTML += 
         .catch(function(error){    console.log(error);})



  