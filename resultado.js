let queryString = window.location.search;
console.log(queryString);

let queryObject = new URLSearchParams(queryString);
console.log(queryString)
let search = queryObject.get('search');
console.log(id);

let apiKey = "3801289076602860794bddb717c8f4f5"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`


fetch(url)

.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    
    console.log(data);
    
        
    }
)

.catch(function(error){
    console.log(error);
} )
