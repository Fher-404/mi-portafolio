/* Configuración de flags de Zone.js para Angular. Permite optimizar el rendimiento al 
deshabilitar el seguimiento de ciertos eventos que no son necesario para el correcto 
funcionamiento de la aplicación.
*/

/**
 * Deshabilita el seguimiento de cambios en Web Components
 * Esto mejora el rendimiento al evitar ejecuciones innecesarias
 */
// eslint-disable-next-line no-underscore-dangle
(window as any).__Zone_disable_customElements = true;
