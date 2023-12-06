import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isPanelOpened: false,
  setIsPanelOpened: () => {},
  addIsActive: false,
  setAddIsActive: () => {},
  modifyIsActive: false,
  setModifyIsActive: () => {},
  currentTabSelected: "",
  setCurrentTabSelected: () => {},
  products: [],
  setProducts: () => {},
  handleAdd: () => {},
});
