import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Panel from "../Panel/Panel";

const Main = () => {
  return (
    <MainStyled>
      <Menu />
      <Panel />
    </MainStyled>
  );
};
const MainStyled = styled.div`
  position: relative;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  margin: 0 auto;
  margin-bottom: 24px;
  width: 100%;
  max-width: 1400px;
  overflow-y: hidden;
`;
export default Main;
