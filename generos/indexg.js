// tira de Action
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28')
.then(function(data){
    return data.json()
})
.then(function(generos1){
    console.log(generos1); 
    let info1 = generos1.results
let generosa1 = document.querySelector('.lista-action');
console.log(generosa1)
for(let i=0; i<info1.length; i++){
    generosa1.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info1[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info1[i].poster_path}" alt="el hater">
</li>
`   
}
})
.catch(function(error){
    console.log(error);
})

// tira de Adventure
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12')
.then(function(data){
    return data.json()
})
.then(function(generos2){
    console.log(generos2); 
    let info2 = generos2.results
let generosa2 = document.querySelector('.lista-adventure');
console.log(generosa2)
for(let i=0; i<info2.length; i++){
    generosa2.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info2[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info2[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Animation
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16')
.then(function(data){
    return data.json()
})
.then(function(generos3){
    console.log(generos3); 
    let info3 = generos3.results
let generosa3 = document.querySelector('.lista-animation');
console.log(generosa3)
for(let i=0; i<info3.length; i++){
    generosa3.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info3[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info3[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Comedy
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35')
.then(function(data){
    return data.json()
})
.then(function(generos4){
    console.log(generos4); 
    let info4 = generos4.results
let generosa4 = document.querySelector('.lista-comedy');
console.log(generosa4)
for(let i=0; i<info4.length; i++){
    generosa4.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info4[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info4[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Crime
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80')
.then(function(data){
    return data.json()
})
.then(function(generos5){
    console.log(generos5); 
    let info5 = generos5.results
let generosa5 = document.querySelector('.lista-crime');
console.log(generosa5)
for(let i=0; i<info5.length; i++){
    generosa5.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info5[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info5[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Documentary
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99')
.then(function(data){
    return data.json()
})
.then(function(generos6){
    console.log(generos6); 
    let info6 = generos6.results
let generosa6 = document.querySelector('.lista-documentary');
console.log(generosa6)
for(let i=0; i<info6.length; i++){
    generosa6.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info6[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info6[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Drama
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18')
.then(function(data){
    return data.json()
})
.then(function(generos7){
    console.log(generos7); 
    let info7 = generos7.results
let generosa7 = document.querySelector('.lista-drama');
console.log(generosa7)
for(let i=0; i<info7.length; i++){
    generosa7.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info7[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info7[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Family
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751')
.then(function(data){
    return data.json()
})
.then(function(generos8){
    console.log(generos8); 
    let info8 = generos8.results
let generosa8 = document.querySelector('.lista-family');
console.log(generosa8)
for(let i=0; i<info8.length; i++){
    generosa8.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info8[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info8[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Fantasy
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14')
.then(function(data){
    return data.json()
})
.then(function(generos9){
    console.log(generos9); 
    let info9 = generos9.results
let generosa9 = document.querySelector('.lista-fantasy');
console.log(generosa9)
for(let i=0; i<info9.length; i++){
    generosa9.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info9[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info9[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de History
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36')
.then(function(data){
    return data.json()
})
.then(function(generos10){
    console.log(generos10); 
    let info10 = generos10.results
let generosa10 = document.querySelector('.lista-history');
console.log(generosa10)
for(let i=0; i<info10.length; i++){
    generosa10.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info10[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info10[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Horror
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27')
.then(function(data){
    return data.json()
})
.then(function(generos11){
    console.log(generos11); 
    let info11 = generos11.results
let generosa11 = document.querySelector('.lista-horror');
console.log(generosa11)
for(let i=0; i<info11.length; i++){
    generosa11.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info11[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info11[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Music
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10402')
.then(function(data){
    return data.json()
})
.then(function(generos12){
    console.log(generos12); 
    let info12 = generos12.results
let generosa12 = document.querySelector('.lista-music');
console.log(generosa12)
for(let i=0; i<info12.length; i++){
    generosa12.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info12[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info12[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Mystery
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648')
.then(function(data){
    return data.json()
})
.then(function(generos13){
    console.log(generos13); 
    let info13 = generos13.results
let generosa13 = document.querySelector('.lista-mystery');
console.log(generosa13)
for(let i=0; i<info13.length; i++){
    generosa13.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info13[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info13[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Romance
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749')
.then(function(data){
    return data.json()
})
.then(function(generos14){
    console.log(generos14); 
    let info14 = generos14.results
let generosa14 = document.querySelector('.lista-romance');
console.log(generosa14)
for(let i=0; i<info14.length; i++){
    generosa14.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info14[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info14[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Science Fiction
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878')
.then(function(data){
    return data.json()
})
.then(function(generos15){
    console.log(generos15); 
    let info15 = generos15.results
let generosa15 = document.querySelector('.lista-science-fiction');
console.log(generosa15)
for(let i=0; i<info15.length; i++){
    generosa15.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info15[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info15[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de TV Movie
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770')
.then(function(data){
    return data.json()
})
.then(function(generos16){
    console.log(generos16); 
    let info16 = generos16.results
let generosa16 = document.querySelector('.lista-tv-movie');
console.log(generosa16)
for(let i=0; i<info16.length; i++){
    generosa16.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info16[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info16[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Thriller
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53')
.then(function(data){
    return data.json()
})
.then(function(generos17){
    console.log(generos17); 
    let info17 = generos17.results
let generosa17 = document.querySelector('.lista-thriller');
console.log(generosa17)
for(let i=0; i<info17.length; i++){
    generosa17.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info17[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info17[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de War
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752')
.then(function(data){
    return data.json()
})
.then(function(generos17){
    console.log(generos17); 
    let info17 = generos17.results
let generosa17 = document.querySelector('.lista-war');
console.log(generosa17)
for(let i=0; i<info17.length; i++){
    generosa17.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info18[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info17[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})

// tira de Western
fetch('https://api.themoviedb.org/3/discover/movie?api_key=3801289076602860794bddb717c8f4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37')
.then(function(data){
    return data.json()
})
.then(function(generos18){
    console.log(generos18); 
    let info18 = generos18.results
let generosa18 = document.querySelector('.lista-western');
console.log(generosa18)
for(let i=0; i<info18.length; i++){
    generosa18.innerHTML +=` 
<li class="item">
    <a href="../detalle/movieDetail.html?id=${info19[i].id}"> <img class="img-ambos" src="https://image.tmdb.org/t/p/w500/${info18[i].poster_path}" alt="el hater">
</li>
`
}
})
.catch(function(error){
    console.log(error);
})



// fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3801289076602860794bddb717c8f4f5&language=en-US')
// .then(function(respuestas){
//     return respuestas.json()
// })
// .then(function(data){
//     console.log(data);
//     let info = data.genres
//     // capturar nombre y id
//     let generos = document.querySelector('.dgeneros');
//     console.log(generos)
//     for(let i=0; i<info.length; i++){
//         generos.innerHTML +=`
//         <div class="separadores"><h2 class="titulo">${info[i].name}${info[i].id}</h2></div>
//         <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
        
//             <ul class=" lista-peliculas uk-slider-items ">
//             </ul>
//             <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
//             <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        
        
//         </div>`

//     }
// })
// .catch(function(error){
//     console.log(error);
// })




// <div class="separadores"><h2 class="titulofuturo"></h2>${info[i].name}</div>
// <section class="contenidos">
// <article class="card-wrapper">
//     <div class="img-contenido">
//         <h5 class="card-title"> ${info[i].id}</h5>
//         <a href="../detalle/movieDetail.html"><img class="img-ambos" src="img/presenciadelmal.jpeg" alt="presenciadelmal"></a>
//     </div>
// </article>
// </section>
