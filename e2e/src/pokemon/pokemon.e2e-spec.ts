import { browser, logging } from 'protractor';
import { PokemonPage } from './pokemon.po';

describe('宠物小精灵', () => {
  let pokemonPage: PokemonPage;

  beforeEach(() => {
    pokemonPage = new PokemonPage();
  });

  it('查找小精灵', () => {
    pokemonPage.navigateTo();
    // expect(page.getTitleText()).toEqual('Welcome to angularIoE2e!');
  });

  it('计算小精灵数量', () => {
    pokemonPage.navigateTo();
    expect(pokemonPage.getPokemonCardElements().count()).toBe(151);
  });

  it('查看特定的小精灵', () => {
    pokemonPage.navigateTo();
    pokemonPage.getFirstPokemonCardElement().click();

    expect(pokemonPage.getOpenModalElement()).toBeTruthy();
    expect(pokemonPage.getOpenModalHeadingElement().getText()).toBe('Bulbasaur #1');
  });

  it('允许箭头键在小精灵之间导航', () => {
    pokemonPage.navigateTo();
    pokemonPage.getFirstPokemonCardElement().click();
    pokemonPage.selectNextKey();

    expect(pokemonPage.getOpenModalHeadingElement().getText()).toBe('Ivysaur #2');

    pokemonPage.selectPrevKey();
    pokemonPage.selectPrevKey();
    expect(pokemonPage.getOpenModalHeadingElement().getText()).toBe('Mew #151');
  });
});
