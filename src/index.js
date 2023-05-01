const messages = [
    "Cual es tu serie favorita?",
    "Cual es tu pelicula favorita?",
    "Cual es tu director favorito?",
    "Alguna escena que te haya volado la cabeza...",
    "Cual es la pelicula que más disfrutaste en el cine",
    "Que pelicula puedes ver 1000 veces?",
    "Que pelicula no volverias a ver?",
    "Dime cual es tu saga favorita de peliculas"
];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    funnyCommit
};