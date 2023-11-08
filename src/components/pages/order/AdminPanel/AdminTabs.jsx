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

  const selectTab = (selectedTab) => {
    setIsPanelOpened(true);
    if (selectedTab === "add") {
      setAddIsActive(true);
      setModifyIsActive(false);
    }
    if (selectedTab === "modify") {
      setAddIsActive(false);
      setModifyIsActive(true);
    }
  };

  const tabsConfig = [
    {
      label: "",
      icon: isPanelOpened ? <FaChevronDown /> : <FaChevronUp />,
      onCLick: () => setIsPanelOpened(!isPanelOpened),
      className: `${!isPanelOpened ? "active-button" : ""} hide-span`,
    },
    {
      label: "Ajouter un produit",
      icon: <MdModeEditOutline />,
      onCLick: () => selectTab("add"),
      className: `${addIsActive ? "active-button" : ""}`,
    },
    {
      label: "Modifier un produit",
      icon: <MdModeEditOutline />,
      onCLick: () => selectTab("modify"),
      className: `${modifyIsActive ? "active-button" : ""}`,
    },
  ];
  return (
    <AdminTabsStyled>
      {tabsConfig.map((tab) => (
        <Tab
          text={tab.label}
          icone={tab.icon}
          onClick={tab.onCLick}
          className={tab.className}
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
