const contenedor= document.querySelector("#plantel")
const plantel = [
  {
    Nombre:"Lautaro Martinez",
    Posicion: "Delantero",
    Seleccion: "Argentina",
    Dorsal: 10,
    Velocidad:8,
    Fortalezas:["Disparo","Fisico","Cabezaso"]},
  {
    Nombre:"William Saliba",
    Posicion: "Defensa",
    Seleccion: "Francia",
    Dorsal: 4,
    Velocidad:7,
    Fortalezas:["Fisico","Marca","Despeje"]},
  {
    Nombre:"Luka Modric",
    Posicion: "Mediocampista",
    Seleccion: "Croacia", 
    Dorsal: 14,
    Velocidad:5,
    Fortalezas:["Pase","Regate","Vision"],},
  {
    Nombre:"Enzo Fernandez",
    Posicion:"Mediocampista",
    Seleccion:"Argentina",
    Dorsal:17,
    Velocidad:8,
    Fortalezas:["Pase","Tiro","Vision"]
  }]

    plantel.forEach((jugador) => {
      console.log(`Nombre: ${jugador.Nombre}`);
      console.log(`Posición: ${jugador.Posicion}`)})

    const delanteros=plantel.filter((jugador) => jugador.Posicion === "Delantero");
    console.log(delanteros);

    const nombresDelPlantel = plantel.map(jugador => jugador.Nombre);
    console.log(nombresDelPlantel); 

    const encontrarJugador = plantel.find(jugador => jugador.Nombre === "Luka Modric");
    console.log(encontrarJugador);

    const elegido=plantel[0];

    document.getElementById("nombre").value = elegido.Nombre;
    document.getElementById("seleccion").value = elegido.Seleccion;   
    document.getElementById("dorsal").value = elegido.Dorsal;
  

plantel.push({
    Nombre:"Alexis Mac Allister",
    Posicion: "Mediocampista",
    Seleccion: "Argentina", 
    Dorsal: 10,
    Velocidad:9,
    Fortalezas:["Pase","Regate","Tiro"]})

  plantel.forEach((jugador) => {
      console.log(`Nombre: ${jugador.Nombre}`);
      console.log(`Posición: ${jugador.Posicion}`)})

totalVelocidad=0;
plantel.forEach((jugador) => {
    totalVelocidad += jugador.Velocidad;
});
promedioVelocidad=totalVelocidad/plantel.length;
console.log("Promedio de Velocidad del plantel:"+ promedioVelocidad);

plantel.forEach((jugador, i) => {

    // Crear la tarjeta primero
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("ficha");

    // Nombre
    const nombre = document.createElement("h2");
    nombre.textContent = jugador.Nombre;
    tarjeta.appendChild(nombre);

    // Selección
    const seleccion = document.createElement("p");
    seleccion.textContent = "Selección: " + jugador.Seleccion;
    tarjeta.appendChild(seleccion);

    // Posición
    const posicion = document.createElement("p");
    posicion.textContent = "Posición: " + jugador.Posicion;
    tarjeta.appendChild(posicion);

    // Fortalezas
    const fortalezas = document.createElement("p");
    fortalezas.textContent =
        "Fortalezas: " + jugador.Fortalezas.join(", ");
    tarjeta.appendChild(fortalezas);

    // Dorsal
    const dorsal = document.createElement("p");
    dorsal.textContent = "Dorsal: " + jugador.Dorsal;
    tarjeta.appendChild(dorsal);

    // Destacado si tiene velocidad >= 8
    if (jugador.Velocidad >= 8) {
        tarjeta.classList.add("destacado");

        const destacado = document.createElement("p");
        destacado.textContent = "Destacado";
        tarjeta.appendChild(destacado);
    }

    // Capitán: primer jugador
    if (i === 0) {
        tarjeta.classList.add("capitan");

        const capitan = document.createElement("p");
        capitan.textContent = "Capitán";
        tarjeta.appendChild(capitan);
    }

    // Agregar la tarjeta al HTML
    contenedor.appendChild(tarjeta);
});
