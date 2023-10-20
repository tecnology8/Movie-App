let movieName = document.getElementById("movie-name");
let searchButton = document.getElementById("search-button");
let result = document.getElementById("result");

let getMovie = () =>{
    let movie = movieName.value;
    
    let key = "Your API KEY";
    let url = `http://www.omdbapi.com/?t=${movie}&apikey=${key}`;

    if(movieName.length <= 0){
       console.log(movieName.length);
        result.innerHTML = `<h2 class="message">Enter a Movie Name </h2>`;
    }else {
        fetch(url).then((response) => response.json()).then((data) =>{
            if(data.Response == "True") {
                result.innerHTML = `
                <div class="info">
                    <img src=${data.Poster} class="poster">
                    <div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                            <img src="star-icon.svg">
                            <h4>${data.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").join("</div><div>")}</div>
                        </div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                <h3>Director:</h3>
                <p>${data.Director}</p>
                <h3>Writer:</h3>
                <p>${data.Writer}</p>
             `; 

            }else { 
                result.innerHTML = `<h3 class="message">${data.Error}</h3>`;
            }
        })
        .catch(() => {
            result.innerHTML = `<h2 class="message">Error<h2>`;
        });
    }
};

searchButton.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);