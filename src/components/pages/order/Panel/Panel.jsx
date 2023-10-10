import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import AdminContext from "../../../../context/AdminContext";
const Panel = () => {
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const { isModeAdmin } = useContext(AdminContext);
  console.log(isModeAdmin);
  return (
    isModeAdmin && (
      <PanelStyled className={`${isPanelOpened ? "appear" : "disappear"}`}>
        <div
          className={`panel-container ${
            isPanelOpened ? "appear" : "disappear"
          }`}
        >
          <div className="panel-buttons">
            <button onClick={() => setIsPanelOpened(!isPanelOpened)}>
              {isPanelOpened ? <FaChevronDown /> : <FaChevronUp />}
            </button>
            <button>{<AiOutlinePlus />}Ajouter un produit</button>
            <button>{<MdModeEditOutline />}Modifier un produit</button>
          </div>
        </div>
      </PanelStyled>
    )
  );
};

const PanelStyled = styled.div`
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
    padding: 20px;
    width: 100%;
    height: 250px;
    left: 0;
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
    }
  }
`;

export default Panel;
