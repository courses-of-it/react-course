import "@testing-library/jest-dom";

import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("tests to <CounterApp />", () => {
  let wrapper = shallow(<CounterApp value={ 10 } />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={ 10 } />);
  });

  test("mirar si carga el componente correactamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Comprobar si el valor por defecto se asigna correctamente", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const valueDiv = wrapper.find("h2").text().trim();
    expect(valueDiv).toBe(value.toString());
  });

  test("deve increcmentar el contador", () => {
    wrapper.find("button").at(0).simulate("click");
    const valueDiv = wrapper.find("h2").text().trim();

    expect(valueDiv).toBe('11');
  });

  test("deve reducir el contador", () => {
    wrapper.find("button").at(1).simulate("click");
    const valueDiv = wrapper.find("h2").text().trim();

    expect(valueDiv).toBe('9');
  });
  test("deve resetear el contador", () => {
    wrapper.find("button").at(2).simulate("click");
    const valueDiv = wrapper.find("h2").text().trim();

    expect(valueDiv).toBe('10');
  });
});
