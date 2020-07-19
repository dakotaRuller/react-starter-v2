//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import EverythingElse from 'src/components/everything-else/EverythingElse';

describe("<EverythingElse/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EverythingElse/>)
  });

  test("should contain a header", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
  })
});