let storage = localStorage.getItem( 'favoritos')
console.log(storage);

if(storage == null){
    localStorage.setItem('favoritos', "[]")
}

let favoritos = document.querySelector('.fav')

let storageJs = JSON.parse(storage)
let movies = ''
storageJs.forEach(function(contenido){
    if (contenido.mediaType == 'tv'){
        imprimirSerie(contenido.id)
    }else{
        console.log(contenido)
        imprimirPelicula(contenido.id)
        
    }
} )
function imprimirSerie(id){ 
console.log(id)
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=3801289076602860794bddb717c8f4f5&language=en-US`)
    
    .then(datos => datos.json())
    .then(respuesta=>{
        console.log(respuesta);
        favoritos.innerHTML += ` <a href="./detalle/movieDetail.html?id=${respuesta.id}&media_type=tv"><img  class= "img-fa" src="https://image.tmdb.org/t/p/w500${respuesta.poster_path}" alt=""></a>`
    })
    

    .catch(function(error){    
        console.log(error);
        })
}
function imprimirPelicula(id){ 
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3801289076602860794bddb717c8f4f5&language=en-US`)
             
.then(datos => datos.json())
.then(respuesta=>{
    console.log(respuesta);
    favoritos.innerHTML += ` <a href="./detalle/movieDetail.html?id=${respuesta.id}&media_type=movie"><img class= "img-fa" src="https://image.tmdb.org/t/p/w500${respuesta.poster_path}" alt=""></a>`
})
.catch(function(error){    
    console.log(error);
    })



}
