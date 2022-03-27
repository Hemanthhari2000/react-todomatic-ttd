import { shallow } from "enzyme";
import Form from "./Form";

import "../../setupTests";

describe("Rendering Form Component Test", () => {
  it("Should exist a input", () => {
    const component = shallow(<Form />);
    expect(component.find("input").length).toBe(1);
  });

  it("Should have a label", () => {
    const component = shallow(<Form />);
    expect(component.find(Text)).toBeDefined();
  });
});

describe("Behavioural Testing for Form", () => {
  it("Should submit form on button click", () => {
    const mockAddTask = jest.fn();
    const component = shallow(<Form addTask={mockAddTask} />);
    component.find("form").simulate("submit", { preventDefault: () => {} });
    expect(mockAddTask).toHaveBeenCalled();
  });
});
