




fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3801289076602860794bddb717c8f4f5&language=en-US')
.then(function(respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let info = data.genres
    // capturar nombre y id
    let generos = document.querySelector('.dgeneros');
    
    for(let i=0; i<info.length; i++){
        generos.innerHTML +=`
        <div class="separadores"><h2 class="titulofuturo"></h2>${info[i].name}</div>
        <section class="contenidos">
        <article class="card-wrapper">
            <div class="img-contenido">
                <h5 class="card-title"> ${info[i].id}</h5>
                <a href="../detalle/movieDetail.html"><img class="img-ambos" src="img/presenciadelmal.jpeg" alt="presenciadelmal"></a>
            </div>
        </article>
        </section>`

    }
})
.catch(function(error){
    console.log(error);
})

