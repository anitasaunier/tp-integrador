


let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);


let search = queryObject.get('search'); 
let mediaType = queryObject.get('mediaType'); 


let apiKey = "3801289076602860794bddb717c8f4f5"


if(mediaType == "movie"){

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false` //Viene de la API de TMDB

    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
            //Aca operamos con los datos.
            console.log(data);

            let info = data.results //Esto es un array.
            let resultados = document.querySelector('.resultados');
           
            for (let i=0; i < info.length; i++) {
             
            resultados.innerHTML += `<li>
                                        <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                                            <img class="img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="This image is not available">
                                        </a>
                                    </li>`
                            
          }

        })
        .catch(function (error) {
            console.log(error);
        })    }




if(mediaType == "tv"){
    
    let url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false` //Viene de la API de TMDB
        
    fetch(url)
        .then(function (respuestas) {
            return respuestas.json()
        })
        .then(function (data) {
        //Aca operamos con los datos.
        console.log(data);
        
            let info = data.results //Esto es un array.
                console.log(info)
            let resultados = document.querySelector('.resultados');
                    
            for (let i = 0; i < info.length; i++) {
                resultados.innerHTML += `<li>
                                         <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                                         <img class= "img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="This image is not available">
                                                                </a>
                                        </li>`
                }
        
                })
            .catch(function (error) {
                console.log(error);
            })
        }
        
if(mediaType == "person"){
            //Completar
    let url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false` //Viene de la API de TMDB
        
    fetch(url)
        .then(function (respuestas) {
                    return respuestas.json()
                })
                .then(function (data) {
                    //Aca operamos con los datos.
                    console.log(data);
        
                    let info = data.results //Esto es un array.
                    let resultados = document.querySelector('.resultados');
                    
        
                    for (let i = 0; i < info.length; i++) {
                       resultados.innerHTML += `<li>
                                         <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                                         <img class= "img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].profile_path}" alt="This image is not available">
                                                                </a>
                                        </li>`
                    }
        
                })
                .catch(function (error) {
                    console.log(error);
                })


 }
        
if(mediaType == "all"){
            //fetch a multisearch
        
            let url = ` https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false` //Viene de la API de TMDB
        
            fetch(url)
                .then(function (respuestas) {
                    return respuestas.json()
                })
                .then(function (data) {
                    //Aca operamos con los datos.
                    console.log(data);
        
                    let info = data.results //Esto es un array.
                    let resultados = document.querySelector('.resultados');
                   
        
                    for (let i = 0; i < info.length; i++) {
                        if(info[i].media_type == "movie"){
                            resultados.innerHTML += `<li>
                            <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                                <img class="img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="This image is not available">
                            </a>
                        </li>`

                        } else if (info[i].media_type == "tv"){
                            resultados.innerHTML += `<li>
                            <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                            <img class= "img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="This image is not available">
                                                   </a>
                           </li>`
                        } else {
                            resultados.innerHTML += `<li>
                            <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                            <img class= "img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].profile_path}" alt="This image is not available">
                                                   </a>
                           </li>`
                        }
                    }
        
                })
                .catch(function (error) {
                    console.log(error);
                })
                 }
                 
            
                 window.addEventListener ('load', function(){
                    let spin = document.querySelector ('.loader')
                    spin.style.display = "none"
                })
            
