/**
 * CEIPC · Complejo Educativo Ignacio Pacheco Castro
 * Navegación por rutas (#/especialidades, #/especialidad/software...),
 * contenido de especialidades generado desde una sola lista de datos.
 */
'use strict';

/* Seguridad: si otra página intenta mostrar este sitio dentro de un marco (iframe)
   para engañar a los visitantes (clickjacking), se sale del marco. */
if (window.top !== window.self) {
    try { window.top.location = window.location.href; }
    catch { document.documentElement.hidden = true; }
}

/* ==========================================================================
  
   ========================================================================== */
const MODALIDADES = {
    general: { nombre: 'Bachillerato General', corto: 'General' },
    tecnico: { nombre: 'Bachillerato Técnico Vocacional', corto: 'Técnico' },
};

const ESPECIALIDADES = [
    {
        id: 'arquitectura',
        nombre: 'Arquitectura',
        modalidad: 'general',
        resumen: 'Fundamentos de dibujo técnico, software CAD y diseño de planos.',
        descripcion: 'Diseño arquitectónico, dibujo técnico digital (CAD), maquetación a escala y conceptos fundamentales de construcción civil.',
        aprendizajes: ['Diseño arquitectónico', 'Dibujo técnico digital (CAD)', 'Maquetación a escala', 'Conceptos fundamentales de construcción civil'],
        campoLaboral: ['Auxiliar en despachos de arquitectura', 'Dibujante técnico (CAD)', 'Elaboración de maquetas', 'Base para Arquitectura o Ingeniería Civil'],
        imagen: 'generales/arquitectura.jpg',
        ficha: 'generales/arquitectura.jpg',
        galeria: [{ src: 'generales/arquitectura.jpg', ajuste: 'completa' }],   // agrega aquí fotos reales: 'imgs/arqui1.jpg', ...
    },
    {
        id: 'lenguas',
        nombre: 'Lenguas Modernas',
        modalidad: 'general',
        resumen: 'Dominio de idiomas extranjeros con enfoque en comunicación global.',
        descripcion: 'Formación intensiva en inglés y francés orientada a la comunicación corporativa, la traducción y las relaciones internacionales.',
        aprendizajes: ['Inglés intensivo', 'Francés', 'Comunicación corporativa', 'Traducción', 'Relaciones internacionales'],
        campoLaboral: ['Atención al cliente bilingüe', 'Centros de llamadas', 'Asistente de traducción', 'Base para carreras de idiomas y relaciones internacionales'],
        imagen: 'generales/lenguas.jpg',
        ficha: 'generales/lenguas.jpg',
        galeria: [{ src: 'generales/lenguas.jpg', ajuste: 'completa' }],   // agrega aquí fotos reales: 'imgs/lenguas1.jpg', ...
    },
    {
        id: 'gastronomia',
        nombre: 'Gastronomía',
        modalidad: 'general',
        resumen: 'Técnicas culinarias, repostería y administración de cocina.',
        descripcion: 'Técnicas de cocina nacional e internacional, panadería, repostería artesanal, manipulación higiénica e inocuidad de alimentos.',
        aprendizajes: ['Cocina nacional e internacional', 'Panadería', 'Repostería artesanal', 'Manipulación higiénica e inocuidad de alimentos'],
        campoLaboral: ['Cocina de restaurantes y hoteles', 'Panadería y repostería', 'Emprendimiento gastronómico', 'Base para Licenciatura en Gastronomía'],
        imagen: 'imgs/gastro1.jpg',
        ficha: 'generales/gastronomia.jpg',
        galeria: ['imgs/gastro1.jpg', 'imgs/gastro2.jpg', 'imgs/gastro3.jpg'],
    },
    {
        id: 'diseno',
        nombre: 'Diseño Gráfico',
        modalidad: 'general',
        resumen: 'Ilustración digital, identidad de marca y composición visual.',
        descripcion: 'Ilustración digital, teoría del color, creación de marcas (branding), edición de imagen vectorial y campañas publicitarias.',
        aprendizajes: ['Ilustración digital', 'Teoría del color', 'Creación de marcas (branding)', 'Edición de imagen vectorial', 'Campañas publicitarias'],
        campoLaboral: ['Diseño publicitario', 'Redes sociales y contenido digital', 'Imprentas y rotulación', 'Base para Diseño Gráfico o Comunicaciones'],
        imagen: 'imgs/diseno3.jpg',
        ficha: 'generales/diseño.jpg',
        galeria: ['imgs/diseno1.jpg', 'imgs/diseno2.jpg', 'imgs/diseno3.jpg', 'imgs/diseno4.jpg', 'imgs/diseno5.jpg'],
    },
    {
        id: 'software',
        nombre: 'Desarrollo de Software',
        modalidad: 'tecnico',
        resumen: 'Lógica de programación, desarrollo web, móvil y bases de datos.',
        descripcion: 'Formación en programación de sistemas, desarrollo web responsivo, creación de bases de datos y desarrollo de lógica computacional.',
        aprendizajes: ['Programación estructurada y orientada a objetos', 'Desarrollo web (HTML, CSS y JavaScript)', 'Bases de datos relacionales (SQL)', 'Desarrollo de aplicaciones móviles'],
        campoLaboral: ['Desarrollo web', 'Soporte técnico informático', 'Pruebas de software', 'Base para Ingeniería en Sistemas'],
        imagen: 'imgs/software3.jpg',
        ficha: 'tecnicos/software.jpg',
        galeria: [{ src: 'imgs/software3.jpg', ajuste: 'completa' }, { src: 'tecnicos/software.jpg', ajuste: 'completa' }],
        alt: 'Estudiantes de Desarrollo de Software del CEIPC',
        pie: 'Estudiantes del Bachillerato Técnico en Desarrollo de Software (CEIPC 2026).',
    },
    {
        id: 'mecanica',
        nombre: 'Mecánica Automotriz',
        modalidad: 'tecnico',
        resumen: 'Diagnóstico por computadora, inyección electrónica y motores.',
        descripcion: 'Diagnóstico electrónico por escáner, reparación de motores de combustión y mantenimiento de sistemas de frenos, dirección y suspensión.',
        aprendizajes: ['Diagnóstico electrónico por escáner', 'Reparación de motores de combustión', 'Sistemas de frenos', 'Dirección y suspensión'],
        campoLaboral: ['Talleres automotrices', 'Diagnóstico electrónico de vehículos', 'Agencias de autos', 'Emprendimiento en taller propio'],
        imagen: 'imgs/meca1.jpg',
        ficha: 'tecnicos/mecanica.jpg',
        galeria: ['imgs/meca1.jpg', 'imgs/meca2.jpg', { src: 'imgs/meca3.jpg', ajuste: 'completa' }, 'imgs/meca4.jpg', 'imgs/meca5.jpg'],
    },
    {
        id: 'salud',
        nombre: 'Salud y Bienestar Social',
        modalidad: 'tecnico',
        resumen: 'Atención primaria, enfermería comunitaria y primeros auxilios.',
        descripcion: 'Soporte vital básico, primeros auxilios, anatomía, atención preventiva comunitaria y asistencia clínica primaria.',
        aprendizajes: ['Soporte vital básico', 'Primeros auxilios', 'Anatomía', 'Atención preventiva comunitaria', 'Asistencia clínica primaria'],
        campoLaboral: ['Asistencia en clínicas y hospitales', 'Promoción de la salud comunitaria', 'Cuidado de adultos mayores', 'Base para Enfermería o Medicina'],
        imagen: 'imgs/salud2.jpg',
        ficha: 'tecnicos/salud.jpg',
        galeria: ['imgs/salud.jpg', 'imgs/salud2.jpg', 'imgs/salud3.jpg', 'imgs/salud4.jpg', 'imgs/salud5.jpg'],
    },
    {
        id: 'turismo',
        nombre: 'Servicios Turísticos',
        modalidad: 'tecnico',
        resumen: 'Gestión de hotelería, logística de eventos y guías de turismo.',
        descripcion: 'Operaciones hoteleras, guía turística, organización y protocolo de eventos, geografía turística y atención al cliente.',
        aprendizajes: ['Operaciones hoteleras', 'Guía turística', 'Organización y protocolo de eventos', 'Geografía turística', 'Atención al cliente'],
        campoLaboral: ['Recepción y servicios hoteleros', 'Guía turístico', 'Organización de eventos', 'Agencias de viajes'],
        imagen: 'tecnicos/turismo.jpg',
        ficha: 'tecnicos/turismo.jpg',
        galeria: [{ src: 'tecnicos/turismo.jpg', ajuste: 'completa' }],   // agrega aquí fotos reales: 'imgs/turismo1.jpg', ...
    },
];

