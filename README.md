# MonoRepo con Lerna

**Código de ejemplo para una charla con los octogatos.**

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

[Presentación](https://docs.google.com/presentation/d/1kwRtkN3gPUrN-sXbHKL9x4ZncqFodFWHATS7qOWUsS8/edit?usp=sharing)


[Lerna](https://github.com/lerna/lerna) es una herramienta que te permite orquestar varios paquetes desde un mismo repo/folder, tiene varias ventajas si necesitas publicar o manejar varios componentes o proyectos que comparten código, pero no quieres tener que estar pendiente de varios repos.

Lerna te permite publicar cada proyecto de forma independiente, con la opción de tener sistemas de build e integraciones con diferentes herramientas independiente para cada proyecto, o compartir configuraciones entre todos.

## Instrucciones

**Practicar**
- Despues de clonar el repo, corre `lerna boostrap` para descargar las dependencias y hacer links entre los paquetes que se referencien
- Has cambios en los paquetes, y prueba los diferentes comandos mencionados en la presentación

**Publicar**

Si quieres practicar que pasa cuando publicas estos paquetes a Github, tienes que seguir unos pasos adicionales.

- Para publicar, crea una llave en github con los permisos de `write:packages`, en tus [settings](https://github.com/settings/tokens/new)
- Autenticate con Github Packages
  - Sigue [las instrucciones en Github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token) y pon la llave en el archivo `.npmrc` usando el formato ahi descrito, para poder autenticarte cuando te comunicas con github usando NPM
  - O usando `npm login --scope=@OWNER --registry=https://npm.pkg.github.com` usando el Token como contraseña
  - O utilizando la configuración disponible en package.json
- Cambia el nombre del registro en la configuración de Lerna (el de excerising no te va a dejar publicar sin acceso a escribir). Tienes que hacer el cambio en el package.json de cada uno de los folders que se encuentran en `packages`
  - Cambia `@exercising` a `@[USERNAME]`

```
{
  "name": "@exercising/styles",
  "version": "1.0.0"
  ...
}
```

- Hasle unos cambios a los archivos y sigue las instrucciones para publicar `lerna publish`
- Mira los paquetes en tu perfil de Github
- Cada paquete tiene una propiedad `publishConfig` que indica

<p align="center">
  <img alt="Lerna" src="https://cloud.githubusercontent.com/assets/952783/15271604/6da94f96-1a06-11e6-8b04-dc3171f79a90.png" background="white" width="480">
</p>

## Otros Articulos

Si te interesa aprender más, o quieres mirar otras explicaciones para aclarar consejos, te recomiendo estos articulos:

- [Cómo usar Lerna y publicar a github packages](https://www.hebergementwebs.com/nuevo/como-usar-lerna-para-crear-un-monorepo-para-multiples-paquetes-de-nodos)
- [Intro a Lerna](https://blog.kaleidos.net/Monorepos-con-Lerna/)
- [Porque Lerna es tan popular?](https://ichi.pro/es/por-que-lerna-es-tan-popular-entre-los-desarrolladores-263302322443242)
- [Lerna en stack overflow español](https://es.stackoverflow.com/questions/tagged/lerna)

