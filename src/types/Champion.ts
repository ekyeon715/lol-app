export interface Champion {
  key: string;
  name: string;
  title: string;
  lore: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}