/* ==========================================================================
   1b. GALERÍA (organizada por álbumes)
   Todas las fotos van en UNA sola carpeta: galeria/
   Se diferencian por el nombre del archivo, no por carpeta.

   Cómo se organiza:
     Categoría          → Danza folclóricas
       └─ Álbum         → Festival de la cultura   (se ve con su portada)
            └─ Fotos    → festival-cultura-1.jpg, festival-cultura-2.jpg, ...

   Al presionar la portada de un álbum se abren TODAS sus fotos.

   Cada álbum dentro de GALERIA tiene:
   - id:        nombre corto y único, sin espacios ni tildes (se usa en el enlace #/galeria/danzas/festival-cultura)
   - categoria: el id de una de las CATEGORIAS_GALERIA
   - titulo:    nombre del álbum
   - fecha:     año o fecha (opcional)
   - portada:   la foto que se ve en la tarjeta antes de entrar
   - fotos:     TODAS las fotos del álbum. Hay dos formas de escribirlas:
       1) Una por una:   fotos: ['festival-a.jpg', 'festival-b.jpeg', 'otra.jpg']
       2) Numeradas:     fotos: serie('festival-cultura-', 40)
                         → festival-cultura-1.jpg hasta festival-cultura-40.jpg
          Si son .jpeg:  fotos: serie('festival-cultura-', 40, '.jpeg')
       También se pueden combinar: [...serie('festival-cultura-', 40), 'foto-extra.jpg']
     Si fotos queda vacío [], el álbum muestra solo la portada.

   Para crear una categoría nueva, agrégala en CATEGORIAS_GALERIA.
   Las categorías sin álbumes no se muestran.
   ========================================================================== */
const CARPETA_GALERIA = 'galeria/';

/** Genera nombres numerados: serie('danza-', 3) → ['danza-1.jpg', 'danza-2.jpg', 'danza-3.jpg'] */
function serie(prefijo, cantidad, extension = '.jpg') {
    return Array.from({ length: cantidad }, (_, i) => `${prefijo}${i + 1}${extension}`);
}

/** Convierte 'foto.jpg' o { archivo: 'foto.jpg', ajuste: 'completa' } en un objeto con la ruta completa */
function rutaFotoGaleria(foto) {
    if (typeof foto === 'string') return { src: CARPETA_GALERIA + foto };
    return { ...foto, src: CARPETA_GALERIA + foto.archivo };
}

