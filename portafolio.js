// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Logotipo Arcana",
    about: "Arcana es una tienda de vestidos formales de alta costura con generos traidos de la india, que se enfoca en mujeres jovenes ",

}, {
    figure: "media/foto-02.jpg",
    title: "Senz: Luminaria de ambiente ",
    about: "Esta luminaria está hecha de arcilla, la cual busca crear un ambiente acogedor a través de su luz calida, pero dinamico al mismo tiempo dada su forma esvelta ",
}, {
    figure: "media/foto-03.jpg",
    title: "Dátil",
    about: "Este producto está hecho a base de frutas, apto para niños celiacos. Está endulzado con dátiles, que pueden comer de una forma facil en el auto camino al colegio",
}, {
    figure: "media/foto-04.jpg",
    title: "Gemüse",
    about: "Helado de salsas de verduras para aperitivos. Se trabajó en la Identidad gráfica de la marca",
}, {
    figure: "media/foto-05.jpg",
    title: "Pantuflas térmicas",
    about: "Este proyecto fue una co-creacion en conjundo con mujeres artesanas de la municipalidad de Peñalolen, donde se buscaba validar sus productos para luego crear un tercero que ellas fueran capaces de fabricar para su posterior venta",
}, {
    figure: "media/foto-06.jpg",
    title: "Tigre Diseño",
    about: "Diseño de etiquetas personalizadas para botellas de cerveza como regalo. Las etiquetas están diseñadas en torno a una ilustración hecha a partir de una fotografía. También contienen un título y mensajes personales de parte de quien las regala",
}, {
    figure: "media/foto-07.jpg",
    title: "RAF",
    about: "Diseño para emergencias. Este producto es una banda húmeda de fibra de bambú, que se mantiene en un sobre de aluminio. Fue diseñada a partir de la necesidad de proteger las vías respiratorias de las personas al momento de escapar de un incendio.",
}, {
    figure: "media/foto-08.jpg",
    title: "Maez",
    about: "Trabajo de identidad de marca para el emprendimiento Maez; salsas y especies. Diseño de logo y línea gráfica de sus productos.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
