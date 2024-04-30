
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

    The API for accessing tons of highly detailed data on the basis of the 'Pokémon' video game franchise.


- Fetching :fishing_pole_and_fish:
  - [TanStack Query](https://tanstack.com/query/latest "TanStack Query Homepage")

    To help me deal with all tasks where fetching was involved.

    
- Routing :airplane:
  - [React Router](https://reactrouter.com/en/main "React Router Homepage")

    To make routing easier and more efficient.


- Styling :shirt:
  - [Styled Components](https://styled-components.com/ "Styled Components Homepage")

    To change working with CSS in a more enjoyable way. 

 
- Code Formating :triangular_ruler:
  - [Prettier](https://prettier.io/ "Prettier Homepage")

    To format all the written code to meet nice-looking standards.


## Features

I believe it is also crucial to add some information about the implemented features in the project.

I can divide the project into three main parts. Considering that they require some knowledge
of the Pokémon universe, I'll do my best to describe each part briefly and comprehensibly. :wink:

### Pokedex

In the Pokémon universe, the Pokédex serves as the primary source for detailed information about Pokémon species.
My page functions similarly, but with additional features:

- Detailed description of the specie;
- Front and back variants of species images (poke the picture to flip it ("poke" got it? :smiley:));
- Ability to select different forms of a species, if applicable
  (some pokémon have multiple forms, each with its own parameters/types/abilities);;
- Animated changes of parameters when switching species/forms;
- Page styles adapt based on the primary type of the specie;
- Navigation arrows added for easy selection of the next or previous species.

### Catalog

This page contains a collection of Pokémon species that you might be interested in:

- Previews of species with general info about each;
- Each preview is automatically styled according to the primary Pokémon type;
- Clicking on a preview will direct you to the corresponding Pokedex page
(this applies to specific forms of Pokémon as well);
- Custom infinite scroll to enhance the number of Pokémon species previews.

### Search Bar

Due to limitation in the PokeAPI, it was necessary to develop fully custom search system. 
The search results of which depend on the chosen parameters and even the shown list of suggestions. 

- Two options for search: "by name" and "by type";

  By Name:

    - Auto-suggestion of potential search options;
    - Highlighting of the searched words/letters in the suggestions list;
    - Submitting a search request will lead to a different page based on the precision of your query 
  (This means that an exact match with the specie/form name will lead directly to its Pokedex page.
  In case of multiple suggestions for your query, you will be redirected to the Catalog page with the full 
  collection of suggested pokémon. :sweat_smile:).

  By Type:

    - Select your preferred type from the dropdown list to view all Pokémon of that type on the Catalog page.

## Installation

Use the package manager [npm](https://nodejs.org/en/download) to install dependencies.

```shell
# in project root folder
npm install
```

## Usage

### Development mode
```shell
npm start

...
```

### Production mode
```shell
npm run build

...
```
