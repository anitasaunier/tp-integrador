 
fetch('https://api.themoviedb.org/3/movie/550?api_key=3801289076602860794bddb717c8f4f5')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    let item = document.querySelector('.item')
    console.log(item)
      
  let movie = ` <li class="item" >
  <a href="../detalle/movieDetail.html"><img class="img-ambos" src="img/elhoyo.jpeg" alt="elhoyo" ></a>
  <h2 class= "title">${data.title}</h2>
                </li>`
                
               
                
                
})
.catch(function(error){
    console.log('El error fue: ' + error)
})



  