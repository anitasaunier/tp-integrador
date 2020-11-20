let storage = localStorage.getItem( 'favoritos')
console.log(storage);

if(storage == null){
    localStorage.setItem('favoritos', "[]")
}

let favoritos = document.querySelector('.fav')

let storageJs = JSON.parse(storage)
let movies = ''

storageJs.forEach( id =>{
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=3801289076602860794bddb717c8f4f5&language=en-US`)
    
    
    .then(datos => datos.json())
    .then(respuesta=>{
        console.log(respuesta);
        favoritos.innerHTML += ` <a href="movieDetail.html?id=${respuesta.id}"><img src="https://image.tmdb.org/t/p/w500${respuesta.poster_path}" alt=""></a>`
    })
    

    .catch(function(error){    
        console.log(error);
        })
})

storageJs.forEach( id =>{
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3801289076602860794bddb717c8f4f5&language=en-US`)
    
    
.then(datos => datos.json())
.then(respuesta=>{
    console.log(respuesta);
    favoritos.innerHTML += ` <a href="movieDetail.html?id=${respuesta.id}"><img src="https://image.tmdb.org/t/p/w500${respuesta.poster_path}" alt=""></a>`
})
.catch(function(error){    
    console.log(error);
    })


})
