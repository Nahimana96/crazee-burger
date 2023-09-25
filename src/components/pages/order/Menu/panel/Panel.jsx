import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../../theme";
const Panel = () => {
  return (
    <PanelStyled>
      <div className="panel-buttons">
        <button>{<FaChevronDown />}</button>
        <button>{<AiOutlinePlus />}Ajouter un produit</button>
        <button>{<MdModeEditOutline />}Modifier un produit</button>
      </div>
    </PanelStyled>
  );
};

const PanelStyled = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 250px;
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.background_white};
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);

  border-top: 1px solid ${theme.colors.greyLight};

  .panel-buttons {
    display: flex;
    gap: 1px;
    /* background-color: black; */
    position: absolute;
    top: 0;
    left: 71px;
    transform: translateY(-100%);

    button {
      color: ${theme.colors.greySemiDark};
      padding: 10px 22px;
      border-radius: 5px 5px 0 0;
      border: 1px solid ${theme.colors.greyLight};
      box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default Panel;
