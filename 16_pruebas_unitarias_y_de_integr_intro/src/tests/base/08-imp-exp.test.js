import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones de Heros', () => {
    
    test('debe de retornar un heroe por ID ', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );
        //console.log(heroe)

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
    });

    test('debe de retornar undefined por ID inexistente ', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );
        //console.log(heroe)

        expect( heroe ).toBe( undefined );
    });

    test('debe de retornar un arreglo con los heroes de DC ', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData );
    });

    test('debe de retornar un arreglo con los heroes de Marvel ', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );
    });
    
    

})
