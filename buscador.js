// Obtener elementos del DOM
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const resultsSection = document.querySelector('#results-section');

// Lista de películas
const movies = [
	{
		title: 'Ant Man and the Wasp Quantumania',
		image: 'Ant-Man.jpeg',
		link: 'Ant-Man.html',
	},
	{
		title: 'Regreso al Futuro',
		image: 'regreso_al_futuro.jpg',
		link: 'https://www.imdb.com/title/tt0088763/',
	},
	// Agrega más objetos de películas aquí...
];

// Función para buscar películas
function searchMovies(searchTerm) {
	const matchedMovies = movies.filter(movie => {
		const regex = new RegExp(searchTerm, 'gi');
		return movie.title.match(regex);
	});
	displayMovies(matchedMovies);
}

// Función para mostrar películas
function displayMovies(movies) {
	resultsSection.innerHTML = '';
	if (movies.length === 0) {
		resultsSection.innerHTML = '<p>No se encontraron películas</p>';
		return;
	}
	movies.forEach(movie => {
		const movieElement = document.createElement('div');
		movieElement.classList.add('movie');
		movieElement.innerHTML = `
			<a href="${movie.link}" target="_blank">
				<img src="${movie.image}" alt="${movie.title}">
				<p>${movie.title}</p>
			</a>
		`;
		resultsSection.appendChild(movieElement);
	});
}

// Evento para enviar el formulario de búsqueda
searchForm.addEventListener('submit', e => {
	e.preventDefault();
	const searchTerm = searchInput.value.trim();
	searchMovies(searchTerm);
});

// Evento para borrar resultados al limpiar el campo de búsqueda
searchInput.addEventListener('input', () => {
	if (searchInput.value === '') {
		resultsSection.innerHTML = '';
	}
});
