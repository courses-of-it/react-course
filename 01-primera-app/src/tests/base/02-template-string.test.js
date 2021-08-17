import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string'

describe('Pruebas en 02-template-string', () => {
    test('getSaludo test', () => {
	const nombre = 'Fernando'

	const saludo = getSaludo(nombre)

	expect(saludo).toBe(`Hola ${nombre}`)
    })
    test('getSaludo tendria retornar Hola Carlos sino hay parametros', () => {
	const saludo = getSaludo()

	expect(saludo).toBe(`Hola Carlos`)
    })
})
