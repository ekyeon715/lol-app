export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  image: {
    full: string;
    sprite: string;
  };
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}
