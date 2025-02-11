// Obtener elementos del DOM
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const resultsSection = document.querySelector('#results-section');

// Lista de películas
const movies = [
	{
		title: 'The Swarm (2024)',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/d1/f4e85c7512080610390cc831241e3d.jpg?5',
		link: 'The Swarm (2024).html',
	},
	{
		title: 'Amenaza en el aire (2025)',
		image: 'https://ia600409.us.archive.org/24/items/xnsxsms/__ia_thumb.jpg',
		link: 'Amenaza en el aire (2025).html',
	},
	{
		title: 'The Liberation Men',
		image: 'https://ia600108.us.archive.org/16/items/jkjefjen/__ia_thumb.jpg',
		link: 'The Liberation Men (2024).html',
	},
	{
		title: 'Homestead',
		image: 'https://ia600807.us.archive.org/10/items/jxsxkjsj/__ia_thumb.jpg',
		link: 'Homestead (2024).html',
	},
	{
		title: 'Dirty Angels',
		image: 'https://ia600608.us.archive.org/26/items/vdfdgfdh/__ia_thumb.jpg',
		link: 'Dirty Angels (2024).html',
	},
	{
		title: 'El Robo Perfecto: Pantera',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/bd/b9897416095da38d3c908aa0a8f74d.jpg?5',
		link: 'El Robo Perfecto Pantera.html',
	},
	{
		title: 'All the Lost Ones',
		image: 'https://ia902303.us.archive.org/7/items/fbdfbd/__ia_thumb.jpg',
		link: 'All the Lost Ones.html',
	},
	{
		title: 'Watchmen: Capítulo 2',
		image: 'https://ia600606.us.archive.org/25/items/fbxfb/__ia_thumb.jpg',
		link: 'Watchmen Capítulo 2.html',
	},
	{
		title: 'Hombres lobo',
		image: 'https://ia903402.us.archive.org/22/items/cvxvx/__ia_thumb.jpg',
		link: 'Hombre lobo (2024).html',
	},
	{
		title: 'Capitán América: Brave New World',
		image: 'https://ia902205.us.archive.org/23/items/jdckjsd/__ia_thumb.jpg',
		link: 'Capitán América Brave New World (2024).html',
	},
	{
		title: 'Este amor sí que duele',
		image: 'https://ia600607.us.archive.org/1/items/szmsd/__ia_thumb.jpg',
		link: 'Este amor sí que duele.html',
	},
	{
		title: 'Policán',
		image: 'https://ia600606.us.archive.org/16/items/dbcjd/__ia_thumb.jpg',
		link: 'Policán.html',
	},
	{
		title: 'Mickey 17',
		image: 'https://ia600809.us.archive.org/18/items/ncdnks/__ia_thumb.jpg',
		link: 'Mickey 17.html',
	},
	{
		title: '6 Hours Away',
		image: 'https://ia600409.us.archive.org/21/items/fjekw/__ia_thumb.jpg',
		link: '6 Hours Away.html',
	},
	{
		title: 'Absolución',
		image: 'https://ia902304.us.archive.org/22/items/jfiek/__ia_thumb.jpg',
		link: 'Absolución.html',
	},
	{
		title: 'Misión: Imposible-Sentencia Mortal parte 1',
		image: 'https://ia600806.us.archive.org/10/items/hdjs_20250125/__ia_thumb.jpg',
		link: 'Misión Imposible  Sentencia Mortal Parte Uno.html',
	},
	{
		title: 'Jurassic World: Dominion',
		image: 'https://ia600409.us.archive.org/21/items/fhwifj/__ia_thumb.jpg',
		link: 'Jurassic World Dominion.html',
	},
	{
		title: 'Rápido y Furioso 9',
		image: 'https://ia902303.us.archive.org/30/items/rjerl/__ia_thumb.jpg',
		link: 'Rápido y Furioso 9.html',
	},
	{
		title: 'Guardianes de la Galaxia Volumen 3',
		image: 'https://ia902202.us.archive.org/1/items/hdjsd/__ia_thumb.jpg',
		link: 'Guardianes de la Galaxia volumen 3.html',
	},
	{
		title: 'The Burden of Nine Lives',
		image: 'https://ia904600.us.archive.org/26/items/fjekgh/__ia_thumb.jpg',
		link: 'La carga de nueve vidas.html',
	},
	{
		title: 'Mordedura silenciosa',
		image: 'https://ia902304.us.archive.org/11/items/fjrkd/__ia_thumb.jpg',
		link: 'Silent Bite.html',
	},
	{
		title: 'Ex asesino',
		image: 'https://ia902303.us.archive.org/9/items/jfdkfjd/__ia_thumb.jpg',
		link: 'Ex asesino.html',
	},
	{
		title: '72 horas',
		image: 'https://ia600608.us.archive.org/17/items/sdfjdsjdh/__ia_thumb.jpg',
		link: '72 horas.html',
	},
	{
		title: 'Objetivo Secreto',
		image: 'https://ia600809.us.archive.org/6/items/hsjahsj/__ia_thumb.jpg',
		link: 'Red clasificada.html',
	},
	{
		title: 'Operación Cacería de Sangre',
		image: 'https://ia600108.us.archive.org/16/items/djsdjd/__ia_thumb.jpg',
		link: 'Operación Cacería de Sangre.html',
	},
	{
		title: 'Inkabi',
		image: 'https://ia600108.us.archive.org/29/items/fgthhtyj/__ia_thumb.jpg',
		link: 'Inkabi.html',
	},
	{
		title: 'Fuerzas Altas',
		image: 'https://ia800609.us.archive.org/15/items/fvfbfgj/__ia_thumb.jpg',
		link: 'High Forces.html',
	},
	{
		title: 'Criaturas: Línea de Extinción',
		image: 'https://ia600607.us.archive.org/3/items/dfvffvyhn/__ia_thumb.jpg',
		link: 'Criaturas Línea de extinción.html',
	},
	{
		title: 'Luna Gitana (2024)',
		image: 'https://ia600104.us.archive.org/12/items/cvxcvxcgr/__ia_thumb.jpg',
		link: 'Gypsy Moon.html',
	},
	{
		title: 'Cómo hacer un hombre lobo',
		image: 'https://ia600808.us.archive.org/6/items/fgdffgtkm/__ia_thumb.jpg',
		link: 'Cómo hacer un hombre lobo.html',
	},
	{
		title: 'Pantera Negra',
		image: 'https://ia904601.us.archive.org/9/items/fjrkfjrk/__ia_thumb.jpg',
		link: 'Pantera Negra (2018).html',
	},
	{
		title: 'Pantera Negra: Wakanda por Siempre',
		image: 'https://ia903409.us.archive.org/2/items/dcwuiudif/__ia_thumb.jpg',
		link: 'Black Panther Wakanda para siempre (2022).html',
	},
	{
		title: 'Fast & Furious X',
		image: 'https://ia600108.us.archive.org/21/items/euiwefhui/__ia_thumb.jpg',
		link: 'Rápido y Furioso X.html',
	},
	{
		title: 'Bumblebee',
		image: 'https://ia600702.us.archive.org/4/items/fjkejrfhur/__ia_thumb.jpg',
		link: 'Bumblebee (2018).html',
	},
	{
		title: 'Transformers: El lado oscuro de la luna',
		image: 'https://ia902200.us.archive.org/7/items/fjerkrfope/__ia_thumb.jpg',
		link: 'Transformers el lado oscuro de la luna.html',
	},
	{
		title: 'Transformers: La venganza de los caídos',
		image: 'https://ia904601.us.archive.org/3/items/dhjdhiu/__ia_thumb.jpg',
		link: 'Transformers la venganza de los caídos.html',
	},
	{
		title: 'Transformers 5: El Último Caballero',
		image: 'https://ia904600.us.archive.org/34/items/sgnytyu/__ia_thumb.jpg',
		link: 'Transformers 5 El Ultimo Caballero.html',
	},
	{
		title: 'Transformers 4: La Era de la Extinción',
		image: 'https://ia600609.us.archive.org/9/items/fhjukuykukybd/__ia_thumb.jpg',
		link: 'Transformers 4 La Era de la Extinción.html',
	},
	{
		title: 'Transformers',
		image: 'https://ia902304.us.archive.org/19/items/trtjmoiumgy/__ia_thumb.jpg',
		link: 'Transformers.html',
	},
	{
		title: 'El Escuadrón Suicida',
		image: 'https://ia600109.us.archive.org/31/items/hghgmiuo/__ia_thumb.jpg',
		link: 'El Escuadrón Suicida.html',
	},
	{
		title: 'Moana 2',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/27/f1649ba99405e5da9bd6a9aa1f6a65.jpg?5',
		link: 'Moana 2.html',
	  },
	  {
		title: 'El Señor de los Anillos: La Guerra de los Rohirrim',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/f9/78b7b05bd0958c2a14e563965b45a8.jpg?5',
		link: 'El Señor de los Anillos La Guerra de los Rohirrim.html',
	  },
	  {
		title: 'Los exploradores',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/83/7ebfe80c68c952061beb1f974d7b39.jpg?5',
		link: 'Los exploradores.html',
	  },
	  {
		title: 'Anzu, gato fantasma',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/bc/667a604cc6d0be45f9ec8e81650f17.jpg?5',
		link: 'Anzu, gato fantasma.html',
	  },
	  {
		title: 'Elemental',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/2b/26228755a68256286b34f6836a9b64.jpg?5',
		link: 'Elemental.html',
	  },
	  {
		title: 'Lightyear',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/95/c82a1b5235610a4e3f6a961bbcd366.jpg?5',
		link: 'Lightyear.html',
	  },
	  {
		title: 'Mi villano favorito 4',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/9d/6eb70a7fefde4a437c713087937b52.jpg?5',
		link: 'Mi villano favorito 4.html',
	  },
	  {
		title: 'Transformers Uno',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/f4/1974f379a6539d4d87b31c30e14505.jpg?5',
		link: 'Transformers Uno.html',
	  },
	  {
		title: 'Watchmen: Capítulo 1',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/c0/c8574d925b9cea4fd51add18bd585a.jpg?5',
		link: 'Watchmen Capítulo 1.html',
	  },
	  {
		title: 'Memorias de un caracol',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/9a/c9fc9e683c58b542a52f1601f5b517.jpg?5',
		link: 'Memorias de un caracol.html',
	  },
	  {
		title: '200% Lobo',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/5e/e3a877d3f8a6dcc0db2132a08c4743.jpg?5',
		link: '200 Wolf.html',
	  },
	  {
		title: 'Robot salvaje',
		image: 'https://gnula.legal/uploads/mini/multi-poster/53/6f901c2e5b18926c667eead31d6901.jpg?5',
		link: 'Robot salvaje.html',
	  },
	  {
		title: 'Al diablo le puede importar',
		image: 'https://gnula.legal/uploads/mini/multi-poster/c0/1e7b9a4e3b42f25308bafab1812d19.jpg?5',
		link: 'Devil May Care.html',
	  },
	  {
		title: 'La Leyenda Del Dragón',
		image: 'https://gnula.legal/uploads/mini/multi-poster/96/2b5afbdceda90e83d64bbba2364f81.jpg?5',
		link: 'La Leyenda Del Dragón.html',
	  },
	  {
		title: 'El Aprendiz del Tigre',
		image: 'https://gnula.legal/uploads/mini/multi-poster/4f/4bf1b7a9375442ed2f5105f7cddbf3.jpg?5',
		link: 'El aprendiz del tigre.html',
	  },
	  {
		title: 'Orión y la Oscuridad',
		image: 'https://gnula.legal/uploads/mini/multi-poster/10/8c3e5d7e250113d8928a8a741e9267.jpg?5',
		link: 'Orión y la oscuridad.html',
	  },
	  {
		title: 'Shaun el cordero',
		image: 'https://gnula.legal/uploads/mini/multi-poster/d9/520787f081f78a6ff43fa0272e0b83.jpg?5',
		link: 'Shaun el cordero.html',
	  },
	  {
		title: 'Las cuatro almas del coyote',
		image: 'https://gnula.legal/uploads/mini/multi-poster/1a/865559a04b968c447fddf1be4f6994.jpg?5',
		link: 'Las cuatro almas del coyote.html',
	  },
	  {
		title: 'Up: Una aventura de altura',
		image: 'https://ia903400.us.archive.org/32/items/hdsjdise/__ia_thumb.jpg',
		link: 'Up Una aventura de altura.html',
	  },
	  {
		title: 'Buscando a Nemo',
		image: 'https://ia600608.us.archive.org/33/items/jkjfkfje/__ia_thumb.jpg',
		link: 'Buscando a Nemo.html',
	  },
	  {
		title: 'Monsters, Inc.',
		image: 'https://ia600605.us.archive.org/21/items/dhewjejdbw/__ia_thumb.jpg',
		link: 'Monsters, Inc.html',
	  },
	  {
		title: 'El Gato con Botas: El último deseo',
		image: 'https://gnula.legal/uploads/mini/multi-poster/dd/53a4f0e15cb456ca2c78d298625955.jpg?5',
		link: 'El Gato con Botas El último deseo.html',
	  },
	  {
		title: 'Shrek',
		image: 'https://ia903403.us.archive.org/7/items/dewkjefiw/__ia_thumb.jpg',
		link: 'Shrek.html',
	  },
	  {
		title: 'Shrek 2',
		image: 'https://ia600109.us.archive.org/8/items/fgffgdfh/__ia_thumb.jpg',
		link: 'Shrek 2.html',
	  },
	  {
		title: 'Shrek the Third (Shrek 3)',
		image: 'https://ia903204.us.archive.org/8/items/ftrjuki/__ia_thumb.jpg',
		link: 'Shrek Tercero.html',
	  },
	  {
		title: 'Shrek 4: Para Siempre',
		image: 'https://ia800807.us.archive.org/35/items/frgtykiki/__ia_thumb.jpg',
		link: 'Shrek 4 Para Siempre.html',
	  },
	  {
		title: 'Los Increibles',
		image: 'https://ia600605.us.archive.org/6/items/fggjykuk/__ia_thumb.jpg',
		link: 'Los Increibles.html',
	  },
	  {
		title: 'Los Increíbles 2',
		image: 'https://ia902306.us.archive.org/35/items/dfgnjy/__ia_thumb.jpg',
		link: 'Los Increíbles 2.html',
	  },
	  {
		title: 'La era de hielo',
		image: 'https://ia601501.us.archive.org/19/items/hfewebw/__ia_thumb.jpg',
		link: 'La era de hielo.html',
	  },
	  {
		title: 'Rango (2011)',
		image: 'https://ia600607.us.archive.org/35/items/ehfwjhfwi/__ia_thumb.jpg',
		link: 'Rango (2011).html',
	  },
	  {
		title: 'Sing: ¡Ven y canta!',
		image: 'https://ia800407.us.archive.org/13/items/sdkfjskdj/__ia_thumb.jpg',
		link: 'Sing ¡Ven y canta!.html',
	  },
	  {
		title: 'Sing 2: ¡Ven y canta de nuevo!',
		image: 'https://ia600108.us.archive.org/11/items/hdsjdfis/__ia_thumb.jpg',
		link: 'sing 2.html',
	  },
	  {
		title: 'Sonic 3 - La película',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/ca/a94f0d7a91dc2ec20decee7e43d687.jpg?5',
		link: 'Sonic 3.html',
	  },
	  {
		title: 'Utopía',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/b3/26cdaf6fa03f9b4c4156d8e8f18379.jpg?5',
		link: 'Utopia.html',
	  },
	  {
		title: 'Planeta B',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/c7/37c686961ffe961eff0339d44240e3.jpg?5',
		link: 'Planet B.html',
	  },
	  {
		title: 'Posada Atrapada',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/be/89d9100ff48b8111dcede4eedbff38.jpg?5',
		link: 'Trapped Inn.html',
	  },
	  {
		title: 'Venom: El último baile',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/50/0895c79a5dad9f5e2a46a86eca381f.jpg?5',
		link: 'Venom El último baile.html',
	  },
	  {
		title: 'Black Widow',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/b0/2fd0bc4d0fc85b8e8a8d689b4e48a2.jpg?5',
		link: 'Black Widow.html',
	  },
	  {
		title: 'Año 2000',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/ba/aa3b59741d8e8c0cfb14eebd7e5b8d.jpg?5',
		link: 'Y2K.html',
	  },
	  {
		title: 'Pozo de Abadón',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/d2/eb5ebfcb5c1e97378daae515c55a47.jpg?5',
		link: 'Abaddon\'s Pit.html',
	  },
	  {
		title: 'Año 10',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/09/276289cd8023920c190a16f87f81bb.jpg?5',
		link: 'Year 10.html',
	  },
	  {
		title: 'Dune',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/c0/a935b4abf5cc8dfcc83c49e1e28bc7.jpg?5',
		link: 'Dune.html',
	  },
	  {
		title: 'Dune 2',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/8e/04b5151e6ef95cdb5fb6dd43fe1e92.jpg?5',
		link: 'Dune 2.html',
	  },
	  {
		title: 'Anora',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/bb/b99fecb3d335894d3c3eb78cc515ca.jpg?5',
		link: 'Anora.html',
	  },
	  {
		title: 'De pie sobre los hombros de los gatitos: la historia de Bubbles y los Shitrockers',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/d2/ac96e8fc0e172a554e031e885ae167.jpg?5',
		link: 'Standing on the Shoulders of Kitties.html',
	  },
	  {
		title: 'Cómo hacer una matanza',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/a2/753590d287ecd508941e05a546f3e4.jpg?5',
		link: 'How to Make a Killing.html',
	  },
	  {
		title: 'Alrededor',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/2b/29b97f6062c2ea1e23d7ad4bcbed67.jpg?5',
		link: 'Runt.html',
	  },
	  {
		title: 'El fantasma de la luna regresa',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/9f/7cca936a80d595d1c972e1242b81f4.jpg?5',
		link: 'Moon Ghost Returns.html',
	  },
	  {
		title: 'Omni Loop',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/c1/cdabf4c14d0ff3357ee11b0f084e50.jpg?5',
		link: 'Omni Loop.html',
	  },
	  {
		title: 'Código: Traje rojo',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/2a/4c26854702b8d4e51591563f0ad33f.jpg?5',
		link: 'Código Traje rojo.html',
	  },
	  {
		title: 'Plan Panda',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/f6/8e3ee2fc127a0a85e253104073474d.jpg?5',
		link: 'Panda Plan.html',
	  },
	  {
		title: 'Los Balconettes',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/cf/e1cb002e0f6789b980f0171fe38fb0.jpg?5',
		link: 'The Balconettes.html',
	  },
	  {
		title: 'No sin mi psiquiatra',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/c6/1eb6ce8696b26fed165eed06eedc98.jpg?5',
		link: 'Algo le pasa a mi yerno.html',
	  },
	  {
		title: 'Hemet, o la casera no bebe té',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/23/e6876bf650d5059e49dcfcc9d14576.jpg?5',
		link: 'Hemet, o la casera no bebe té.html',
	  },
	  {
		title: 'Canina | Nightbitch',
		image: 'https://ia600107.us.archive.org/24/items/jewfkwjew/__ia_thumb.jpg',
		link: 'Canina (2024).html',
	  },
	  {
		title: 'Un hombre diferente | A Different Man',
		image: 'https://ia803401.us.archive.org/34/items/hsxajsaj/__ia_thumb.jpg',
		link: 'Un hombre diferente (2024).html',
	  },
	  {
		title: 'De vuelta a la acción',
		image: 'https://ia600607.us.archive.org/1/items/fjewkje/__ia_thumb.jpg',
		link: 'De vuelta a la acción (2025).html',
	  },
	  {
		title: 'El Maravilloso Mago de Oz: Parte 1',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/1c/67ea54449a8397568c8c09672e0787.jpg?5',
		link: 'El Maravilloso Mago de Oz Parte 1.html',
	  },
	  {
		title: 'Isla de Invierno',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/d1/04289a86f091f535b61d7803372f41.jpg?5',
		link: 'Winter Island.html',
	  },
	  {
		title: 'El Fuego Interior',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/80/956d6b877acd0acdf644fa4d83f13a.jpg?5',
		link: 'The Fire Inside.html',
	  },
	  {
		title: 'Oh, Canada',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/42/03d8b09bd3a8aa9bc6d423bcfc949e.jpg?5',
		link: 'Oh, Canada.html',
	  },
	  {
		title: 'La última corista',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/66/205fc250e6f2c7431787ac3b5a844c.jpg?5',
		link: 'The Last Showgirl.html',
	  },
	  {
		title: 'Esta soy yo…ahora',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/9b/630aacac1d73e51ba45ad143a916cf.jpg?5',
		link: 'This Is Me…Now.html',
	  },
	  {
		title: 'Hay un nuevo asesino en la ciudad',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/76/150c8ee6305e2d486b056d82877537.jpg?5',
		link: 'Hay un nuevo asesino en la ciudad.html',
	  },
	  {
		title: 'La habitación de al lado',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/53/276de9755a411ad622cc2fb679cf90.jpg?5',
		link: 'La habitación de al lado.html',
	  },
	  {
		title: 'Queer',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/8b/ea8c1608b1402f04d621e303ecd996.jpg?5',
		link: 'Queer.html',
	  },
	  {
		title: 'El recuerdo en mi corazón',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/52/d4285cc5c36e142acce9b3bb0571b5.jpg?5',
		link: 'El recuerdo en mi corazón.html',
	  },
	  {
		title: 'Septiembre 5',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/b4/7b122f0817e5616e11bf43c05a077d.jpg?5',
		link: 'Septiembre 5.html',
	  },
	  {
		title: 'El brutalista',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/bb/4bfebeb121e08e77f701fdc151d861.jpg?5',
		link: 'The Brutalist.html',
	  },
	  {
		title: 'Parthenope',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/5d/73f015f6889569c4edc2ac8ef4a371.jpg?5',
		link: 'Parthenope.html',
	  },
	  {
		title: 'Culpa tuya',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/40/46e7d4a88b76628996078f8859c785.jpg?5',
		link: 'Culpa tuya.html',
	  },
	  {
		title: 'Romper el círculo',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/ff/3484a5b6f010ade01f5953db5514d9.jpg?5',
		link: 'Romper el círculo.html',
	  },
	  {
		title: 'Una maniobra arriesgada',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/47/3e4d99e40f36bb58269c1d7c7729e2.jpg?5',
		link: 'Una maniobra arriesgada.html',
	  },
	  {
		title: 'Sangre, Playa, Traición',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/90/96a2efd78660ef95a2a2f011f67ef4.jpg?5',
		link: 'Sangre, Playa, Traición.html',
	  },
	  {
		title: 'Corazón embrujado',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/75/27cc5ebdbed2045aab42bd1528d428.jpg?5',
		link: 'Haunted Heart.html',
	  },
	  {
		title: 'La madre de la novia',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/40/581da1c723fb004a8d72f582903e49.jpg?5',
		link: 'La madre de la novia.html',
	  },
	  {
		title: 'Llego a mí',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/78/5b90f3502a3a6d7321dc7c3cd55fd8.jpg?5',
		link: 'Llego a mí.html',
	  },
	  {
		title: '21 Paraíso',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/30/594b327e3339f9d314ff915145189f.jpg?5',
		link: '21 paraíso.html',
	  },
	  {
		title: 'La versión persa',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/d9/615bcd8e408d1b41a4f85664705d6f.jpg?5',
		link: 'La versión persa.html',
	  },
	  {
		title: 'Mufasa: El rey león',
		image: 'https://ia600106.us.archive.org/23/items/jgroerigoo/__ia_thumb.jpg',
		link: 'Mufasa El rey león.html',
	  },
	  {
		title: 'Peter Pan: El infierno de Nunca Jamás',
		image: 'https://ia600808.us.archive.org/13/items/fjkejrrj/__ia_thumb.jpg',
		link: 'Peter Pan El infierno de Nunca Jamás.html',
	  },
	  {
		title: 'La ciudad sin Halloween',
		image: 'https://ia904609.us.archive.org/13/items/jfdrgoir/__ia_thumb.jpg',
		link: 'La ciudad sin Halloween.html',
	  },
	  {
		title: 'Nosferatu',
		image: 'https://ia600609.us.archive.org/32/items/djsjdvjdskjd_202501/__ia_thumb.jpg',
		link: 'Nosferatu.html',
	  },
	  {
		title: 'Escapar',
		image: 'https://ia600107.us.archive.org/3/items/hdnuyiioio/__ia_thumb.jpg',
		link: 'Escapar.html',
	  },
	  {
		title: 'El prodigio',
		image: 'https://ia600609.us.archive.org/15/items/fbdffdhjyjuku/__ia_thumb.jpg',
		link: 'El prodigio.html',
	  },
	  {
		title: 'Escupitajo',
		image: 'https://ia600808.us.archive.org/1/items/bfbfgnjgy/__ia_thumb.jpg',
		link: 'Spithood.html',
	  },
	  {
		title: 'Persona',
		image: 'https://ia903407.us.archive.org/32/items/hfrjvodrog/__ia_thumb.jpg',
		link: 'Persona.html',
	  },
	  {
		title: 'El hombre en la furgoneta blanca',
		image: 'https://ia600807.us.archive.org/7/items/fjrkejkrjeri/__ia_thumb.jpg',
		link: 'El hombre en la furgoneta blanca.html',
	  },
	  {
		title: 'Hombre lobo',
		image: 'https://ia904609.us.archive.org/20/items/cjjefeowioe/__ia_thumb.jpg',
		link: 'Hombre lobo (2025).html',
	  },
	  {
		title: 'Escuche atentamente',
		image: 'https://ia600805.us.archive.org/26/items/gjkrlekfrgjkr/__ia_thumb.jpg',
		link: 'Listen Carefully.html',
	  },
	  {
		title: 'La herencia',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/f3/3469a8f439a420297c6dc1664adaf3.jpg?5',
		link: 'La herencia.html',
	  },
	  {
		title: 'Aviso de muerte',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/19/0a421156d645da9d34d27bd7d24576.jpg?5',
		link: 'Sakaratul Maut.html',
	  },
	  {
		title: 'Vecinos que matan',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/e0/627b8b7177cfbd005f0b6125b7e38f.jpg?5',
		link: 'Neighbors Who Kill.html',
	  },
	  {
		title: 'Sonríe 2',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/d3/9f4cf10e3f1310902d3c34171a9f6b.jpg?5',
		link: 'Sonríe 2.html',
	  },
	  {
		title: '¿Ves lo que yo veo?',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/c8/e0b2f7ba3c2c3b68b06a7f8fc5170b.jpg?5',
		link: 'Do You See What I See.html',
	  },
	  {
		title: 'Carnicería para Navidad',
		image: 'https://www.gnula.legal/uploads/mini/multi-poster/74/31052411d3cd1851ed9d1d48075537.jpg?5',
		link: 'Carnage for Christmas.html',
	  },
	  {
		title: 'Hauntología',
		image: 'https://www19.pelisplushd.to/poster/hauntology-thumb.jpg',
		link: 'Hauntología.html',
	  },
	  {
		title: 'Sala de Aislamiento',
		image: 'https://www19.pelisplushd.to/poster/isolation-ward-thumb.jpg',
		link: 'Sala de aislamiento.html',
	  },
	  {
		title: 'Chupones',
		image: 'https://www19.pelisplushd.to/poster/suckers-thumb.jpg',
		link: 'Chupones.html',
	  },
	  {
		title: 'Cementerio de Tiburones',
		image: 'https://ia801408.us.archive.org/11/items/dbwkjed/__ia_thumb.jpg',
		link: 'Tiburón de cementerio.html',
	  },
	  {
		title: 'Fantasmas de Red Ridge',
		image: 'https://gnula.legal/uploads/mini/multi-poster/5b/753b9025539392dced5bfbc5cd618c.jpg?5',
		link: 'Fantasmas de Red Ridge.html',
	  },
	  {
		title: 'Perdóname Padre',
		image: 'https://gnula.legal/uploads/mini/multi-poster/e3/c8ba3594fd9ccce7cf53e2fe01d161.jpg?5',
		link: 'Forgive Me Father.html',
	  },
	  {
		title: '¿Qué pasó en 625 River Road?',
		image: 'https://gnula.legal/uploads/mini/multi-poster/c6/efeaccb6454fbe22514322a5385a46.jpg?5',
		link: 'What Happened at 625 River Road .html',
	  },
	  {
		title: 'Correr',
		image: 'https://gnula.legal/uploads/mini/multi-poster/65/ced949775eb7b640fe8930c27f0167.jpg?5',
		link: 'Run.html',
	  },
	  {
		title: 'Castillo',
		image: 'https://gnula.legal/uploads/mini/multi-poster/44/bb1562c7c0c6c5e2cceb40aed0de1e.jpg?5',
		link: 'Chateau.html',
	  },
	  {
		title: 'El Juego del Calamar',
		image: 'https://ia600607.us.archive.org/26/items/jdewkejfwi/__ia_thumb.jpg',
		link: 'El Juego del Calamar.html',
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
