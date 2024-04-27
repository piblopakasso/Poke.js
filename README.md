
![PokeLogo](src/images/PokeLogoVerticalSmall.webp)

# Poke

Hi! :hand:

This is a relatively small home project the main idea of which was to develop my skills in React and widely used
technologies at the same time in programming overall. I thought that it would be interesting to base the project on
something fun and adorable. Once I found out that there exists a website/API that suits me, and it is about Pokémon,
it was not necessary to search anything else. As a result, I believe it was a successful choice. :relaxed:  

## What were used here?

- Base :muscle:
  - [PokeAPI](https://pokeapi.co/ "PokeAPI Homepage")

    In general, PokeAPI is a website that provides a RESTful API interface for accessing tons of highly
    detailed data on the basis of the 'Pokémon' video game franchise.


- Fetching :fishing_pole_and_fish:
  - [TanStack Query](https://tanstack.com/query/latest "TanStack Query Homepage")

    To help me deal with all tasks where fetching was involved

    
- Routing :airplane:
  - [React Router](https://reactrouter.com/en/main "React Router Homepage")

    To make routing easier and more efficient.


- Styling :shirt:
  - [Styled Components](https://styled-components.com/ "Styled Components Homepage")

    To change working with CSS in a more enjoyable way. 

 
- Code Formating :triangular_ruler:
  - [Prettier](https://prettier.io/ "Prettier Homepage")

    To format all the written code to meet nice-looking standards.


(Probably, the next parts of this file won`t be very useful for anybody, still they look nice, so I decided to keep them) :wink:

## Installation

Use the package manager [npm](https://nodejs.org/en/download) to install dependencies.

```shell
# in project root folder
npm install
```

## Usage

### Development mode
```shell
$ npm start

> webpack-react@1.0.0 start
> webpack serve --config webpack.dev.js

[webpack-dev-server] Project is running at:
[webpack-dev-server] Loopback: http://localhost:8080/
...
```

### Production mode
```shell
$ npm run build

> webpack-react@1.0.0 build
> webpack --config webpack.prod.js
...
```
