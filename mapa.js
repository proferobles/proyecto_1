// Inicializar el mapa con una vista central (setview) y un zoom (3)
var map = L.map('map').setView([-34.852121, -58.355234], 13, );
//Agregar mapa base de IGN
var ign_clasico = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="http://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2" target="_blank">Instituto Geográfico Nacional</a> + <a href="http://www.osm.org/copyright" target="_blank">OpenStreetMap</a>',
    minZoom: 10,
    maxZoom: 18,
   });


var esri_sat = L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="https://www.google.com/maps" target="_blank">www.google.com/map</a>',
    minZoom: 3,
    maxZoom: 18
}).addTo(map); 

var google_trans = L.tileLayer('https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}', {
    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="https://www.google.com/maps" target="_blank">www.google.com/map</a>',
    minZoom: 3,
    maxZoom: 18
}); 

//Estilo de estaciones de trenes

function createCustomIcon (feature, latlng) {
	let myIcon = L.icon({
	  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1783/1783356.png',
	  iconSize:     [20, 20], // width and height of the image in pixels
	  shadowSize:   [35, 20], // width, height of optional shadow image
	  iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
	  shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
	  popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
	})
	return L.marker(latlng, { icon: myIcon })
  }
  
  // create an options object that specifies which function will called on each feature
  let myLayerOptions = {
	pointToLayer: createCustomIcon
  }

  var stylebike = {
	color: "#1C2833",
	weight: 3,
	opacity: 0.6,
	dashArray: '7, 7, 7'
	 };


  var stylebus = {
	color: "#5153FF",
	weight: 3,
	opacity: 0.6,
	dashArray: '7, 7, 7'
	  };

// ZOOM A MARCADOR
var xxy = function(e){
    var coord = e.latlng.toString().split(',');
    var lat = coord[0].split('(');
    var lng = coord[1].split(')');
    console.log("You clicked the map at latitude: " + lat[1] + " and longitude:" + lng[0]);
    map.flyTo([lat[1], lng[0]], 16, {animate: true,duration: 2 });}

var azul = L.icon
		({
		iconUrl: 'https://cdn-icons-png.flaticon.com/512/594/594580.png',
		shadowUrl: '',
		iconSize: [10, 10], //recomendado
		iconAnchor: [5, 10], //la itad e igual
		popupAnchor: [0, -10],
		//shadowSize: [50, 50] // igual a icono
		});




//Datos recorridos en bicicleta

var recorrido1 = L.geoJson(recorrido1, stylebike).bindPopup("Circuito ciclistico N°1");
var recorrido2 = L.geoJson(recorrido2, stylebike).bindPopup("Circuito ciclistico N°2");


//Datos colectivos
var cole1 = L.geoJson(cole1 ,stylebus).bindPopup("Recorrido 506 - Ramal 7");
var cole2 = L.geoJson(cole2,stylebus).bindPopup("Recorrido 501 - Ramal 1");
var cole3 = L.geoJson(cole3,stylebus).bindPopup("Recorrido 501 - Los Altos");
var cole4 = L.geoJson(cole4,stylebus).bindPopup("Recorrido 510");

//Granja Educativa Municipal
var granja = L.marker([-34.853855, -58.348877], {icon: azul})
    .bindPopup(" <strong>GRANJA EDUCATIVA MUNICIPAL<strong> " +"<br/>" 
    + "Contacto: granjaeducativamunicipal@brown.gob.ar"+"<br/>"
    + "Direccion: Av. Juan B. Justo 1000"+"<br/>"
    + "<img src= './imagenes/IMG1.jpg'/>"
    + "<A HREF='https://www.instagram.com/granjamunicipalbrown'> Mas info... </A>").on('click', xxy);