const CATEGORIAS_GALERIA = [
    { id: 'proyectos', nombre: 'Proyectos estudiantiles', descripcion: 'Trabajos y exposiciones de nuestras especialidades.' },
    { id: 'bandas',    nombre: 'Banda de paz',           descripcion: 'Desfiles, presentaciones y concursos de nuestra banda.' },
    { id: 'danzas',    nombre: 'Danzas folclóricas',      descripcion: 'Presentaciones de danza y tradiciones salvadoreñas.' },
    { id: 'eventos',   nombre: 'Actos y eventos',         descripcion: 'Actos cívicos, celebraciones y graduaciones.' },
    { id: 'deportes',  nombre: 'Deportes',                descripcion: 'Torneos y actividades deportivas.' },
    { id: 'orquesta',  nombre: 'Orquesta Estudiantil',    descripcion: 'Conciertos, ensayos y presentaciones de nuestra orquesta.' },
];

const GALERIA = [
    // ---- Proyectos estudiantiles ----
    {
        id: 'expo-software', categoria: 'proyectos', titulo: 'Expo de Desarrollo de Software', fecha: '2026',
        portada: 'proyecto1.jpg',
        fotos: [],          // ej.: serie('expo-software-', 20)
    },
    {
        id: 'maquetas-arquitectura', categoria: 'proyectos', titulo: 'Maquetas de Arquitectura', fecha: '2026',
        portada: 'proyecto2.jpg',
        fotos: [],
    },
    {
        id: 'muestra-gastronomia', categoria: 'proyectos', titulo: 'Muestra de Gastronomía', fecha: '2026',
        portada: 'proyecto3.jpg',
        fotos: [],
    },
    {
        id: 'taller-mecanica', categoria: 'proyectos', titulo: 'Taller de Mecánica Automotriz', fecha: '2026',
        portada: 'proyecto4.jpg',
        fotos: [],
    },

    // ---- Bandas de paz ----
    {
        id: 'desfile-15-septiembre', categoria: 'bandas', titulo: 'Desfile del 15 de septiembre', fecha: '2026',
        portada: 'banda1.jpg',
        fotos: [],
    },
    {
        id: 'concurso-bandas', categoria: 'bandas', titulo: 'Concurso de bandas de paz', fecha: '2026',
        portada: 'banda3.jpg',
        fotos: [],
    },

    // ---- Danzas folclóricas ----
    {
        id: 'grupo-danza', categoria: 'danzas', titulo: 'Grupo de danza folclórica', fecha: '2026',
        portada: 'danza1.jpeg',
        fotos: [],          // ej.: serie('grupo-danza-', 40, '.jpeg')
    },
    {
        id: 'festival-cultura', categoria: 'danzas', titulo: 'Festival de la cultura', fecha: '2026',
        portada: 'danza2.jpeg',
        fotos: [],          // ej.: serie('festival-cultura-', 40, '.jpeg')
    },
    {
        id: 'acto-civico-danza', categoria: 'danzas', titulo: 'Presentación en el acto cívico', fecha: '2026',
        portada: 'danza3.jpeg',
        fotos: [],
    },

    // ---- Actos y eventos ----
    {
        id: 'acto-independencia', categoria: 'eventos', titulo: 'Acto cívico de independencia', fecha: '2026',
        portada: 'evento1.jpg',
        fotos: [],
    },
    {
        id: 'dia-estudiante', categoria: 'eventos', titulo: 'Día del estudiante', fecha: '2026',
        portada: 'evento2.jpg',
        fotos: [],
    },

    // ---- Orquesta Estudiantil ----
    {
        id: 'concierto-orquesta', categoria: 'orquesta', titulo: 'Concierto de la Orquesta Estudiantil', fecha: '2026',
        portada: 'orquesta1.jpg',
        fotos: [],
    },
    {
        id: 'ensayo-orquesta', categoria: 'orquesta', titulo: 'Ensayo de la orquesta', fecha: '2026',
        portada: 'orquesta2.jpg',
        fotos: [],
    },
    {
        id: 'presentacion-orquesta', categoria: 'orquesta', titulo: 'Presentación en el acto cívico', fecha: '2026',
        portada: 'orquesta3.jpg',
        fotos: [],
    },
].map((album) => ({
    ...album,
    src: CARPETA_GALERIA + album.portada,                    // ruta de la portada: galeria/<portada>
    fotos: (album.fotos && album.fotos.length ? album.fotos : [album.portada]).map(rutaFotoGaleria),
}));

// Congela los datos para que otro script no los pueda alterar en el navegador
[MODALIDADES, ESPECIALIDADES, CATEGORIAS_GALERIA, GALERIA].forEach((lista) => {
    Object.values(lista).forEach((item) => {
        Object.values(item).forEach((v) => { if (Array.isArray(v)) Object.freeze(v); });
        Object.freeze(item);
    });
    Object.freeze(lista);
});

const VISTAS = ['inicio', 'especialidades', 'nosotros', 'galeria', 'contacto'];
const NOMBRE_SITIO = 'Complejo Educativo Ignacio Pacheco Castro';

/* ==========================================================================
   2. UTILIDADES
   ========================================================================== */
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];

/** Evita que texto con < > & rompa el HTML generado */
const esc = (texto) => String(texto).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));

/**
 * Solo acepta rutas de imagen locales (p. ej. 'galeria/foto.jpg') o https://.
 * Bloquea cosas como 'javascript:' por si alguien mete un dato malicioso en las listas.
 */
