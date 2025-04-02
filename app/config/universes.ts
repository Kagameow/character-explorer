import type { UniverseConfig } from '../types/universeConfig'
import { LORD_OF_THE_RINGS_UNIVERSE_CONFIG, LORD_OF_THE_RINGS_UNIVERSE_KEY } from './lord-of-the-rings'
import { POKEMON_UNIVERSE_CONFIG, POKEMON_UNIVERSE_KEY } from './pokemon'
import { RICK_AND_MORTY_UNIVERSE_CONFIG, RICK_AND_MORTY_UNIVERSE_KEY } from './rick-and-morty'
import { STAR_WARS_UNIVERSE_CONFIG, STAR_WARS_UNIVERSE_KEY } from './star-wars'

export const UNIVERSES_CONFIG = new Map<string, UniverseConfig>(
  [
    [
      RICK_AND_MORTY_UNIVERSE_KEY,
      RICK_AND_MORTY_UNIVERSE_CONFIG,
    ],
    [
      POKEMON_UNIVERSE_KEY,
      POKEMON_UNIVERSE_CONFIG,
    ],
    [
      LORD_OF_THE_RINGS_UNIVERSE_KEY,
      LORD_OF_THE_RINGS_UNIVERSE_CONFIG,
    ],
    [
      STAR_WARS_UNIVERSE_KEY,
      STAR_WARS_UNIVERSE_CONFIG,
    ],
  ],
)

export const KNOWN_UNIVERSES_CONFIG = new Map(
  Array.from(UNIVERSES_CONFIG.entries()).filter(([_, config]) => {
    const token = config.apiPartyEndpoint?.token
    return token === undefined || token.trim() !== ''
  }),
)

export const ALLOWED_UNIVERSES_KEYS = Array.from(KNOWN_UNIVERSES_CONFIG.keys())

export const API_PARTY_ENDPOINTS = Object.fromEntries(
  Array.from(KNOWN_UNIVERSES_CONFIG.entries())
    .filter(([_, config]) => config.apiPartyEndpoint)
    .map(([key, config]) => [key, config.apiPartyEndpoint!]),
)
