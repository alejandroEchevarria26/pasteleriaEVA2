// Catálogo Unificado de Productos
const servicios = [
    // Alfajores Artesanales
    {
        nombre: "Alfajores de Chocolate",
        precio: 1500,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.19.01.jpeg",
        descripcion: "Exquisitos alfajores cubiertos con el mejor chocolate artesanal y mucho manjar.",
        porciones: "Por unidad / Caja 6-12"
    },
    {
        nombre: "Cuchuflí Artesanal",
        precio: 800,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.19.02.jpeg",
        descripcion: "Crujientes tubos rellenos con abundante manjar casero.",
        porciones: "Por unidad / Paquetes"
    },
    {
        nombre: "Alfajor de Oreo",
        precio: 1800,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.19.03.jpeg",
        descripcion: "La combinación perfecta de galleta Oreo, manjar y cobertura de chocolate blanco.",
        porciones: "Especialidad"
    },
    {
        nombre: "Alfajor de Brownie",
        precio: 2000,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.19.04.jpeg",
        descripcion: "Tapas de brownie húmedo rellenas de manjar. ¡Una explosión de sabor!",
        porciones: "Especialidad"
    },
    {
        nombre: "Alfajor de Mermelada",
        precio: 1500,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.19.05.jpeg",
        descripcion: "Opción frutal con mermelada artesanal de la temporada y masa suave.",
        porciones: "Por unidad"
    },
    {
        nombre: "Alfajor Tradicional",
        precio: 1200,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.20.50.jpeg",
        descripcion: "El clásico de maicena con mucho coco y el secreto de la abuela.",
        porciones: "Clásico"
    },
    // Tortas y Productos Especiales
    {
        nombre: "Torta Temática Fútbol",
        precio: 25000,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.20.51.jpeg",
        descripcion: "Impactante torta de dos pisos con goteo de chocolate y decoración temática. Perfecta para fanáticos.",
        porciones: "20-25 personas"
    },
    {
        nombre: "Torta Celeste Elegante",
        precio: 18000,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.20.52.jpeg",
        descripcion: "Fina terminación en crema con detalles celestes y perlas. Ideal para bautizos o baby showers.",
        porciones: "15-20 personas"
    },
    {
        nombre: "Caja Regalo Alfajores",
        precio: 8500,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.19.01.jpeg",
        descripcion: "Hermosa caja de 6 alfajores artesanales con glaseado decorativo y diseño elegante.",
        porciones: "Caja 6 unidades"
    },
    {
        nombre: "Torta Rosada Cumpleaños",
        precio: 15000,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.20.53.jpeg",
        descripcion: "Deliciosa torta decorada con rosetones en degradé rosado. Un clásico que nunca falla.",
        porciones: "12-15 personas"
    },
    {
        nombre: "Ramo de Cupcakes",
        precio: 15000,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.19.02 (2).jpeg",
        descripcion: "Original ramo comestible con cupcakes decorados como flores reales. ¡Un regalo único!",
        porciones: "7 unidades"
    },
    {
        nombre: "Verrines (Postres en Vaso)",
        precio: 2500,
        imagen: "img/WhatsApp Image 2026-05-05 at 19.20.54.jpeg",
        descripcion: "Variedad de postres individuales en vaso para candy bar y eventos especiales.",
        porciones: "Por unidad"
    }
];

// Reseñas de Clientes
const resenas = [
    {
        nombre: "María González",
        fecha: "Hace 2 días",
        comentario: "Los alfajores de brownie son de otro mundo. Se nota que son caseros.",
        estrellas: 5
    },
    {
        nombre: "Juan Pablo Soto",
        fecha: "Hace 1 semana",
        comentario: "Compré una caja de cuchuflís para un regalo y quedaron encantados. ¡Muy frescos!",
        estrellas: 5
    },
    {
        nombre: "Carla R.",
        fecha: "Hace 2 semanas",
        comentario: "El alfajor de Oreo es mi debilidad. Excelente atención por WhatsApp.",
        estrellas: 4
    }
];

// Función para cargar el catálogo de productos
function cargarCatalogo() {
    const contenedor = document.getElementById("contenedorServicios");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    servicios.forEach(servicio => {
        const card = `
            <div class="product-card fade-in-up">
                <div class="product-image" style="background-image: url('${servicio.imagen}'); background-size: cover; background-position: center;"></div>
                <div class="product-content">
                    <h3 class="product-title">${servicio.nombre}</h3>
                    <div class="product-price">$${servicio.precio.toLocaleString('es-CL')}</div>
                    <p class="product-description">${servicio.descripcion}</p>
                    <p style="font-size: 0.85rem; color: #888; margin-bottom: 15px;">
                        <i class="fas fa-tag"></i> ${servicio.porciones}
                    </p>
                    <button class="cta-button" style="width: 100%; border: none; cursor: pointer;"
                            onclick="autoCompletarPedido('${servicio.nombre}')">
                        Cotizar por WhatsApp
                    </button>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    });
}

// Función para cargar las reseñas
function cargarResenas() {
    const contenedorResenas = document.getElementById("contenedorResenas");
    if (!contenedorResenas) return;

    contenedorResenas.innerHTML = "";
    resenas.forEach(r => {
        let estrellasHtml = '<i class="fas fa-star"></i>'.repeat(r.estrellas);
        contenedorResenas.innerHTML += `
            <div class="review-card fade-in-up">
                <div class="stars">${estrellasHtml}</div>
                <p class="review-text">"${r.comentario}"</p>
                <div class="review-author">
                    <div class="author-info">
                        <h4>${r.nombre}</h4>
                        <span>${r.fecha}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

// Función para autocompletar el formulario al hacer clic en un producto
function autoCompletarPedido(nombreProducto) {
    const select = document.getElementById('producto');
    const seccionPedido = document.getElementById('pedido');
    const detalles = document.getElementById('detalles');

    if (select) {
        select.value = "Producto de Catálogo";
        detalles.value = "Hola Tortas Kelita, me gustaría cotizar: " + nombreProducto;
        seccionPedido.scrollIntoView({ behavior: 'smooth' });
    }
}

// Manejo del envío del formulario a WhatsApp
const orderForm = document.getElementById('orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const producto = document.getElementById('producto').value;
        const porciones = document.getElementById('porciones').value || "No especificado";
        const fecha = document.getElementById('fecha').value;
        const detalles = document.getElementById('detalles').value;

        // Reemplaza con tu número real (incluye código de país, ej: 569 para Chile)
        const miNumero = "569XXXXXXXX";

        const mensaje = `*NUEVA CONSULTA - TORTAS KELITA*%0A` +
                        `--------------------------%0A` +
                        `*Cliente:* ${nombre}%0A` +
                        `*Teléfono:* ${telefono}%0A` +
                        `*Producto:* ${producto}%0A` +
                        `*Tamaño/Cant:* ${porciones}%0A` +
                        `*Fecha Evento:* ${fecha}%0A` +
                        `*Mensaje:* ${detalles}%0A` +
                        `--------------------------%0A` +
                        `_Enviado desde el sitio web_`;

        const url = `https://wa.me/${miNumero}?text=${mensaje}`;
        window.open(url, '_blank');
    });
}

// Inicialización y animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarCatalogo();
    cargarResenas();

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});