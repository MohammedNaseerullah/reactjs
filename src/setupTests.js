import { configure } from "enzyme";
// this is where we reference the adapter package we installed  
// earlier
import EnzymeAdapter from "enzyme-adapter-react-16";
configure({ adapter: new EnzymeAdapter() });