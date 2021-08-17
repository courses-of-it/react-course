import "@testing-library/jest-dom";

import React from "react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp/>", () => {
  /*test('debe de mostrar el mensaje "hola soy goku"', () => {
	const saludo = 'hola soy goku'

	const { getByText } = render( <PrimeraApp saludo={saludo}/> )

	expect(getByText(saludo)).toBeInTheDocument()

    })*/
  test("debe de mopstrar <PrimeraApp /> correctamente", () => {
    const saludo = "hola soy goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar el subitulo mandado por props", () => {
    const saludo = "hola soy goku";
    const subtitulo = "subitulo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);

    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitulo);
  });
});
