import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import { theme } from "../../../../theme";
const PanelButtons = ({
  isPanelOpened,
  setIsPanelOpened,
  addIsActive,
  setAddIsActive,
  modifyIsActive,
  setModifyIsActive,
}) => {
  return (
    <PanelButtonStyled>
      <button
        onClick={() => setIsPanelOpened(!isPanelOpened)}
        className={`${!isPanelOpened ? "active-button" : ""}`}
      >
        {isPanelOpened ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      <button
        className={`${addIsActive ? "active-button" : "not-active"}`}
        onClick={() => {
          setAddIsActive(true);
          setModifyIsActive(false);
          setIsPanelOpened(true);
        }}
      >
        {<AiOutlinePlus />}
        <p>Ajouter un produit</p>
      </button>
      <button
        className={`${modifyIsActive ? "active-button" : "not-active"}`}
        onClick={() => {
          setAddIsActive(false);
          setModifyIsActive(true);
          setIsPanelOpened(true);
        }}
      >
        {<MdModeEditOutline />}
        <p>Modifier un produit</p>
      </button>
    </PanelButtonStyled>
  );
};

const PanelButtonStyled = styled.div`
  display: flex;
  gap: 1px;
  position: absolute;
  top: 0;
  left: 71px;
  transform: translateY(-100%);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: ${theme.colors.greySemiDark};
    padding: 10px 22px;
    border-radius: 5px 5px 0 0;
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    background-color: ${theme.colors.background_white};
    cursor: pointer;
  }
  .active-button {
    background-color: black;
    color: white;
  }
  p:hover {
    text-decoration: underline;
  }
`;
export default PanelButtons;
