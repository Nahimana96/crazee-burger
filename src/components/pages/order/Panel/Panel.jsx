import React, { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminContext from "../../../../context/AdminContext";
import PanelButtons from "./PanelButtons";
const Panel = () => {
  const [isPanelOpened, setIsPanelOpened] = useState(false);
  const [addIsActive, setAddIsActive] = useState(true);
  const [modifyIsActive, setModifyIsActive] = useState(false);
  const { isModeAdmin } = useContext(AdminContext);
  return (
    isModeAdmin && (
      <PanelStyled>
        <div
          className={`panel-container ${
            isPanelOpened ? "appear" : "disappear"
          }`}
        >
          {addIsActive && <div>Ajouter un produit</div>}
          {modifyIsActive && <div>Modifier un produit</div>}
          <PanelButtons
            isPanelOpened={isPanelOpened}
            setIsPanelOpened={setIsPanelOpened}
            addIsActive={addIsActive}
            setAddIsActive={setAddIsActive}
            modifyIsActive={modifyIsActive}
            setModifyIsActive={setModifyIsActive}
          />
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
  }
`;

export default Panel;
