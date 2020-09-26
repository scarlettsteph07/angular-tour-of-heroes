import * as fromHero from './hero.actions';

describe('loadHeroes', () => {
  it('should return an action', () => {
    expect(fromHero.loadHeroes().type).toBe('[Hero] Load Heroes');
  });
});
