// Datos personales del sitio. Edita aquí y se actualizan en todas las páginas.
export const perfil = {
  nombre: 'Luis Garzón',
  rol: 'UX Writer & Content Designer',
  // Deja en blanco lo que no quieras mostrar; el enlace se oculta solo.
  email: '',
  linkedin: '',
  cv: '',
};

/** Construye una ruta interna respetando la `base` del sitio. */
export const url = (ruta = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${ruta.replace(/^\//, '')}`;
