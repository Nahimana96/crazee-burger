import React, { useContext } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import AdminContext from "../../../../context/AdminContext";
const AdminTabs = () => {
  const {
    isPanelOpened,
    setIsPanelOpened,
    addIsActive,
    setAddIsActive,
    modifyIsActive,
    setModifyIsActive,
  } = useContext(AdminContext);
  return (
    <AdminTabsStyled>
      <Tab
        onClick={() => setIsPanelOpened(!isPanelOpened)}
        className={`${!isPanelOpened ? "active-button" : ""} hide-span`}
        icone={isPanelOpened ? <FaChevronDown /> : <FaChevronUp />}
      />
      <Tab
        className={`${addIsActive ? "active-button" : ""}`}
        onClick={() => {
          setAddIsActive(true);
          setModifyIsActive(false);
          setIsPanelOpened(true);
        }}
        icone={<AiOutlinePlus />}
        text={"Ajouter un produit"}
      />
      <Tab
        className={`${modifyIsActive ? "active-button" : ""}`}
        onClick={() => {
          setAddIsActive(false);
          setModifyIsActive(true);
          setIsPanelOpened(true);
        }}
        icone={<MdModeEditOutline />}
        text={"Modifier un produit"}
      />
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
