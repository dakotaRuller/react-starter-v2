import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Hello from './Hello';

const name = "Lorem";
describe("<Hello/>" , () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      name
    };
    wrapper = shallow(<Hello {...props}/>)
  });
  test("Component matches snapshot", () => {
    expect(wrapper.find("p").text()).toEqual(`Hello ${name}`);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
