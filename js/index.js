fetch('https://api.themoviedb.org/3/movie/550?api_key=3801289076602860794bddb717c8f4f5')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log('El error fue: ' + error)
})


let suspenso = document.querySelector('.suspenso')
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3801289076602860794bddb717c8f4f5&language=en-US')
.then(function(response){
    return response.json();
})
.then(function(resultado){ 
    console.log(resultado);
    let suspensos = '';
    for (let i=0; i<resultado.data; i++){
        const element = resultado.data[i];
        suspensos += `<article>
        <h2>${response}</h2>
        </article>` ;
    }
    console.log(suspenso)
    suspenso.innerHTML = suspensos

})
.catch(error => console.log(error))
