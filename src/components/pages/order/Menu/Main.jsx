import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import AdminPanel from "../AdminPanel/AdminPanel";
import { useContext } from "react";
import AdminContext from "../../../../context/AdminContext";
const Main = () => {
  const { isModeAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      <Menu />
      {isModeAdmin && <AdminPanel />}
    </MainStyled>
  );
};
const MainStyled = styled.div`
  position: relative;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-right-radius: 15px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  width: 100%;
  overflow-y: hidden;
  .when-empty {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Main;