const rutaSegura = (src) => {
    const ruta = String(src || '').trim();
    if (/^https:\/\//i.test(ruta)) return ruta;
    if (/^[a-z][a-z0-9+.-]*:/i.test(ruta) || ruta.startsWith('//')) return '';
    return ruta;
};

/**
 * Ajuste de cada foto (opcional). Una foto puede escribirse como texto:
 *     'imgs/foto.jpg'
 * o como objeto, para controlar cómo se acomoda:
 *     { src: 'imgs/foto.jpg', ajuste: 'completa' }   -> se ve entera, sin recortar (ideal para fotos verticales)
 *     { src: 'imgs/foto.jpg', enfoque: 'arriba' }    -> recorta, pero deja visible la parte de arriba
 * Valores de enfoque: 'arriba', 'abajo', 'izquierda', 'derecha', 'centro' (por defecto).
 */
const ENFOQUES = ['arriba', 'abajo', 'izquierda', 'derecha', 'centro'];
const normalizarFoto = (foto) => (typeof foto === 'string' ? { src: foto } : (foto || {}));
const clasesAjuste = (foto) => {
    const clases = [];
    if (foto.ajuste === 'completa') clases.push('img--completa');
    if (ENFOQUES.includes(foto.enfoque)) clases.push(`img--${foto.enfoque}`);
    return clases.join(' ');
};

const buscarEspecialidad = (id) => ESPECIALIDADES.find((e) => e.id === id);
const buscarCategoria = (id) => CATEGORIAS_GALERIA.find((c) => c.id === id);
const fotosDe = (categoria) => GALERIA.filter((f) => f.categoria === categoria);   // álbumes de una categoría
const buscarAlbum = (categoria, id) => GALERIA.find((a) => a.categoria === categoria && a.id === id);
const textoFotos = (n) => `${n} ${n === 1 ? 'foto' : 'fotos'}`;
const enlaceEspecialidad = (e) => `#/especialidad/${e.id}`;

/* ==========================================================================
   3. INICIO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderListasModalidad();
    renderCatalogo();
    setupImagenesRespaldo();
    setupHeader();
    setupMenuMovil();
    setupGaleria();
    setupPortada();
    setupVolverArriba();

    window.addEventListener('hashchange', () => navegar());
    navegar({ inicial: true });
});

/* ==========================================================================
   4. RENDERIZADO
   ========================================================================== */
function renderListasModalidad() {
    $$('[data-modalidad-list]').forEach((lista) => {
        const modalidad = lista.dataset.modalidadList;
        lista.innerHTML = ESPECIALIDADES
            .filter((e) => e.modalidad === modalidad)
            .map((e) => `<li><a href="${enlaceEspecialidad(e)}">${esc(e.nombre)}</a></li>`)
            .join('');
    });
}

function renderCatalogo() {
    $$('[data-catalog]').forEach((contenedor) => {
        const modalidad = contenedor.dataset.catalog;
        contenedor.innerHTML = ESPECIALIDADES
            .filter((e) => e.modalidad === modalidad)
            .map(fichaHTML)
            .join('');
    });
}

function fichaHTML(e) {
    return `
        <article class="ficha">
            <a class="ficha__link" href="${enlaceEspecialidad(e)}" tabindex="-1" aria-hidden="true">
                <figure class="media" data-initial="${esc(e.nombre.charAt(0))}">
                    <img src="${esc(rutaSegura(e.ficha || e.imagen))}" alt="" loading="lazy" decoding="async">
                </figure>
            </a>
            <div class="ficha__body">
                <h3 class="ficha__title">${esc(e.nombre)}</h3>
                <p class="ficha__text">${esc(e.resumen)}</p>
            </div>
            <div class="ficha__actions">
                <a class="btn btn--primary ficha__btn" href="${enlaceEspecialidad(e)}">
                    Conocer más<span class="sr-only"> sobre ${esc(e.nombre)}</span>
                </a>
            </div>
        </article>`;
}

function renderDetalle(e) {
    const contenedor = $('#detalle');
    const seccion = $('#view-especialidad');
    if (!contenedor || !seccion) return;

    const total = ESPECIALIDADES.length;
    const posicion = ESPECIALIDADES.indexOf(e);
    const anterior = ESPECIALIDADES[(posicion - 1 + total) % total];
    const siguiente = ESPECIALIDADES[(posicion + 1) % total];

    seccion.dataset.title = e.nombre;

    contenedor.innerHTML = `
        <div class="detail">
            <div class="detail__text">
                <p class="detail__tag">${esc(MODALIDADES[e.modalidad].nombre)}</p>
                <h1 class="detail__title" tabindex="-1">${esc(e.nombre)}</h1>
                <p class="detail__lead">${esc(e.descripcion)}</p>

                <div class="detail__box">
                    <h2 class="detail__sub">Qué vas a aprender</h2>
                    <ul class="checklist">
                        ${e.aprendizajes.map((a) => `<li>${esc(a)}</li>`).join('')}
                    </ul>
                </div>

                ${e.campoLaboral ? `
                <div class="detail__box detail__box--navy">
                    <h2 class="detail__sub">Campo laboral</h2>
                    <ul class="checklist">
                        ${e.campoLaboral.map((c) => `<li>${esc(c)}</li>`).join('')}
                    </ul>
                </div>` : ''}

                <div class="actions">
                    <a class="btn btn--primary" href="#/contacto">Consultar admisiones</a>
                </div>
            </div>

            <figure class="detail__figure">
                ${carruselHTML(e)}
                ${e.pie ? `<figcaption>${esc(e.pie)}</figcaption>` : ''}
            </figure>
        </div>

        <nav class="pager" aria-label="Otras especialidades">
            <a class="pager__link" href="${enlaceEspecialidad(anterior)}">
                <span class="pager__hint">Anterior</span>
                <span class="pager__name">${esc(anterior.nombre)}</span>
            </a>
            <a class="pager__link pager__link--next" href="${enlaceEspecialidad(siguiente)}">
                <span class="pager__hint">Siguiente</span>
                <span class="pager__name">${esc(siguiente.nombre)}</span>
            </a>
        </nav>`;

    iniciarCarrusel($('[data-carousel]', contenedor));
}

/* ==========================================================================
   4b. CARRUSEL DE FOTOS (página de detalle)
   ========================================================================== */
let carruselActivo = null;
const AUTOPLAY_MS = 5000;

function carruselHTML(e) {
    const fotos = e.galeria && e.galeria.length ? e.galeria : [e.imagen];
    const total = fotos.length;

    return `
        <div class="carousel" data-carousel role="region"
             aria-roledescription="carrusel" aria-label="Fotos de ${esc(e.nombre)}">
            <div class="carousel__viewport media" data-initial="${esc(e.nombre.charAt(0))}">
                <div class="carousel__track">
                    ${fotos.map(normalizarFoto).map((f, i) => `
                        <div class="carousel__slide${f.ajuste === 'completa' ? ' carousel__slide--completa' : ''}" role="group" aria-roledescription="foto"
                             aria-label="${i + 1} de ${total}">
                            ${f.ajuste === 'completa' ? `<img class="carousel__fondo" src="${esc(rutaSegura(f.src))}" alt="" aria-hidden="true" decoding="async" draggable="false">` : ''}
                            <img src="${esc(rutaSegura(f.src))}" alt="${esc(f.alt || e.alt || `${e.nombre}: foto ${i + 1}`)}"
                                 class="${clasesAjuste(f)}" decoding="async" draggable="false">
                        </div>`).join('')}
                </div>
                <button class="carousel__btn carousel__btn--prev" type="button" aria-label="Foto anterior">
                    <span aria-hidden="true">‹</span>
                </button>
                <button class="carousel__btn carousel__btn--next" type="button" aria-label="Foto siguiente">
                    <span aria-hidden="true">›</span>
                </button>
            </div>
            <div class="carousel__dots"></div>
        </div>`;
}

function detenerCarrusel() {
    if (carruselActivo) carruselActivo.destruir();
    carruselActivo = null;
}

function iniciarCarrusel(raiz) {
    detenerCarrusel();
    if (!raiz) return;

    const viewport = $('.carousel__viewport', raiz);
    const track = $('.carousel__track', raiz);
    const puntos = $('.carousel__dots', raiz);
    const btnPrev = $('.carousel__btn--prev', raiz);
    const btnNext = $('.carousel__btn--next', raiz);
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let indice = 0;
    let timer = null;
    let pausado = false;

    const slides = () => $$('.carousel__slide', raiz);

    function dibujarPuntos() {
        const n = slides().length;
        puntos.innerHTML = n > 1
            ? slides().map((_, i) => `<button type="button" class="carousel__dot" data-ir="${i}" aria-label="Ver foto ${i + 1}"></button>`).join('')
            : '';
    }

    function actualizar() {
        const lista = slides();
        const n = lista.length;
        raiz.classList.toggle('is-single', n <= 1);

        track.style.transform = `translateX(-${indice * 100}%)`;
        lista.forEach((s, i) => {
            const activa = i === indice;
            s.setAttribute('aria-label', `${i + 1} de ${n}`);
            s.setAttribute('aria-hidden', String(!activa));
            s.inert = !activa;
        });
        $$('.carousel__dot', raiz).forEach((d, i) => {
            if (i === indice) d.setAttribute('aria-current', 'true');
            else d.removeAttribute('aria-current');
        });
    }

    function ir(i) {
        const n = slides().length;
        if (!n) return;
        indice = (i + n) % n;
        actualizar();
    }

    function iniciarAuto() {
        clearInterval(timer);
        if (sinMovimiento || pausado || slides().length <= 1) return;
        timer = setInterval(() => ir(indice + 1), AUTOPLAY_MS);
    }

    function pausar() { pausado = true; clearInterval(timer); }
    function reanudar() { pausado = false; iniciarAuto(); }

    // Botones y puntos
    btnPrev.addEventListener('click', () => { ir(indice - 1); iniciarAuto(); });
    btnNext.addEventListener('click', () => { ir(indice + 1); iniciarAuto(); });
    puntos.addEventListener('click', (ev) => {
        const punto = ev.target.closest('[data-ir]');
        if (punto) { ir(Number(punto.dataset.ir)); iniciarAuto(); }
    });

    // Teclado: flechas izquierda / derecha
    raiz.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowLeft') { ir(indice - 1); ev.preventDefault(); }
        if (ev.key === 'ArrowRight') { ir(indice + 1); ev.preventDefault(); }
    });

    // Pausa al pasar el mouse o al enfocar con teclado
    raiz.addEventListener('mouseenter', pausar);
    raiz.addEventListener('mouseleave', reanudar);
    raiz.addEventListener('focusin', pausar);
    raiz.addEventListener('focusout', (ev) => { if (!raiz.contains(ev.relatedTarget)) reanudar(); });

    // Deslizar con el dedo (celulares)
    let inicioX = null;
    viewport.addEventListener('pointerdown', (ev) => {
        if (ev.target.closest('.carousel__btn')) return;
        inicioX = ev.clientX;
    });
    viewport.addEventListener('pointerup', (ev) => {
        if (inicioX === null) return;
        const dx = ev.clientX - inicioX;
        inicioX = null;
        if (Math.abs(dx) > 40) { ir(dx < 0 ? indice + 1 : indice - 1); iniciarAuto(); }
    });
    viewport.addEventListener('pointercancel', () => { inicioX = null; });

    dibujarPuntos();
    actualizar();
    iniciarAuto();

    carruselActivo = {
        raiz,
        /** Quita una foto que no se pudo cargar */
        quitar(slide) {
            const pos = slides().indexOf(slide);
            if (pos === -1) return;
            slide.remove();
            const n = slides().length;
            if (!n) viewport.classList.add('is-missing');   // ninguna foto: muestra la inicial
            if (pos < indice || indice >= n) indice = Math.max(0, indice - 1);
            dibujarPuntos();
            actualizar();
            iniciarAuto();
        },
        destruir() { clearInterval(timer); },
    };
}

