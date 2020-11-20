fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3801289076602860794bddb717c8f4f5')
.then(function(respuestas){    
    return respuestas.json()
})
.then(function(data){    
    console.log(data) ;   
    let info = data.results    
    let lista = document.querySelector(".lista-peliculas ");       
     console.log(lista)
    for( let i=0; i<info.length; i++){        

         lista.innerHTML += ` 
 
         
         <li class="item">
             <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
         </li>
         `
 } 
   })
.catch(function(error){    
             console.log(error);
            })


            fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=3801289076602860794bddb717c8f4f5')
            .then(function(respuestas){    
                return respuestas.json()
            })
            .then(function(data){    
                console.log(data) ;   
                let info = data.results    
                let lista = document.querySelector(".lista-series ");       
                 console.log(lista)
                for( let i=0; i<info.length; i++){        
            
                     lista.innerHTML += ` 
             
                     
                     <li class="item">
                         <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
                     </li>
                     `
             } 
               })
            .catch(function(error){    
                         console.log(error);
                        })

    
                        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=3801289076602860794bddb717c8f4f5')
                        .then(function(respuestas){    
                            return respuestas.json()
                        })
                        .then(function(data){    
                            console.log(data) ;   
                            let info = data.results    
                            let lista = document.querySelector(".lista-todas ");       
                             console.log(lista)
                            for( let i=0; i<info.length; i++){        
                        
                                 lista.innerHTML += ` 
                         
                                 
                                 <li class="item">
                                     <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
                                 </li>
                                 `
                         } 
                           })
                        .catch(function(error){    
                                     console.log(error);
                                    })       