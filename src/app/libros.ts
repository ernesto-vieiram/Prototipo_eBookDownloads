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
        id: 2,
        titulo: "Mi portada de libro",
        autor: "H. P. Mowli",
        ISBN: "9788478884955",
        edicion: 10,
        ano:2022,
        idioma: "Español",
        editorial: "salamandra",
        precio: 20.87,
        sinopsis: "Mi libro Mi libro Mi libro Mi libro Mi libro Mi libro Mi libro Mi libro Mi libro Mi libro Mi libro Mi libro ",
        comentarios: ["Gonzalo Mirillas:\n Muy buen libro", "Juan Pablo García:\n Me ha gustado mucho, lo recomiendo."]
    }
]