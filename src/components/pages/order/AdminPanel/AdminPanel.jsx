import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminTabs from "./AdminTabs";
import AdminContext from "../../../../context/AdminContext";
import { getTabSelected, getTabsConfig } from "./tabsConfig";

const AdminPanel = () => {
  const { isPanelOpened, currentTabSelected, productToEdit } =
    useContext(AdminContext);

  const hasAlreadyBeenClicked = Object.keys(productToEdit).length === 0;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, currentTabSelected);
  return (
    <AdminPanelStyled>
      <div
        className={`panel-container ${isPanelOpened ? "appear" : "disappear"}`}
      >
        {tabSelected && tabSelected.content}
        <AdminTabs />
      </div>
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  .appear {
    bottom: 0;
    transition: all 200ms ease-in-out;
  }
  .disappear {
    bottom: -250px;
    transition: all 200ms ease-in-out;
  }
  .panel-container {
    position: absolute;
    padding: 30px 70px;
    width: 100%;
    height: 250px;
    left: 0;
    background-color: ${theme.colors.background_white};
    border-bottom-right-radius: 15px;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    border-top: 1px solid ${theme.colors.greyLight};
  }
`;

export default AdminPanel;