/* ==========================================================================
   4c. GALERÍA
   #/galeria                          → todas las categorías con sus álbumes
   #/galeria/danzas                   → solo los álbumes de una categoría
   #/galeria/danzas/festival-cultura  → todas las fotos de un álbum
   ========================================================================== */
let fotosVisibles = [];   // fotos que se están mostrando (para el visor)

function renderGaleria(filtro, albumId) {
    const filtros = $('#galeriaFiltros');
    const contenido = $('#galeriaContenido');
    const seccion = $('#view-galeria');
    if (!filtros || !contenido) return;

    const conFotos = CATEGORIAS_GALERIA.filter((c) => fotosDe(c.id).length);
    const categoria = buscarCategoria(filtro);
    const album = categoria ? buscarAlbum(categoria.id, albumId) : undefined;

    seccion.dataset.title = album
        ? `${album.titulo} | Galería`
        : categoria ? `Galería: ${categoria.nombre}` : 'Galería';

    // Botones de filtro
    const opciones = [{ id: '', nombre: 'Todas', total: GALERIA.length },
        ...conFotos.map((c) => ({ ...c, total: fotosDe(c.id).length }))];

    filtros.innerHTML = opciones.map((c) => {
        const activo = (c.id || undefined) === (categoria && categoria.id);
        return `
            <a class="filtro" href="#/galeria${c.id ? `/${c.id}` : ''}"${activo ? ' aria-current="page"' : ''}>
                ${esc(c.nombre)} <span class="filtro__n">${c.total}</span>
            </a>`;
    }).join('');

    // Un álbum abierto: se muestran todas sus fotos
    if (album) {
        renderAlbum(contenido, categoria, album);
        return;
    }

    // Categorías: todas, o solo la elegida (cada una con las portadas de sus álbumes)
    const grupos = categoria ? [categoria] : conFotos;
    fotosVisibles = [];

    if (!grupos.some((c) => fotosDe(c.id).length)) {
        contenido.innerHTML = '<p class="galeria-vacia">Todavía no hay fotos en esta categoría.</p>';
        return;
    }

    contenido.innerHTML = grupos.map((c) => `
            <section class="album" aria-labelledby="album-${c.id}">
                <header class="album__head">
                    <div>
                        <h2 id="album-${c.id}" class="section-title">${esc(c.nombre)}</h2>
                        ${c.descripcion ? `<p class="album__desc">${esc(c.descripcion)}</p>` : ''}
                    </div>
                    ${categoria ? '' : `<a class="album__more" href="#/galeria/${c.id}">Ver solo esta categoría</a>`}
                </header>
                <ul class="fotos">
                    ${fotosDe(c.id).map(portadaHTML).join('')}
                </ul>
            </section>`).join('');
}

