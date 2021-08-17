import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'

describe("Pruebas en 09-promesas", () => {
    test("getHeroeByIdAsync debe retornar un heroe async", ( done ) => {
	const id = 1 
	getHeroeByIdAsync(id)
	.then(heroe => {
	    expect( heroe ).toBe( heroes[heroe.id - 1] )
	    done()
	})
    })
    test("getHeroeByIdAsync debe retornar un error si no existe el heroe", ( done ) => { 
	const id = 10 
	getHeroeByIdAsync(id)
	.catch(err => {
	    expect(err).toBe('No se pudo encontrar el héroe')
	    done()
	})
    })
})
