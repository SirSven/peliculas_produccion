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

1.- Arrancar server localmente:

```bash
  npm run dev
```

2.- Probar API:

```bash
  GET http://localhost:3000/

  # respuesta

  {
    "name": "Peliculas-produccion",
    "version": "v1.0"
  }
```

## Documentacion

Importar la coleccion y el ambiente de postman que esta ubicada dentro del directorio: `documentacion/`

### Variables de ambiente

- {{app_url_local}}
- {{app_url_prod}}

### Buscar peliculas

Abrir la coleccion obtener peliculas. Seleccionar los filtros deseados, si no se pasa ningun filtro mostrara todos las peliculas existentes

 ```bash
  GET {{app_url_prod}}/peliculas?director=Jayendra&release_year=2011
  
  # respuesta

  {
    "data": [
        {
            "_id": "62f150c8398af5ac0ff1cbc2",
            "title": "180",
            "release_year": "2011",
            "locations": "Epic Roasthouse (399 Embarcadero)",
            "coordinates": "37.79100793548643, -122.3894467440828",
            "production_company": "SPI Cinemas",
            "director": "Jayendra",
            "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba",
            "actor_1": "Siddarth",
            "actor_2": "Nithya Menon",
            "actor_3": "Priya Anand"
        },
        {
            "_id": "62f150c8398af5ac0ff1cbc5",
            "title": "180",
            "release_year": "2011",
            "locations": "200 block Market Street",
            "coordinates": "37.79331820061665, -122.39656668826257",
            "production_company": "SPI Cinemas",
            "director": "Jayendra",
            "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba",
            "actor_1": "Siddarth",
            "actor_2": "Nithya Menon",
            "actor_3": "Priya Anand"
        }
    ],
    "contador": 2
}
```

### Crear Peliculas

 ```bash
  POST {{app_url_prod}}/peliculas

# cuerpo

  {
    "title": "Star Wars 3",
    "release_year": "2005",
    "locations": "Nueva Zelanda",
    "production_company": "Lucasfilms",
    "director": "George Lucas",
    "writer": "Dave Filoni, George Lucas",
    "actor_2": "Hayden Christensen",
    "actor_3": "Natalie Portman"
  }
```

### Ambientes

- url local: <http://localhost:3000>

- url prod: <https://peliculas-produccion.herokuapp.com>

### Autor

- Uriel Romero (<https://github.com/SirSven>)

### Retroalimentacion

Para resolucion de dudas o sugerencias: uriel.romerov@outlook.com
