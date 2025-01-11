/ !FORMA CUANDO SOLO ERA UN FORMULARIO/
/*const boton = document.querySelectorAll('añadirCarro');
const img = document.querySelectorAll('img_comprado');
const espacio = document.querySelectorAll('espacio');

boton.addEventListener('click', function() {
    if (img.style.display === 'none' || img.style.display === '') {
        img.style.display = 'block';
        espacio.appendChild(img);
    }
});
*/

const botones = document.querySelectorAll('.añadirCarro');
const imagenes = document.querySelectorAll('.img_comprado');
const espacios = document.querySelectorAll('.espacio');

for (let i = 0; i < botones.length; i++) {
    
    botones[i].addEventListener('click', function() {
    
        if (imagenes[i].style.display === 'none' || imagenes[i].style.display === '') {
            imagenes[i].style.display = 'block'; 

            espacios[i].appendChild(imagenes[i]); 
        }
    });
}
