// obtiene la query string
let queryString = location.search;
// // la transformo en un objeto literal
let queryObject = new URLSearchParams(queryString);

// capturo el dato para el endpoint de la url
let id = queryObject.get('id');

let mediaType = queryObject.get('media_type')

let url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=3801289076602860794bddb717c8f4f5&language=en-US`


if (mediaType == "movie"){
    fetch(url)
    .then(function(respuestas){    
        return respuestas.json()
    })
    .then(function(data){    
        console.log(data) ;  

        let titulo = document.querySelector('h1');
        if(data.title == ""){
            titulo.innerText = "Title: there are no results available.";
        } else{
            titulo.innerText = data.title;
        }
    
        let imagen = document.querySelector('section div img');
        if(data.poster_path == ""){
            imagen.src = "Image: there are no results available.";
        } else{
            imagen.src =  `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        }

        let descripcion = document.querySelector('.description');
        if(data.overview == ""){
            descripcion.innerText = "Description: there are no results available."
        }else{
            descripcion.innerText = "Description: " + data.overview; 
        }

        let fechaDeLanzamiento = document.querySelector('.fechadel');
        if(data.release_date == "" ) {
            fechaDeLanzamiento.innerText = "Date of release: there are no results available."
        }else{
            fechaDeLanzamiento.innerText = "Date of release: " + data.release_date;
        } 

        let estado = document.querySelector('.estado');
        if(data.status == ""){
            estado.innerText = "Status: there are no results available." 
        }else{
            estado.innerText = "Status: " + data.status;
        }

        let popularidad = document.querySelector('.polularidad');
        if (data.popularity == ""){
            popularidad.innerText = "Popularity: there are no resultes available."
        }else{
            popularidad.innerText = "Popularity: " + data.popularity;
        }

        let homePage = document.querySelector('.homep');
        if(data.homepage == ""){
           homePage.innerText = "Homepage: there are no results available.";
        }else{
            homePage.innerHTML = "Homepage: " + `<a href="${data.homepage}"> ${data.homepage} </a>`;
        }

        let lema = document.querySelector('.lema');
        if (data.tagline == ""){
            lema.innerText = "Tagline: there are no results available."
        }else{
            lema.innerText = "Tagline: " + data.tagline;
        }

        let votos = document.querySelector('.votos');
        if (data.vote_average == ""){
            votos.innerText = "Vote average:  there are no results available."
        }
        else{  
            votos.innerText = "Vote average: " + data.vote_average;
        }

        let genero = document.querySelector('.generos');
        if (data.genres == ""){
            genero.innerText = "Genders: there are no results available."
        }else{
            for (i=0; i<data.genres.length; i++){
                genero.innerHTML += ` <a href="../generos/genres.html#${data.genres[i].name}"> ${data.genres[i].name}. </a> `;
        }} 

        let storage = localStorage.getItem('favoritos')
        console.log(storage);
        if (storage===null){
            localStorage.setItem('favoritos', '[]')
        }
        let button =document.querySelector('.favorito')
        console.log(button);
        button.addEventListener('click', function(){
            
            let storageJs =JSON.parse(storage)
            if(!storageJs.includes(id)){
                storageJs.push(id)
            }else{
                storageJs = storageJs.filter (function(movie){
                    return movie != id
                })
            }
            localStorage.setItem('favoritos',JSON.stringify(storageJs))

            
        })
fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=3801289076602860794bddb717c8f4f5&language=en-US&page=1`)
.then(function(respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let reviews = document.querySelector('.detalle2');
    for (let i=0; i<data.results.length; i++){ 
    if (data.results.content == ""){
        reviews.innerHTML += `<li>Review: there are no results available.</li><br>`
    }else{
        reviews.innerHTML += `<div class="info2">
        <ul type=none class="listasdetail">
        <li>Review from "${data.results[i].author}": ${data.results[i].content} </li><br>
        </ul>
        </div>`;
    }}
    })
    .catch(function(error){    
        console.log(error);
        })
    

})
    
        .catch(function(error){    
            console.log(error);
            })
} 



// Para series de TV
else if (mediaType == "tv"){
    fetch(url)
    .then(function(respuestas){    
        return respuestas.json()
    })
    .then(function(data){    
        console.log(data) ;  
    
        let titulo = document.querySelector('h1');
        if(data.name == ""){
            titulo.innerText = "Title: there are no results available.";
        } else{
            titulo.innerText = data.name;
        }
    
        let imagen = document.querySelector('section div img');
        if(data.poster_path == ""){
            imagen.src = "Image: there are no results available.";
        } else{
            imagen.src =  `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        }

        let descripcion = document.querySelector('.description');
        if(data.overview == ""){
            descripcion.innerText = "Description: there are no results available."
        }else{
            descripcion.innerText = "Description: " + data.overview; 
        }


        let popularidad = document.querySelector('.polularidad');
        if (data.popularity == ""){
            popularidad.innerText = "Popularity: there are no resultes available."
        }else{
            popularidad.innerText = "Popularity: " + data.popularity;
        }

        let homePage = document.querySelector('.homep');
        if(data.homepage == ""){
           homePage.innerText = "Homepage: there are no results available.";
        }else{
            homePage.innerHTML = "Homepage: " + `<a href="${data.homepage}"> ${data.homepage} </a>`;
        }

        let fechaDeLanzamiento = document.querySelector('.fechadel');
        if(data.release_date == "" ) {
            fechaDeLanzamiento.innerText = "Date of release: there are no results available."
        }else{
            fechaDeLanzamiento.innerText = "Date of release: there are no results available.";
        } 

        let estado = document.querySelector('.estado');
        if(data.status == ""){
            estado.innerText = "Status: there are no results available." 
        }else{
            estado.innerText = "Status: " + data.status;
        }

        let lema = document.querySelector('.lema');
        if (data.tagline == ""){
            lema.innerText = "Tagline: there are no results available."
        }else{
            lema.innerText = "Tagline: " + data.tagline;
        }

        let votos = document.querySelector('.votos');
        if (data.vote_average == ""){
            votos.innerText = "Vote average:  there are no results available."
        }
        else{  
            votos.innerText = "Vote average: " + data.vote_average;
        }

        let genero = document.querySelector('.generos');
        if (data.genres == ""){
            genero.innerText = "Genders: there are no results available."
        }else{
            for (let i=0; i<data.genres.length; i++){
                genero.innerHTML += ` <a href="../generos/genres.html#${data.genres[i].name}"> ${data.genres[i].name}. </a> `;
        }} 

        let episodio = document.querySelector('.listasdetail');
        if (data.number_of_episodes == ""){
            episodio.innerHTML += `<li>Number of episodes: there are no results available.</li><br>`
        }else{
            episodio.innerHTML += `<li>Number of episodes: ${data.number_of_episodes} </li><br>`;
        }

        let capitulo = document.querySelector('.listasdetail');
        if (data.number_of_seasons == ""){
            capitulo.innerHTML += `<li>Number of episodes: there are no results available.</li><br>`
        }else{
            capitulo.innerHTML += `<li>Number of seasons: ${data.number_of_seasons} </li><br>`;
        }
      
        let storage = localStorage.getItem('favoritos')
        console.log(storage);
        if (storage===null){
            localStorage.setItem('favoritos', '[]')
        }

        let button =document.querySelector('.favorito')
        console.log(button);
        button.addEventListener('click', function(){
            
            let storageJs =JSON.parse(storage)
            if(!storageJs.includes(id)){
                storageJs.push(id)
            }else{
                storageJs = storageJs.filter (function(movie){
                    return movie != id
                })
            } 
            localStorage.setItem('favoritos',JSON.stringify(storageJs))
             
           
     


    })


    .catch(function(error){    
        console.log(error);
    })
       } ) }
