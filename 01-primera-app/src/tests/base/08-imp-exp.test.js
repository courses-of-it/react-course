import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp' 
import heroes from '../../data/heroes'

describe("Pruebas en 08-imp-exp", () => {
    test('debe retornar un heroe por id', () => {
	const id = 1
	const heroe = getHeroeById(id)

	const heroeData = heroes.find(h => h.id === id)

	expect(heroe).toEqual(heroeData)
    })
    test('debe retornar undefined sino existe el heroe', () => {
	const id = 22
	const heroe = getHeroeById(id)

	expect(heroe).toBe(undefined)
    })
    test('debe retornar los heroes de dc', () => {
	const owner = 'DC'

	const herosDc = getHeroesByOwner(owner)
	const heroesFiltered = heroes.filter(heroe => heroe.owner === owner)
	expect(herosDc).toEqual(heroesFiltered)
    })
    test('debe retornar un arrray con el length de los heroes de Marvel (2)', () => {
	const owner = 'Marvel'

	const heroesMarvel = getHeroesByOwner(owner)
	expect(heroesMarvel.length).toBe(2)
    })

})