/** Tarjeta de portada: al presionarla se abre el álbum con todas sus fotos */
function portadaHTML(a) {
    return `
        <li>
            <a class="foto foto--album" href="#/galeria/${esc(a.categoria)}/${esc(a.id)}">
                <span class="media" data-initial="${esc(a.titulo.charAt(0))}">
                    <img src="${esc(rutaSegura(a.src))}" alt="" class="${clasesAjuste(a)}" loading="lazy" decoding="async">
                    <span class="foto__badge">${textoFotos(a.fotos.length)}</span>
                </span>
                <span class="foto__cap">${esc(a.titulo)}</span>
                ${a.fecha ? `<span class="foto__meta">${esc(a.fecha)}</span>` : ''}
            </a>
        </li>`;
}

/** Vista de un álbum: todas sus fotos; al presionar una se abre el visor */
function renderAlbum(contenido, categoria, album) {
    fotosVisibles = album.fotos.map((f, i) => ({
        ...f,
        titulo: album.titulo,
        categoria: album.categoria,
        fecha: album.fecha,
        alt: f.alt || `${album.titulo}: foto ${i + 1}`,
    }));
    const total = fotosVisibles.length;
    const detalles = [album.descripcion, album.fecha, textoFotos(total)].filter(Boolean);

    contenido.innerHTML = `
        <section class="album album--abierto" aria-labelledby="album-abierto">
            <a class="album__volver" href="#/galeria/${esc(categoria.id)}">‹ Volver a ${esc(categoria.nombre)}</a>
            <header class="album__head">
                <div>
                    <h2 id="album-abierto" class="section-title">${esc(album.titulo)}</h2>
                    <p class="album__desc">${detalles.map(esc).join(' | ')}</p>
                </div>
            </header>
            <ul class="fotos fotos--album">
                ${fotosVisibles.map((f, i) => `
                    <li>
                        <button class="foto" type="button" data-foto="${i}" aria-label="Ver foto ${i + 1} de ${total}">
                            <span class="media" data-initial="${esc(album.titulo.charAt(0))}">
                                <img src="${esc(rutaSegura(f.src))}" alt="${esc(f.alt)}" class="${clasesAjuste(f)}" loading="lazy" decoding="async">
                            </span>
                        </button>
                    </li>`).join('')}
            </ul>
        </section>`;
}

