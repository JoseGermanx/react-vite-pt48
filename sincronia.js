
function cargarImagen(){
    console.log("¡Cárgala!");
    fetch("https://jsonplaceholder.typicode.com/users").then( (response) => {
        if(response.ok){ 
            console.log("¡Imagen cargada!");
        } else {
            console.log("Uh-oh algo salió mal");
        }
    });
}

function usuarioEsperando(){
    console.log("No me gusta esperar");
}

cargarImagen();

usuarioEsperando();
usuarioEsperando();
usuarioEsperando();
usuarioEsperando();
usuarioEsperando();
usuarioEsperando();
// resolución de promesa