export interface Items {
  name: string;
  plaintext: string;
  gold: {
    base: number;
    total: number;
    sell: number;
  };
  image: {
    full: string;
    sprite: string;
  };
}
