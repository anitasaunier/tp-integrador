let queryString = window.location.search;
console.log(queryString);
let queryObject = new URLSearchParams(queryString)
let search = queryObject.get ('search');
console.log(search);


let apiKey = "3801289076602860794bddb717c8f4f5"
let url = `https://api.themoviedb.org/3/search/multi?api_key=3801289076602860794bddb717c8f4f5&language=en-US&query=${search}&page=1&include_adult=false`

let resultados = document.querySelector('.resultados')


fetch(url)
.then(datos=>datos.json() )
.then(respuesta=> {
    let spinner = document.querySelector ('.loader')
    spinner.getElementsByClassName.display = "none"
    console.log (respuesta) ;
    let results = ''
   
    
  })









fetch(url)
.then(function (respuestas){
    return respuestas.json()
})
.then(function(data){
    console.log(data);
    let info = data.results;
    if (info.length != 0){ 
    for (let i=0; i<info.length; i++){
        if(info[i].media_type == "tv"){
            /* resultados.innerHTML += `<li>Serie: ${info[i].original_name}</li>` */
            let resultados = document.querySelector(".resultados")
            resultados.innerHTML += `<li>
                                        <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                                            <img class= "img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                         </a>
                                    </li>`}
         else if (info[i].media_type == "movie"){
            /* resultados.innerHTML += `<li>Pelicula: ${info[i].title}</li>` */
            let resultados = document.querySelector(".resultados")
            resultados.innerHTML += `<li>
                                        <a href="detalle/movieDetail.html?id=${info[i].id}&media_type=${info[i].media_type}">
                                            <img class="img-resultado" src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="">
                                        </a>
                                    </li>`
        }
        
    }}
    else{
        let alertas = document.querySelector('h2');
        alertas.innerText = "There are no results for: " + search
    }
    
    
   
    
        
    


})
.catch(error => console.log(error))