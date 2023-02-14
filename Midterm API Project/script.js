const API_KEY = 'a1da3b13110340ab19ccd74bee7d1bf9'

const generateUI = array => {
  let container = document.getElementById('container-movies')
  container.innerHTML = ''
  array.forEach(({ poster_path, title }) => {
    let movieImg = document.createElement('img')
    let movieTitle = document.createElement('h2')
    let movieContainer = document.createElement('div')

    movieImg.src = 'https://image.tmdb.org/t/p/w200' + poster_path
    movieTitle.textContent = `${title}`
    movieTitle.className = 'movie-container'

    movieContainer.appendChild(movieImg)
    movieContainer.appendChild(movieTitle)

    container.appendChild(movieContainer)
  })
}

const getPopularMovies = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  )
  const finalData = await data.json()
  console.log(finalData)
  generateUI(finalData.results)
}

getPopularMovies()

async function searchMovie() {
  const searchInput = document.getElementById('search-input')

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInput.value}&page=1&include_adult=false`
  )
  const data = await response.json()
  generateUI(data.results)
}

async function applyGenreFilter(genreId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_watch_monetization_types=flatrate`
  )
  const data = await response.json()
  console.log(data)
  generateUI(data.results)
}
