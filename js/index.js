let nombre = prompt("Cual es tu apodo?");

alert ("Bienvenido "+ nombre)

let hora = parseInt(prompt("Que hora es en tu ciudad?"));

if (hora <= 12) {
    alert("Es muy temprano");
} else if ((hora > 12) && (hora <= 17)) {
    alert("Espero tengas una linda tarde");
} else if ((hora > 17) && (hora <= 19)) {
    alert("ya esta anocheciendo!");
} else if ((hora > 20) && (hora <= 23)) {
    alert("Disfruta la noche!");
} else {
    alert("Que hora es en tu ciudad?");
}