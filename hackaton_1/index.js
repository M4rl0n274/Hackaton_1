// CAMBIO DE IMAGEN AL HACER UN CAMBIO DE SELECCIÓN EN EL ÁREA DE COMPRA DE SKATEBOARDING:

document.querySelectorAll('.elegirTipo select').forEach(select => {
    select.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
        
        // Para obtener la URL de la nueva imagen y el ID de la imagen
        const nuevaImagen = selectedOption.getAttribute('data-imagen');
        const imagenId = selectedOption.getAttribute('data-imagen-id');
        
        // Solo proceder si hay una nueva imagen y un ID válido
        if (nuevaImagen && imagenId) {
            const imagen = document.getElementById(imagenId);
            
            // Añadir efecto de fade out
            imagen.style.opacity = '0';
            
            // Transición de fade out
            setTimeout(() => {
                imagen.src = nuevaImagen;
                imagen.alt = selectedOption.text;
            // Fade in de la nueva imagen
                imagen.style.opacity = '1';
            }, 300);
        }
    });
});

document.querySelectorAll('.elegirTipo select').forEach(select => {
    select.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'OPTION') {
            e.target.parentElement.style.backgroundColor = '#4299e1';
            e.target.style.backgroundColor = '#4299e1';
            e.target.style.color = 'white';
        }
    });

    select.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'OPTION') {
            e.target.parentElement.style.backgroundColor = 'white';
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#333';
        }
    });
});