//var A = L.marker([-34.8376777,-58.36185080000001], {icon: azul},13).bindPopup("<strong>Parrilla La Quinta<strong>" + "<br/>" + "25 de Mayo 1208,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'A.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var B = L.marker([-34.8498868,-58.36030390000001], {icon: azul},13).bindPopup("<strong>La Tía Rosita<strong>" + "<br/>" + "Pedro de Irigoyen 800,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'B.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var C = L.marker([-34.8411399,-58.3689939], {icon: azul},13).bindPopup("<strong>El Navegante<strong>" + "<br/>" + "25 de Mayo 628,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'C.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var D = L.marker([-34.8810443,-58.3417675], {icon: azul},13).bindPopup("<strong>El Bar de Alberto<strong>" + "<br/>" + "Gumercindo Pereyra 3860,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'D.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
var tierra_frutos = L.marker([-34.845781,-58.331646], {icon: azul},13).bindPopup("<strong>Tierra y frutos<strong>" + "<br/>" + "Juan B Justo 2316,Ministro Rivadavia" + "<br/>" + "Contacto: 1165850087" + "<br/>" + " Email: hornerosabio@yahoo.com.ar" + "<br/>" + "<img src= 'E.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy).addTo(map);
var Mario = L.marker([-34.837869,-58.341797], {icon: azul},13).bindPopup("<strong>Granja Don Mario<strong>" + "<br/>" + "Laprida 2192,Ministro Rivadavia" + "<br/>" + "Contacto: 4279 0182 " + " Email: leandro_heevel@hotmail.com" + "<br/>" + "<br/>" + "<img src= 'F.jpg'/>" + "<A HREF='https://www.instagram.com/granjadonmario'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Medina = L.marker([-34.842964,-58.333378], {icon: azul},13).bindPopup("<strong>Los Medina<strong>" + "<br/>" + "Chivilcoy 2320,Ministro Rivadavia" + "<br/>" + "Contacto: 1123686982 " + " Email: luis.javier.medina@hotmail.com" + "<br/>" + "<br/>" + "<img src= 'G.jpg'/>" + "<A HREF='#'> Mas info... </A> " ).on('click', xxy).addTo(map);
//var H = L.marker([-34.8769304,-58.3452746], {icon: azul},13).bindPopup("<strong>13 de diciembre SPIGBA<strong>" + "<br/>" + "Gral. Brig. Manuel Calderón 1000,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'H.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var I  = L.marker([-34.8630116,-58.3581727], {icon: azul},13).bindPopup("<strong>Adeba<strong>" + "<br/>" + "Av República Argentina 7500,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'I .jpg'/>" + "<A HREF='FB: Nueva.Adeba'> Mas info... </A> " ).on('click', xxy);
//var J = L.marker([-34.8517337,-58.3328766], {icon: azul},13).bindPopup("<strong>Lo de Naimo<strong>" + "<br/>" + "Nuñez 3842,Ministro Rivadavia" + "<br/>" + "Contacto: 1165157164" + "<br/>" + "<img src= 'J.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var K = L.marker([-34.8765244,-58.3444457], {icon: azul},13).bindPopup("<strong>El Tucu<strong>" + "<br/>" + "Gral. Brig. Manuel Calderón 501,Ministro Rivadavia" + "<br/>" + "Contacto: 1138345857" + "<br/>" + "<img src= 'K.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var LK = L.marker([-34.8463908,-58.37491019999999], {icon: azul},13).bindPopup("<strong>Lo de Guille <strong>" + "<br/>" + "Carlos Sandoval 54,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'L.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var M = L.marker([-34.8459358,-58.35955740000001], {icon: azul},13).bindPopup("<strong>Vicky<strong>" + "<br/>" + "Teniente Félix Origone 975,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'M.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var N = L.marker([-34.8486155,-58.3713559], {icon: azul},13).bindPopup("<strong>Club Barrio Parque<strong>" + "<br/>" + "Almitante Irizar 168,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'N.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
var Changuitos = L.marker([-34.843393,-58.320977], {icon: azul},13).bindPopup("<strong>Los Changuitos<strong>" + "<br/>" + "Lezica 2065,Ministro Rivadavia" + "<br/>" + "Contacto: 1155281255" + "<br/>" + "<img src= 'O.jpg'/>" + "<A HREF='https://www.facebook.com/Changueando/'> Mas info... </A> " ).on('click', xxy).addTo(map);
//var P = L.marker([-34.8409004,-58.36821509999999], {icon: azul},13).bindPopup("<strong>Heladería Chevanne<strong>" + "<br/>" + "25 de mayo 700,Ministro Rivadavia" + "<br/>" + "Contacto: 15 6949-7525" + "<br/>" + "<img src= 'P.jpg'/>" + "<A HREF='www.chevanne.com.ar'> Mas info... </A> " ).on('click', xxy);
//var Q = L.marker([-34.8468485,-58.3759909], {icon: azul},13).bindPopup("<strong>Grido<strong>" + "<br/>" + "Avenida Espora 5082,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'Q.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var R = L.marker([-34.8412888,-58.36467109999999], {icon: azul},13).bindPopup("<strong>Donde quieras<strong>" + "<br/>" + "Fernando Lahille 198,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'R.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var S = L.marker([-34.8437455,-58.37428620000001], {icon: azul},13).bindPopup("<strong>Panaderia Las Violetas<strong>" + "<br/>" + "25 de mayo 298,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'S.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var T = L.marker([-34.8474559,-58.37439019999999], {icon: azul},13).bindPopup("<strong>Mari Lau<strong>" + "<br/>" + "Berazain 286,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'T.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var U = L.marker([-34.8414975,-58.36354249999999], {icon: azul},13).bindPopup("<strong>La esquina panchería<strong>" + "<br/>" + "Plaza Eva Perón,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'U.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
var airesdelsur = L.marker([-34.846589,-58.336754], {icon: azul},13).bindPopup("<strong>Parapentes Aires del Sur<strong>" + "<br/>" + "Juan B. Justo 2100,Ministro Rivadavia" + "<br/>" + "Contacto: 1166411558	1153748148 1155166387" + "<br/>" + "<img src= 'V.jpg'/>" + "<A HREF='https://www.instagram.com/parapente.airesdelsur/'> Mas info... </A> " ).on('click', xxy).addTo(map);
//var W = L.marker([-34.84846140000001,-58.3711003], {icon: azul},13).bindPopup("<strong>Fanny Tentaciones<strong>" + "<br/>" + "Virrey Cevallos 575,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'W.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var X = L.marker([-34.8792387,-58.34994919999999], {icon: azul},13).bindPopup("<strong>Don Patricio<strong>" + "<br/>" + "Gral. Brig. Manuel Calderón 61,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'X.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var Y = L.marker([-34.848429,-58.37282570000001], {icon: azul},13).bindPopup("<strong>La Nueva<strong>" + "<br/>" + "Mariano Saavedra 472,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'Y.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var Z = L.marker([-34.8537028,-58.36704649999999], {icon: azul},13).bindPopup("<strong>Pizzeria De Mario Y Claudia<strong>" + "<br/>" + "Virrey Ceballos 1202,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'Z.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var AA = L.marker([-34.8774835,-58.3459557], {icon: azul},13).bindPopup("<strong>Pizzeria Doña Maria<strong>" + "<br/>" + "Gral. Brig. Manuel Calderón 401,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AA.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var AB = L.marker([-34.8788548,-58.34947799999999], {icon: azul},13).bindPopup("<strong>Pizzeria El Toque<strong>" + "<br/>" + "Gral. Brig. Manuel Calderón 84,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AB.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var AC = L.marker([-34.8510855,-58.3724744], {icon: azul},13).bindPopup("<strong>Pizza Uru<strong>" + "<br/>" + "Tte. Félix Origone 24,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AC.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var AD = L.marker([-34.8314429,-58.3487988], {icon: azul},13).bindPopup("<strong>Quinta Setiembre<strong>" + "<br/>" + "Aconquija 1152,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AD.jpg'/>" + "<A HREF='www.eventossetiembre.com.ar'> Mas info... </A> " ).on('click', xxy);
var Selva = L.marker([-34.836571,-58.355524], {icon: azul},13).bindPopup("<strong>Selva Madre<strong>" + "<br/>" + "María A. de Lescano 221,Ministro Rivadavia" + "<br/>" + "Contacto: 011 1526756449  1162182559" + "<br/>" + "<img src= 'AE.jpg'/>" + "<A HREF='https://www.facebook.com/QuintaSelvaMadre/?locale=es_LA'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Robinson = L.marker([-34.839381,-58.319434], {icon: azul},13).bindPopup("<strong>Las Vueltas de Robinson<strong>" + "<br/>" + "Av. Juan B. Justo 3699-3773,Ministro Rivadavia" + "<br/>" + "Contacto: 011 2492-3030" + "<br/>" + "<img src= 'AF.jpg'/>" + "<A HREF='https://www.facebook.com/LasVueltasDeRobinson'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Loma = L.marker([-34.835387,-58.355437], {icon: azul},13).bindPopup("<strong>Quinta La Loma<strong>" + "<br/>" + "25 de Mayo 1547,Ministro Rivadavia" + "<br/>" + "Contacto: 1163751686 " + "<br/>" + " Email: evelynsol02@hotmail.com" + "<br/>"+ "<img src= 'AG.jpg'/>" + "<A HREF='https://www.facebook.com/EventosLaLomaQuinta'> Mas info... </A> " ).on('click', xxy).addTo(map);
//var AH = L.marker([-34.8401025,-58.35290680000001], {icon: azul},13).bindPopup("<strong>Quinta Los Naranjos<strong>" + "<br/>" + "María A. de Lescano 340,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AH.jpg'/>" + "<A HREF='FB: QuintaLosNaranjos'> Mas info... </A> " ).on('click', xxy);
//var AI = L.marker([-34.8399537,-58.3528455], {icon: azul},13).bindPopup("<strong>Quinta La Matera<strong>" + "<br/>" + "María A. de Lescano 328,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AI.jpg'/>" + "<A HREF='FB: lamateradelsur IG: casaquinta_lamatera'> Mas info... </A> " ).on('click', xxy);
var Mont = L.marker([-34.847995,-58.337644], {icon: azul},13).bindPopup("<strong>Mont Plaisir<strong>" + "<br/>" + "Juan B Justo 2000,Ministro Rivadavia" + "<br/>" + "Contacto: 1556968533" + "<br/>" + "<img src= 'AJ.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy).addTo(map);
var Facundo = L.marker([-34.846589,-58.336754], {icon: azul},13).bindPopup("<strong>Don Facundo<strong>" + "<br/>" + "Juan B Justo 2100,Ministro Rivadavia" + "<br/>" + "Contacto: 1155166387" + " Email: facundoapple1701@gmail.com" + "<br/>" + "<img src= 'AK.jpg'/>" + "<A HREF='https://www.facebook.com/granja.donfacundo/?locale=es_LA'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Municipal = L.marker([-34.85378929808223 ,-58.34893014346852], {icon: azul},13).bindPopup("<strong>Granja Educativa Municipal<strong>" + "<br/>" + "Av Juan B Justo 1000,Ministro Rivadavia" + "<br/>" + "Contacto: 1150346200" + "Email: granjaeducativamunicipal@brown.gob.ar" + "<br/>" + "<img src= 'AL.jpg'/>" + "<A HREF='https://www.instagram.com/granjamunicipalbrown/'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Gabriel = L.marker([-34.849566,-58.338687], {icon: azul},13).bindPopup("<strong>Quinta San Gabriel<strong>" + "<br/>" + "Av. Juan B. Justo 1955,Ministro Rivadavia" + "<br/>" + "Contacto: 11 3043-0729	11 2402-7050" + "<br/>" + "Email: consultas@quintasangabriel.com" + "<br/>" + "<img src= 'AM.jpg'/>" + "<A HREF='https://www.quintasangabriel.com/web/Quinta-San-Gabriel-Espacio-Recreativo-Eventos-Campamentos-Ministro-Rivadavia-Burzaco.php#inicio'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Luisa = L.marker([-34.851402,-58.359132], {icon: azul},13).bindPopup("<strong>Estancia La Luisa<strong>" + "<br/>" + "Av. República Argentina 6649,Ministro Rivadavia" + "<br/>" + "Contacto: 1136185349	1136185349" + "<br/>" + "<img src= 'AN.jpg'/>" + "<A HREF='https://www.facebook.com/estancialaluisa/'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Ambá = L.marker([-34.848686,-58.317195], {icon: azul},13).bindPopup("<strong>Campito Ambá<strong>" + "<br/>" + "Lezica 4030,Ministro Rivadavia" + "<br/>" + "Contacto: 1528678806	1528678806"  + "<br/>" + "Email: tcaserotto@agro.uba.ar"  + "<br/>" + "<img src= 'AO.jpg'/>" + "<A HREF='red.huertascomunitarias'> Mas info... </A> " ).on('click', xxy).addTo(map);
//var AP = L.marker([-34.8770147,-58.3341349], {icon: azul},13).bindPopup("<strong>Quinta L& B<strong>" + "<br/>" + "Gral. Juan Gregorio Lemos 3870,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AP.jpg'/>" + "<A HREF='IG:  quintalyb'> Mas info... </A> " ).on('click', xxy);
//var AQ = L.marker([-34.8711875,-58.3420625], {icon: azul},13).bindPopup("<strong>Quinta Don Federico<strong>" + "<br/>" + "4MH5+G5,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AQ.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var AR = L.marker([-34.8498026,-58.3735843], {icon: azul},13).bindPopup("<strong>Casa QUIEN<strong>" + "<br/>" + "Espora 5733,Ministro Rivadavia" + "<br/>" + "Contacto: 1168217690" + "<br/>" + "<img src= 'AR.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
//var AS = L.marker([-34.8536808,-58.37082170000001], {icon: azul},13).bindPopup("<strong>Los Especialistas<strong>" + "<br/>" + "Espora 6199,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AS.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);
var Amelie = L.marker([-34.831943,-58.349281], {icon: azul},13).bindPopup("<strong>Estancia Amelie<strong>" + "<br/>" + "Batalla de Cancha Rayada 825,Ministro Rivadavia" + "<br/>" + "Contacto: 1160458295	011 5993-8342" + "<br/>" + "Email: estancia@amelieventos.com" + "<br/>"  + "<img src= 'AT.jpg'/>" + "<A HREF='https://www.facebook.com/pages/Estancia-Amelie/191405791629998'> Mas info... </A> " ).on('click', xxy).addTo(map);
//var AU = L.marker([-34.8342366,-58.35584779999999], {icon: azul},13).bindPopup("<strong>Los Cipreses<strong>" + "<br/>" + "25 de Mayo 1696,Ministro Rivadavia" + "<br/>" + "Contacto: 1132572850" + "<br/>" + "<img src= 'AU.jpg'/>" + "<A HREF='loscipreseseventos.com.ar'> Mas info... </A> " ).on('click', xxy);
//var AV = L.marker([-34.8783872,-58.3482422], {icon: azul},13).bindPopup("<strong>Martina Parrilla<strong>" + "<br/>" + "Gral. Brig. Manuel Calderón 299,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AV.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy);





// create the GeoJSON layer
var panificadora = L.marker([-34.854219,-58.350772], {icon: azul},13).bindPopup("<strong>Centro de Formación para el Trabajo en Panificados y Gastronomía<strong>" + "<br/>" + "Av Juan B Justo 900,Ministro Rivadavia" + "<br/>" + "Contacto: empleo@gmail.gob.ar" + "<br/>" + "<img src= 'AL.jpg'/>" + "<A HREF='https://www.almirantebrown.gov.ar/'> Mas info... </A> " ).on('click', xxy).addTo(map);
var CEA = L.marker([-34.856548,-58.354818], {icon: azul},13).bindPopup("<strong>CEA 34 Centro de Educación Agraria<strong>" + "<br/>" + "Av. Juan B. Justo 8505,Ministro Rivadavia" + "<br/>" + "Contacto: " + "<br/>" + "<img src= 'AM.jpg'/>" + "<A HREF='https://www.facebook.com/CEA34ALMIRANTEBROWN'> Mas info... </A> " ).on('click', xxy).addTo(map);
var Sasaki = L.marker([-34.884281,-58.334975], {icon: azul},13).bindPopup("<strong>Sasaki<strong>" + "<br/>" + "Coronel Quesada 4441 Ministro Rivadavia" + "<br/>" + "Contacto: 1155958955	1155958955" + "<br/>" + "<img src= 'AN.jpg'/>" + "<A HREF=''> Mas info... </A> " ).on('click', xxy).addTo(map);
var SOL = L.marker([-34.883627,-58.333632], {icon: azul},13).bindPopup("<strong>Sol y Verde es Vida<strong>" + "<br/>" + "Coronel Quesada 4446 Ministro Rivadavia" + "<br/>" + "Contacto: 1121619500	1121619500" + "<br/>" + "<img src= 'AO.jpg'/>" + "<A HREF='https://www.facebook.com/profile.php?id=100064002314951'> Mas info... </A> " ).on('click', xxy).addTo(map);



	




  
// create the GeoJSON layer
 var estaciones= L.geoJSON(estaciones, myLayerOptions)





var baseMaps = [
			                { 
								groupName : "Mapas Base",
								expanded : true,
								layers    : {
									"Mapa Base": ign_clasico,
									"Satelital": esri_sat,
									"Transito": google_trans
						
								}
					        },

                        ]

var overlays = [
							 {
								groupName : "Transporte publico",
								expanded : true,
								
								layers    : { 
									"Recorrido 506 - Ramal 7": cole1,
									"Recorrido 501 - Ramal 1": cole2,
									"Recorrido 501 - Los Altos": cole3,
									"Recorrido 510":cole4,
									"Linea Roca": estaciones
									
			
								}	
                             },{
								groupName : "Instituciones publicas",
								expanded : true,
								layers    : { 
									//S"Granja Educativa Municipal": granja,
									"Tierra y Frutos" :tierra_frutos ,
									"Granja Don Mario":Mario, 
									"Los Medina": Medina, 
									"Los Changuitos": Changuitos,
									"Parapentes Aires del Sur":airesdelsur, 
									"Selva Madre":Selva, 
									"Las Vueltas de Robinson":Robinson,
									"Quinta La Loma": Loma, 
									"Mont Plaisir":Mont, 
									"Don Facundo":Facundo, 
									"Granja Educativa Municipal":Municipal, 
									"Quinta San Gabriel": Gabriel, 
									"Estancia La Luisa":Luisa, 
									"Campito Ambá":Ambá, 
									"Estancia Amelie":Amelie,
									"Centro de Formacion para el Trabajo en Panificados": panificadora,
									"CEA 34 Centro de Educación Agraria": CEA,
									"Sasaki": Sasaki,
									"Sol y Verde es Vida" :SOL
									
								}	
                             },
							 
                             {
								groupName : "servicios bancarios",
								expanded : true,
								layers    : { 
									
								}	
                             },
							 {
								groupName : "Recorridos en Bicicleta",
								expanded : true,
								layers    : { 
									"Circuito N°1":recorrido1,
									"Circuito N°2": recorrido2
									
									
								}	
                             },
                             
                             ]

// configuracion de los estilos de capas


var options = {
				container_width 	: "300px",
				group_maxHeight     : "150px",
				//container_maxHeight : "350px", 
				exclusive       	: false,
				collapsed : true, 
				position: 'topright'
			};
		
var control = L.Control.styledLayerControl(baseMaps, overlays, options);
map.addControl(control);
map.scrollWheelZoom.disable();

			

			
