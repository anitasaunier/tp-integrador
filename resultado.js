window.addEventListener(`load`, function(){
    let queryString = location.search
    let datoURL = new URLSearchParams(queryString);
    let query = datoURL.get('busqueda');

fetch(``)
