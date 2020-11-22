// tira de Action
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
    let genero = document.querySelector('.lista-action');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"><img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`   
}
})
.catch(function(error){
    console.log(error);
})

// tira de Adventure
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-adventure');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Animation
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-animation');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Comedy
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-comedy');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Crime
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-crime');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Documentary
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-documentary');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Drama
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-drama');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Family
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-family');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Fantasy
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-fantasy');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de History
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-history');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Horror
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-horror');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Music
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10402')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-music');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Mystery
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-mystery');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Romance
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-romance');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Science Fiction
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-science-fiction');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de TV Movie
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-tv-movie');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Thriller
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-thriller');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de War
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-war');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Western
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37')
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data); 
    let info = data.results
let genero = document.querySelector('.lista-western');
console.log(genero)
for(let i=0; i<info.length; i++){
    genero.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info[i].id}&media_type=movie"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})
