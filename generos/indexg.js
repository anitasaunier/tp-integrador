




fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3801289076602860794bddb717c8f4f5&language=en-US')
.then(function(respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let info = data.genres
    // capturar nombre y id
    let generos = document.querySelector('.dgeneros');
    console.log(generos)
    for(let i=0; i<info.length; i++){
        generos.innerHTML +=`
        <div class="separadores"><h2 class="titulo">${info[i].name}</h2></div>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>
        
            <ul class=" lista-peliculas uk-slider-items ">
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        
        
        </div>`

    }
})
.catch(function(error){
    console.log(error);
})
// <div class="separadores"><h2 class="titulofuturo"></h2>${info[i].name}</div>
// <section class="contenidos">
// <article class="card-wrapper">
//     <div class="img-contenido">
//         <h5 class="card-title"> ${info[i].id}</h5>
//         <a href="../detalle/movieDetail.html"><img class="img-ambos" src="img/presenciadelmal.jpeg" alt="presenciadelmal"></a>
//     </div>
// </article>
// </section>
