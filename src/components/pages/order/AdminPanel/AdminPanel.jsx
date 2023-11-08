import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminTabs from "./AdminTabs";
import Form from "./Form";
import AdminContext from "../../../../context/AdminContext";
const AdminPanel = ({ products, setProducts }) => {
  const { isPanelOpened, currentTabSelected } = useContext(AdminContext);

  return (
    <AdminPanelStyled>
      <div
        className={`panel-container ${isPanelOpened ? "appear" : "disappear"}`}
      >
        {currentTabSelected === "add" && (
          <Form products={products} setProducts={setProducts} />
        )}
        {currentTabSelected === "edit" && <div>Modifier un produit</div>}
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
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    border-top: 1px solid ${theme.colors.greyLight};
  }
`;

export default AdminPanel;
