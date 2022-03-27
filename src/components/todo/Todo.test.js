import { shallow } from "enzyme";
import Todo from "./Todo";

import "../../setupTests";

describe("Rendering Todo Component Test", () => {
  it("Should exist a checkbox", () => {
    const component = shallow(<Todo />);
    expect(component.find("input[type='checkbox']").length).toBe(1);
  });

  it("Should exist a label", () => {
    const component = shallow(<Todo />);
    expect(component.find("label").length).toBe(1);
  });

  it("Should exist edit and delete button", () => {
    const component = shallow(<Todo />);
    expect(component.find("button").length).toBe(2);
  });
});
