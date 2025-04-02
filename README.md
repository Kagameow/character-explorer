# ✨ Character Explorer

**Fact-check your fandom.** A Nuxt 3-powered app for exploring characters from multiple universes — including Rick & Morty, Pokémon, and more.

## 💪 Try It Yourself

https://gleaming-madeleine-abf8bb.netlify.app/

```bash
# Install dependencies
pnpm install

# Run in dev mode
pnpm run dev

# Optional: set token for LOTR in .env, otherwise it will be disabled
# LOTR API token can be obtained from https://the-one-api.dev/
# proper auth page for this API could be implemented, 
# but it is a little bit out of scope for this assignment :D 

NUXT_PUBLIC_API_PARTY_LOTR_TOKEN=your-token-here
```

## 🚀 Features
- **Multi-Universe Support**: Explore characters from different universes.
- **View Modes Persistence**: Toggle between grid and list views, with the last selected mode remembered. Also, view mode can be shared via URL query. Cookies are used to store the last selected view mode because of compatability with Nuxt.
- **Pagination**: Navigate through character lists with pagination. Current page is also sharable via URL query.
- **No Hard-Coding**: The app is designed to be scalable and reusable, with dynamic components and routes that are universe-agnostic.

### 🛠️ Config-Driven Architecture
Add new universes with just one config entry — no logic branching or duplication required.

To add a new universe:

- **Create a data fetch handler** under `app/composables/<universe>/`. Needed types can be found or added in the `app/types` folder:

  ```ts
  interface UniverseHandlers {
    list: (query: PageCharacterListPaginationQuery) => Promise<PageCharacterListHandlerResponse>
    details: (id: string | number) => Promise<PageCharacterHandlerResponse>
  }

  export async function useStarWarsList(...) { ... }
  export async function useStarWarsDetail(...) { ... }
  ```

- **Create an API response transformer** under `app/composables/<universe>/transformers.ts`:

  ```ts
  export function transformStarWarsListResponse(response): PageCharacterListHandlerResponse {
    // Transform the response to the expected format
  }

  export function transformStarWarsDetailResponse(response): PageCharacterHandlerResponse {
    // Transform the response to the expected format
  }
  ```

- **Create a config file** under `/config/<universe>.ts`:

  ```ts
  export const STAR_WARS_UNIVERSE_KEY = 'star-wars'

  export const STAR_WARS_UNIVERSE_CONFIG: UniverseConfig = {
    name: 'Star Wars',
    logo: 'https://example.com/star-wars-logo.svg',
    icon: 'https://example.com/icon.svg',
    description: 'Explore characters from a galaxy far, far away.',
    handlers: {
      list: useStarWarsList,
      details: useStarWarsDetail,
    },
    defaultQueryParams: {
      page: 1,
      perPage: 10,
    },
    apiPartyEndpoint: {
      url: 'https://starwars.api',
    },
  }
  ```

- **Import and register** it in `config/universes.ts`

That’s it! Your universe is now available site-wide.

## ⚡ Possible Improvements 
- **Configurable Pagination and Search**: Some universes may have different pagination requirements, or even no proper pagination at all. This implementation serves as a demonstration of the concept. More flexibility could be added to the pagination logic to handle different cases.
- **Customizable UI**: App provides a basic UI for character lists and detail pages. Support for custom UI components could be added to the config, allowing for more customisation per universe.
- **Authorization**: Currently, the LOTR API requires an authorization token. This could be handled more gracefully by implementing a proper auth page and storing the token on the client side. The current implementation simply checks for the token in the `.env` file.
- **Nuxt API Party Cache Bug**: Unfortunately, the Nuxt API Party package has a [bug](https://github.com/johannschopplich/nuxt-api-party/issues/91) that prevents it from properly handling cache with newer Nuxt versions. With a proper effort this bug could be fixed, but my time was limited. The current implementation disables cache to avoid the bug, but it is not ideal.

## 🤝 Attribution

- Assignment by [Visma | ProActive](https://proactive-software.com/en/)
- Rick & Morty API: https://rickandmortyapi.com
- Pokémon API: https://pokeapi.co
- LOTR API: https://the-one-api.dev/
- Star Wars API: https://swapi.dev/
