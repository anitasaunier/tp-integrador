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