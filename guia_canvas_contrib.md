# Guía de Uso del Módulo Canvas (Contrib) en Drupal

## Introducción
El módulo **Canvas** para Drupal permite crear diseños personalizados mediante una interfaz visual, facilitando la gestión de esquemas de bloque sin necesidad de código. La versión contrib incluye mejoras como soporte para layout builder y funcionalidades avanzadas.

## Requisitos
- Drupal 8, 9 o 10
- Módulos dependientes: Layout Builder, Bootstrap (opcional)

## Instalación
1. **Descargar el módulo**: Usa Composer:
   ```bash
   composer require drupal/canvas
   ```
2. **Habilitar el módulo**: 
   - Navega a *Administración > Módulos*.
   - Activa **Canvas** y cualquier módulo dependiente.

## Configuración
1. **Permisos**:
   - Ve a *Administración > Usuarios > Permisos*.
   - Asigna permisos como *Administrar layouts* a los roles necesarios.
2. **Configuración del módulo**:
   - Accede a *Administración > Configuración > Canvas*.
   - Ajusta opciones como el modo de edición o la compatibilidad con Bootstrap.

## Uso Básico
### Crear un Layout
1. Edita una página o bloque.
2. En la sección *Layout*, selecciona **Canvas**.
3. Arrastra y suelta elementos en las regiones definidas.
4. Guarda los cambios y previsualiza en *Administración > Desarrollo > Previsualización*.

### Ejemplo: Agregar un Bloque
1. Ve a *Administración > Bloques*.
2. Arrastra un bloque a una región del layout Canvas.
3. Personaliza el contenido y guardarlo.

## Solución de Problemas
- **Layout no visible**: Verifica que el módulo esté habilitado y los permisos estén correctamente asignados.
- **Conflitos con otros módulos**: Deshabilita módulos no esenciales para probar.

## Buenas Prácticas
- Usa nombres descriptivos para los layouts.
- Mantén diseños responsivos con Bootstrap.
- Documenta los cambios en el repositorio.

## Recursos
- [Documentación oficial](https://www.drupal.org/project/canvas)
- [Foro de soporte](https://www.drupal.org/project/issues/canvas)