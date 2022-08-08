# Peliculas_produccion

api que contiene datos de algunas peliculas que se han filmado en San Francisco y otras regiones.

## Tecnologias

**Server:** Node, Express
**Database:** MongoDB

## Instalacion

1.- Clonar el repositorio:

```bash
  git clone https://github.com/SirSven/peliculas_produccion.git
```
2.- Direccionarse al directorio donde se clono el proyecto.

3.- Instalar las dependencias:

```bash
  npm install
```

## Funcionamiento

1.- Arrancar server:

```bash
  npm run start
```

- Nota: El puerto del server es: 3000

2.- Probar API:

Hay 2 formas para probar la api.

 - Forma 1: crear un request del tipo GET, con este request se obtendran los datos de todas las peliculas, 

 ```bash
  GET http://localhost:3000/peliculas
```
Adicionalmente la api cuenta con filtrado por director y año.

 ```bash
  GET http://localhost:3000/peliculas?director=Jayendra&release_year=2011
```

- Forma 2: el directorio documentacion cuenta con una coleccion para probar por Postman.

### Autor

- UrielRomero (https://github.com/SirSven)

### Feedback

Para resolucion de dudas o sugerencias: uriel.romerov@outlook.com