/* ---------- Visor de fotos (pantalla completa) ---------- */
let posVisor = 0;

function setupGaleria() {
    const contenido = $('#galeriaContenido');
    const visor = $('#lightbox');
    if (!contenido || !visor) return;

    contenido.addEventListener('click', (ev) => {
        const boton = ev.target.closest('[data-foto]');
        if (boton) abrirVisor(Number(boton.dataset.foto));
    });

    $('.lightbox__close', visor).addEventListener('click', () => visor.close());
    $('.lightbox__btn--prev', visor).addEventListener('click', () => moverVisor(-1));
    $('.lightbox__btn--next', visor).addEventListener('click', () => moverVisor(1));

    // Clic en el fondo oscuro: cierra
    visor.addEventListener('click', (ev) => {
        if (ev.target === visor || ev.target.classList.contains('lightbox__figure')) visor.close();
    });

    // Teclado (Escape ya lo maneja <dialog>)
    visor.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowLeft') { moverVisor(-1); ev.preventDefault(); }
        if (ev.key === 'ArrowRight') { moverVisor(1); ev.preventDefault(); }
    });

    // Deslizar con el dedo
    let inicioX = null;
    visor.addEventListener('pointerdown', (ev) => { inicioX = ev.clientX; });
    visor.addEventListener('pointerup', (ev) => {
        if (inicioX === null) return;
        const dx = ev.clientX - inicioX;
        inicioX = null;
        if (Math.abs(dx) > 50) moverVisor(dx < 0 ? 1 : -1);
    });
}

function abrirVisor(pos) {
    const visor = $('#lightbox');
    if (!visor || !fotosVisibles.length) return;
    posVisor = pos;
    mostrarFotoVisor();
    if (!visor.open) visor.showModal();
}

function moverVisor(paso) {
    const n = fotosVisibles.length;
    if (n <= 1) return;
    posVisor = (posVisor + paso + n) % n;
    mostrarFotoVisor();
}

function mostrarFotoVisor() {
    const visor = $('#lightbox');
    const f = fotosVisibles[posVisor];
    if (!visor || !f) return;

    const figura = $('.lightbox__figure', visor);
    const img = $('.lightbox__img', visor);
    const categoria = buscarCategoria(f.categoria);
    const n = fotosVisibles.length;

    figura.classList.remove('is-missing');
    img.src = rutaSegura(f.src);
    img.alt = f.alt || f.titulo;
    $('.lightbox__title', visor).textContent = f.titulo;
    $('.lightbox__meta', visor).textContent =
        [categoria && categoria.nombre, f.fecha, `${posVisor + 1} de ${n}`].filter(Boolean).join(' | ');
    visor.classList.toggle('is-single', n <= 1);
}

function cerrarVisor() {
    const visor = $('#lightbox');
    if (visor && visor.open) visor.close();
}

/* ==========================================================================
   5. RUTAS
   #/                        → inicio
   #/especialidades          → catálogo
   #/especialidad/software   → detalle
   Con rutas, el botón "atrás" del navegador funciona y los enlaces se
   pueden compartir directamente.
   ========================================================================== */
function leerRuta() {
    const partes = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/');
    const [vista, id, sub] = partes;

    if (!vista) return { vista: 'inicio' };
    if (vista === 'galeria') {
        const cat = buscarCategoria(id) ? id : undefined;
        const album = cat && buscarAlbum(cat, sub) ? sub : undefined;
        return { vista: 'galeria', id: cat, album };
    }
    if (vista === 'especialidad' && buscarEspecialidad(id)) return { vista: 'especialidad', id };
    if (VISTAS.includes(vista)) return { vista };
    if (buscarEspecialidad(vista)) return { vista: 'especialidad', id: vista }; // compatibilidad: #software
    return { vista: 'inicio' };
}

let vistaAnterior = null;

function navegar({ inicial = false } = {}) {
    const { vista, id, album } = leerRuta();

    // Cambiar de filtro dentro de la galería no debe saltar al inicio de la página
    // (pero entrar o salir de un álbum sí vuelve arriba)
    const clave = album ? 'galeria-album' : vista;
    const soloFiltro = clave === 'galeria' && vistaAnterior === 'galeria';
    vistaAnterior = clave;

    cerrarVisor();
    if (vista === 'especialidad') renderDetalle(buscarEspecialidad(id));
    else detenerCarrusel();
    if (vista === 'galeria') renderGaleria(id, album);

    $$('.view').forEach((v) => { v.hidden = v.id !== `view-${vista}`; });
    const actual = $(`#view-${vista}`);

    // Menú: el detalle de una especialidad pertenece a "Especialidades"
    const seccionMenu = vista === 'especialidad' ? 'especialidades' : vista;
    $$('.nav__link').forEach((link) => {
        if (link.dataset.route === seccionMenu) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });

    cerrarMenu();
    document.title = `${actual.dataset.title} | ${NOMBRE_SITIO}`;

    if (!inicial && !soloFiltro) {
        window.scrollTo(0, 0);
        // Mueve el foco al título para lectores de pantalla y teclado
        const titulo = actual.querySelector('h1');
        if (titulo) titulo.focus({ preventScroll: true });
    }
}

