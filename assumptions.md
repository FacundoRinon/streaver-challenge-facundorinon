# Assumptions

- The first assumption was that both the frontend and backend were expected to coexist within the same Next.js project, taking advantage of the framework’s capabilities.

- From a design perspective, I decided to display posts as smaller cards on the main listing page. Each card allows navigation to a detail page where the full post can be read.

- From an architectural standpoint, I opted to use a simple and modular one, while allowing for simulated scalability by creating post-related folders inside app/api, components, and lib. This decision aims to keep responsibilities clear without adding unnecessary complexity.

- I considered the possibility of creating a more robust structure based on repositories, repository implementations, and use cases. However, given the scope of the challenge, I chose to keep the solution simple, practical, and aligned with what was requested.

- In the lib/posts/api.ts file, I left a line with `setTimeout` commented out in order to simulate slow network conditions and facilitate testing of the optional Step 5 functionality.

# Suposiciones

- Lo primero que asumí fue que se esperaba que tanto el frontend como el backend debían convivir dentro del mismo proyecto Next.js, aprovechando así las capacidades del framework.

- A nivel de diseño, tomé la decisión de mostrar los posteos en tarjetas más pequeñas dentro de la página principal del listado. Cada tarjeta permite navegar a una página de detalle donde se puede leer el post completo.

- A nivel de arquitectura, opté por emplear una simple y modularizada, pero me tomé la libertad de simular que el proyecto podría escalar, creando carpetas de posts dentro de app/api, components y lib. Esta decisión busca mantener responsabilidades claras sin agregar complejidad innecesaria.

- Consideré la posibilidad de crear una estructura más robusta basada en repositorios, implementaciones de repositorios y casos de uso. Sin embargo, dado el alcance del desafío, opté por mantener la solución simple, practica y alineada con lo solicitado.

- En el archivo lib/posts/api.ts, mantuve comentada una línea con `setTimeout` para que sea posible simular condiciones de red lenta y facilitar la prueba de la funcionalidad opcional del Step 5 del desafío.
