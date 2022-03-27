import { shallow } from "enzyme";
import FilterButton from "./FilterButton";

import "../../setupTests";

describe("Rendering FilterButton Component Test", () => {
  it("should render without crashing", () => {
    const component = shallow(<FilterButton />);
    expect(component.length).toBe(1);
  });
});

describe("Behavioural Testing for FilterButton", () => {
  it("Should call onClick function when clicked", () => {
    const onClick = jest.fn();
    const component = shallow(<FilterButton setFilter={onClick} />);
    component.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
