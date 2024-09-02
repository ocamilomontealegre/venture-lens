# Proyecto de Captura y Galería de Imágenes

Este proyecto permite a los usuarios tomar fotos y visualizarlas en una galería. Utiliza Firebase para la autenticación y almacenamiento de imágenes.

## Tecnologías Usadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **Firebase**: Para autenticación y almacenamiento de imágenes.
- **Tailwind CSS**: Para el diseño y estilo de la interfaz de usuario.
- **React Router**: Para la navegación entre las diferentes páginas de la aplicación.

## Instalación

1. **Clona el repositorio**:

    ```bash
    git clone https://github.com/ocamilomontealegre/venture-lens.git
    cd tu-repositorio
    ```

2. **Instala las dependencias**:

    ```bash
    pnpm install
    ```

3. **Configura Firebase**:

    - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
    - Configura la autenticación y el almacenamiento en Firebase.
    ```

4. **Inicia el servidor de desarrollo**:

    ```bash
    pnpm run dev
    ```

## Uso

1. **Autenticación**:
    - Los usuarios pueden iniciar sesión con su correo electrónico o mediante Google.

2. **Captura de Imágenes**:
    - Los usuarios pueden tomar fotos y subirlas a Firebase Storage.

3. **Galería**:
    - Las imágenes subidas se muestran en una galería.

## Estructura del Proyecto

- `src/`
- `common/`: Componentes y utilidades compartidos en toda la aplicación.
- `components/`: Componentes reutilizables de React.
- `layouts/`: Diseño y estructura de las diferentes páginas.
- `pages/`: Componentes de página para diferentes vistas.
- `router/`: Configuración de rutas y navegación.
- `sections/`: Secciones específicas de la interfaz, como encabezados y pies de página.
- `services/`: Servicios para interactuar con Firebase y otros recursos externos.
- `App.tsx`: Componente principal de la aplicación.
- `index.tsx`: Punto de entrada de la aplicación.

Para cualquier pregunta o comentario, por favor contacta a [ocamilomontealegre@gmail.com](mailto:ocamilomontealegre@gmail.com).