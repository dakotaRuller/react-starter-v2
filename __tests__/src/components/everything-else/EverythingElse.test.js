//Node Modules
import React from 'react';
import { shallow } from 'enzyme';

//Components
import EverythingElse from 'src/components/everything-else/EverythingElse';

//Data
import { everythingContentElseData } from "../../../../__mocks__/data/everythingElse";

describe('<EverythingElse/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<EverythingElse />);
  });

  test('should contain a header', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  test('should have content', () => {
    expect(wrapper.find('p')).toHaveLength(6);
  });

  test('should have a content list', () => {
    everythingContentElseData.forEach((i, index) => {
      let link = wrapper.find("ul").find("li").at(index).find("a.main-link");
      let content = wrapper.find("ul").find("li").at(index).find("p");

      expect(link.text()).toEqual(i.text);
      expect(link.props().href).toEqual(i.link);
      expect(content.text()).toEqual(i.description);
    });
  });
});
