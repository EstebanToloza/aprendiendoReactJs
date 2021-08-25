//import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar hola + nombre', () => {
        
        const nombre = 'Esteban';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre); 
    })    

    // getSaludo debe retornar 'Hola Carlos' si no hay argumento en nombre
    test('getSaludo debe retornar hola + Carlos si no hay argumento', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos'); 
    })    
});


    

