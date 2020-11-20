// ontiene la query string
let queryString = location.search;
// // la transformo en un objeto literal
let queryObject = new URLSearchParams(queryString);//
 //console.log(queryObject);
 // capturo el dato para el endpoint de la url
 let id = queryObject.get('id');
 //console.log(id);
let mediaType = queryObject.get('mediatype')
let apiKey = " 3801289076602860794bddb717c8f4f5"
let url = `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=3801289076602860794bddb717c8f4f5&language=en-US`

if (mediaType == "movie"){
    fetch(url)
    .then(function(respuestas){    
        return respuestas.json()
    })
    .then(function(data){    
        console.log(data) ;  
    
        let titulo = document.querySelector('h1');
        let imagen = document.querySelector('section div img');
        let descripcion = document.querySelector('.description');
        let fechaDeLanzamiento = document.querySelector('.fechadel');
        let popularidad = document.querySelector('.polularidad');
        let homePage = document.querySelector('.homep');
        let lema = document.querySelector('.lema');
        let estado = document.querySelector('.estado');
        let votos = document.querySelector('.votos');
   
   
        titulo.innerText = data.title;
        imagen.src =  `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        descripcion.innerText = "Description: " + data.overview; 
        popularidad.innerText = "Popularity: " + data.popularity;

        homePage.innerText = "Homepage: " + data.homepage;
        fechaDeLanzamiento.innerText = "Date of release: " + data.release_date;
        lema.innerText = "Tagline: " + data.tagline;
        estado.innerText = "Status: " + data.status;
        votos.innerText = "Vote average: " + data.vote_average;
        })
        .catch(function(error){    
            console.log(error);
            })
}
//    if (titulo == ""){
//     titulo.innerHTML = "Null"
//    }else if(titulo == true ) {
//     titulo.innerHTML = data.title;
//    }
//    let imagen = document.querySelector('section div img');
//    let descripcion = document.querySelector('.description');
//    let fechaDeLanzamiento = document.querySelector('.fechadel');
//    let popularidad = document.querySelector('.polularidad');
//    let homePage = document.querySelector('.homep');
//    let lema = document.querySelector('.lema');
//    let estado = document.querySelector('.estado');
//    let votos = document.querySelector('.votos');
   
   
//     titulo.innerHTML = data.title;
//    imagen.src =  `https://image.tmdb.org/t/p/w500${data.poster_path}`;
//    descripcion.innerHTML = "Description: " + data.overview; 
//    popularidad.innerHTML = "Popularity: " + data.popularity;

//    homePage.innerHTML = "Homepage: " + data.homepage;
//    fechaDeLanzamiento.innerHTML = "Date of release: " + data.release_date;
//    lema.innerHTML = "Tagline: " + data.tagline;
//    estado.innerHTML = "Status: " + data.status;
//    votos.innerHTML = "Vote average: " + data.vote_average;


    // .innerHTML += `  <h1 class="titulo">PARASITE</h1>

    //     <section class="detalle">      
    //         <div class="imgdetail"> 
    //             <img src="img/parasite.jpeg" alt="Parasite" width="100%">
    //             <div class="botones">
    //                 <a href="#" class="view">Reproducir</a>
    //                 <a href="#" class="view">Ver trailer</a>
    //             </div>
    //         </div>  `
 
         
       
         
  
//    })
// .catch(function(error){    
//              console.log(error);
//             })