/* ==========================================================================
   6. INTERFAZ
   ========================================================================== */

/** Si falta una imagen, se muestra un respaldo cuadriculado con la inicial */
function setupImagenesRespaldo() {
    document.addEventListener('error', (evento) => {
        const img = evento.target;
        if (!(img instanceof HTMLImageElement)) return;

        // Foto del carrusel que no existe: se quita y el carrusel sigue con las demás
        const slide = img.closest('.carousel__slide');
        if (slide) {
            if (carruselActivo) carruselActivo.quitar(slide);
            return;
        }

        // Foto del visor que no existe: muestra un aviso
        if (img.matches('.lightbox__img')) {
            img.closest('.lightbox__figure').classList.add('is-missing');
            return;
        }

        const media = img.closest('.media');
        if (media) media.classList.add('is-missing');
        else if (img.matches('.brand__logo, .hero__img')) img.classList.add('is-missing');
    }, true);
}

/** Sombra del encabezado al hacer scroll (con requestAnimationFrame) */
function setupHeader() {
    const header = $('#mainHeader');
    if (!header) return;

    let pendiente = false;
    const actualizar = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
        pendiente = false;
    };

    window.addEventListener('scroll', () => {
        if (!pendiente) {
            requestAnimationFrame(actualizar);
            pendiente = true;
        }
    }, { passive: true });

    actualizar();
}

/** Menú móvil accesible: aria-expanded, Escape y clic afuera */
function setupMenuMovil() {
    const boton = $('#navToggle');
    const menu = $('#navMenu');
    if (!boton || !menu) return;

    boton.addEventListener('click', () => {
        abrirMenu(boton.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('click', (e) => {
        if (menuAbierto() && !menu.contains(e.target) && !boton.contains(e.target)) cerrarMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuAbierto()) {
            cerrarMenu();
            boton.focus();
        }
    });
}

function menuAbierto() {
    return $('#navToggle')?.getAttribute('aria-expanded') === 'true';
}

function abrirMenu(abrir) {
    const boton = $('#navToggle');
    const menu = $('#navMenu');
    if (!boton || !menu) return;
    boton.setAttribute('aria-expanded', String(abrir));
    menu.classList.toggle('is-open', abrir);
}

function cerrarMenu() {
    abrirMenu(false);
}
/** Carrusel de la portada: cambia de foto cada 6 s, con puntos para elegir */
function setupPortada() {
    const contenedor = $('[data-hero-slides]');
    const puntos = $('[data-hero-dots]');
    if (!contenedor || !puntos) return;

    let fotos = [];
    let indice = 0;
    let timer = null;
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function dibujar() {
        fotos = $$('.hero__img:not(.is-missing)', contenedor);
        puntos.innerHTML = fotos.length > 1
            ? fotos.map((_, i) => `<button type="button" class="hero__dot" data-ir="${i}" aria-label="Ver foto ${i + 1} de la portada"></button>`).join('')
            : '';
        mostrar(Math.min(indice, fotos.length - 1));
    }

    /** Carga la foto solo cuando se va a mostrar (las demás no se descargan al abrir la página) */
    function cargar(img) {
        if (img && img.dataset.src) { img.src = img.dataset.src; delete img.dataset.src; }
    }

    function mostrar(i) {
        if (!fotos.length) return;
        indice = (i + fotos.length) % fotos.length;
        cargar(fotos[indice]);
        cargar(fotos[(indice + 1) % fotos.length]);   // deja lista la siguiente
        fotos.forEach((f, n) => f.classList.toggle('is-active', n === indice));
        $$('.hero__dot', puntos).forEach((d, n) => {
            if (n === indice) d.setAttribute('aria-current', 'true');
            else d.removeAttribute('aria-current');
        });
    }

    function iniciar() {
        clearInterval(timer);
        if (!sinMovimiento && fotos.length > 1) {
            timer = setInterval(() => {
                // Solo avanza si la portada está a la vista
                if (!document.hidden && !contenedor.closest('.view').hidden) mostrar(indice + 1);
            }, 6000);
        }
    }

    puntos.addEventListener('click', (ev) => {
        const punto = ev.target.closest('[data-ir]');
        if (punto) { mostrar(Number(punto.dataset.ir)); iniciar(); }
    });

    // Si una foto no existe, se quita del carrusel
    contenedor.addEventListener('error', (ev) => {
        if (ev.target.matches('.hero__img')) { ev.target.classList.add('is-missing'); dibujar(); iniciar(); }
    }, true);

    dibujar();
    iniciar();
}

/** Botón "volver arriba": aparece al bajar más de una pantalla */
function setupVolverArriba() {
    const boton = $('#toTop');
    if (!boton) return;

    let pendiente = false;
    const actualizar = () => {
        const ocultar = window.scrollY < window.innerHeight;
        if (boton.hidden !== ocultar) boton.hidden = ocultar;
        pendiente = false;
    };
    window.addEventListener('scroll', () => {
        if (!pendiente) { requestAnimationFrame(actualizar); pendiente = true; }
    }, { passive: true });
    actualizar();

    boton.addEventListener('click', (ev) => {
        ev.preventDefault();
        const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: suave ? 'smooth' : 'auto' });
        $('#contenido').focus({ preventScroll: true });
    });
}
