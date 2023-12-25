import React, { useContext } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import AdminContext from "../../../../context/AdminContext";
import { getTabsConfig } from "./tabsConfig";
const AdminTabs = () => {
  const {
    isPanelOpened,
    setIsPanelOpened,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(AdminContext);

  const selectTab = (selectedTab) => {
    setIsPanelOpened(true);
    setCurrentTabSelected(selectedTab);
  };
  const tabs = getTabsConfig();
  return (
    <AdminTabsStyled>
      <Tab
        icone={isPanelOpened ? <FaChevronDown /> : <FaChevronUp />}
        onClick={() => setIsPanelOpened(!isPanelOpened)}
        className={`${!isPanelOpened ? "active-button" : ""} hide-span`}
      />
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          text={tab.label}
          icone={tab.icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "active-button" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  display: flex;
  gap: 1px;
  position: absolute;
  top: 0;
  left: 71px;
  transform: translateY(-100%);
  .active-button {
    background-color: black;
    color: white;
  }
  .hide-span {
    span {
      display: none;
    }
  }
`;
export default AdminTabs;
