// Obtener elementos del DOM
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const resultsSection = document.querySelector('#results-section');

// Lista de películas
const movies = [
	{
		title: 'The Swarm (2024)',
		image: 'https://ia903404.us.archive.org/32/items/bHsXjvIehwPpEwUhxlMFdvWyZVf/__ia_thumb.jpg',
		link: 'The Swarm (2024).html',
	},
	{
		title: 'Amenaza en el aire(2025)',
		image: 'https://ia600409.us.archive.org/24/items/xnsxsms/__ia_thumb.jpg',
		link: 'Amenaza en el aire (2025).html',
	},
	{
		title: 'The Liberation Men',
		image: 'https://ia600108.us.archive.org/16/items/jkjefjen/__ia_thumb.jpg',
		link: 'The Liberation Men (2024).html',
	},
	// Agrega más objetos de películas aquí...
	{
		title: 'Homestead',
		image: 'https://ia600807.us.archive.org/10/items/jxsxkjsj/__ia_thumb.jpg',
		link: 'Homestead (2024).html',
	},


	{
		title: 'El Robo Perfecto: Pantera',
		image: 'https://via.placeholder.com/200x300.png?text=Movie+2',
		link: 'El Robo Perfecto Pantera.html',
	},

	{   
		title: 'All the Lost Ones  Todos los perdidos',
		image: 'https://ia902303.us.archive.org/7/items/fbdfbd/__ia_thumb.jpg',
		link: 'All the Lost Ones.html',
	},
	{
		title: 'El Robo Perfecto: Pantera',
		image: 'https://via.placeholder.com/200x300.png?text=Movie+2',
		link: 'El Robo Perfecto Pantera.html',
	},




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
