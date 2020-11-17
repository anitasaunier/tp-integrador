fetch('https://api.themoviedb.org/3/trending/all/day?api_key=3801289076602860794bddb717c8f4f5')
.then(function(respuestas){    
    return respuestas.json()
})
.then(function(data){    
    console.log(data)    
    let info = data.results    
    let lista =document.querySelector('.img-ambos');       
     for( let i=0; i<info.length; i++){        
         lista.innerHTML += `
                             <img src=https://image.tmdb.org/t/p/w500${info[i].poster_path}                  `




.catch(function(error){    
             console.log(error);
            })



   