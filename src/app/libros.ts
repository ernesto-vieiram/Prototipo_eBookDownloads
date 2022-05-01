export interface Libro{
    id: number;
    titulo: string;
    autor: string;
    ISBN: string;
    edicion: number;
    ano: number;
    idioma: string;
    editorial: string;
    precio: number;
    sinopsis: string;
    comentarios: string[];
}

export let libros = [
    {
        id: 0,
        titulo: "Harry Potter y la Piedra Filosofal",
        autor: "J. K. Rowling",
        ISBN: "8478884459",
        edicion: 20,
        ano:1999,
        idioma: "Español",
        editorial: "salamandra",
        precio: 15.95,
        sinopsis: "Cuando Harry Potter cumple 11 años se entera que es huérfano, hijo de dos magos y que posee poderes mágicos. En la Escuela de Magia y Brujería de Hogwarts aprende a jugar el deporte de alturas, Quidditch y juega un emocionante juego de ajedrez, en vías a encarar al Mago Oscuro que está empeñado en destruirlo.",
        comentarios: ["Carlos Castrejón:\n Muy buen libro.", "Ricardo Martín:\n Me ha gustado mucho, lo recomiendo."]
    },
    {
        id: 1,
        titulo: "Harry Potter y la Cámara Secreta",
        autor: "J. K. Rowling",
        ISBN: "9788478884957",
        edicion: 21,
        ano:1999,
        idioma: "Español",
        editorial: "salamandra",
        precio: 15.95,
        sinopsis: "El verano de Harry Potter ha incluido el peor cumpleaños de su vida, las funestas advertencias de un elfo doméstico llamado Dobby y el rescate de casa de los Dursley protagonizado por su amigo Ron Weasley al volante de un coche mágico volador. De vuelta en el Colegio Hogwarts de Magia y Hechicería, donde va a empezar su segundo curso, Harry oye unos extraños susurros que resuenan por los pasillos vacíos. Y entonces empiezan los ataques y varios alumnos aparecen petrificados... Por lo visto, las siniestras predicciones de Dobby se están cumpliendo...",
        comentarios: ["Gonzalo Mirillas:\n Muy buen libro", "Juan Pablo García:\n Me ha gustado mucho, lo recomiendo."]
    },
    {
        id: 3,
        titulo: "Harry Potter y el prisionero de Azkaban",
        autor: "J. K. Rowling",
        ISBN: "9788478885190",
        edicion: 10,
        ano:2000,
        idioma: "Español",
        editorial: "salamandra",
        precio: 17.5,
        sinopsis: "Cuando el autobús noctámbulo irrumpe en una calle oscura y frena con fuertes chirridos delante de Harry, comienza para él un nuevo curso en Hogwarts, lleno de acontecimientos extraordinarios. Sirius Black, asesino y seguidor de lord Voldemort, se ha fugado, y dicen que va en busca de Harry. En su primera clase de Adivinación, la profesora Trelawney ve un augurio de muerte en las hojas de té de la taza de Harry... Pero quizá lo más aterrador sean los dementores que patrullan por los jardines del colegio, capaces de sorberte el alma con su beso...",
        comentarios: ["Gonzalo Mirillas:\n Muy buen libro", "Juan Pablo García:\n Me ha gustado mucho, lo recomiendo."]
    },
    {
        id: 4,
        titulo: "Harry Potter y el Cáliz de Fuego",
        autor: "J. K. Rowling",
        ISBN: "9788478886456",
        edicion: 10,
        ano:2001,
        idioma: "Español",
        editorial: "salamandra",
        precio: 20.87,
        sinopsis: "Se va a celebrar en Hogwarts el Torneo de los Tres Magos. Sólo los alumnos mayores de diecisiete años pueden participar en esta competición, pero, aun así, Harry sueña con ganarla. En Halloween, cuando el cáliz de fuego elige a los campeones, Harry se lleva una sorpresa al ver que su nombre es uno de los escogidos por el cáliz mágico. Durante el torneo deberá enfrentarse a desafíos mortales, dragones y magos tenebrosos, pero con la ayuda de Ron y Hermione, sus mejores amigos, ¡quizá logre salir con vida!",
        comentarios: ["Gonzalo Mirillas:\n Muy buen libro", "Juan Pablo García:\n Me ha gustado mucho, lo recomiendo."]
    },
    {
        id: 5,
        titulo: "Harry Potter y la Orden del Fénix",
        autor: "J. K. Rowling",
        ISBN: "9788478887422",
        edicion: 10,
        ano:2004,
        idioma: "Español",
        editorial: "salamandra",
        precio: 20.87,
        sinopsis: "Son malos tiempos para Hogwarts. Tras el ataque de los dementores a su primo Dudley, Harry Potter comprende que Voldemort no se detendrá ante nada para encontrarlo. Muchos niegan que el Señor Tenebroso haya regresado, pero Harry no está solo: una orden secreta se reúne en Grimmauld Place para luchar contra las fuerzas oscuras. Harry debe permitir que el profesor Snape le enseñe a protegerse de las brutales incursiones de Voldemort en su mente. Pero éstas son cada vez más potentes, y a Harry se le está agotando el tiempo...",
        comentarios: ["Gonzalo Mirillas:\n Muy buen libro", "Juan Pablo García:\n Me ha gustado mucho, lo recomiendo."]
    },
    {
        id: 6,
        titulo: "Harry Potter y el Misterio del Príncipe",
        autor: "J. K. Rowling",
        ISBN: "9788478889907",
        edicion: 10,
        ano:2006,
        idioma: "Español",
        editorial: "salamandra",
        precio: 20.87,
        sinopsis: "Con dieciseis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de quidditch, los ensayos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los ferreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte: \"El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida.\" El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo.",
        comentarios: ["Gonzalo Mirillas:\n Muy buen libro", "Juan Pablo García:\n Me ha gustado mucho, lo recomiendo."]
    },
]