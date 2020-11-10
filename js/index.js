fetch('https://developers.themoviedb.org/')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log('El error fue: ' + error)
})