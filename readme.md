# 🥤 Proyecto "Sodas"

Este es un proyecto interactivo desarrollado con **HTML**, **CSS** y **JavaScript** que muestra diferentes sabores de soda (Pera, Manzana y Exótica) mediante una animación visual fluida. La interfaz permite navegar entre los sabores y visualizarlos con imágenes, colores y efectos dinámicos.

## 📸 Vista previa

> El usuario puede desplazarse entre sabores usando los botones de navegación laterales. Cada sabor tiene su propio fondo, animaciones de frutas flotantes y una imagen de sabor sobre una lata con efecto de máscara.

---

## 🚀 Funcionalidad

- Navegación con botones laterales (`btnIzq` y `btnDer`)
- Transición suave entre sabores con `CSS Variables`
- Máscara SVG sobre imagen para simular el diseño de la lata
- Animaciones flotantes de frutas con `@keyframes`
- Reinicio de animación del título al cambiar de sabor

---


---

## 🛠️ Tecnologías Usadas

- **HTML5** - estructura del proyecto
- **CSS3** - estilos, animaciones y máscara SVG
- **JavaScript Vanilla** - navegación y control dinámico de animaciones

---

## 🧠 Cómo funciona

- Se define una variable CSS `--position` que controla la posición actual (0 = Pera, 1 = Manzana, 2 = Exótica).
- Los botones modifican `--position`, lo que desplaza la sección y actualiza el fondo.
- El `mask` de CSS en `.sabor` aplica una máscara SVG sobre la imagen del sabor.
- Al cambiar de sección, el título (`<h2>`) vuelve a animarse desde arriba mediante una reinicialización forzada (`heading.offsetWidth`).

---

## ✅ Requisitos para correr el proyecto

Solo necesitas un navegador moderno. Si usas rutas locales (`./`), asegúrate de correr el proyecto desde un servidor local (por ejemplo, con **Live Server** en VS Code), para evitar errores de carga de imágenes o scripts.

---

## 💡 Mejora futura

- Agregar una barra de navegación inferior con íconos
- Incluir más sabores de soda
- Añadir sonido o efectos al cambiar de sabor
- Optimizar para dispositivos móviles

---

## 👨‍💻 Autor

**Jesús Franco**  
Diseño, lógica y animaciones implementadas manualmente.

---



