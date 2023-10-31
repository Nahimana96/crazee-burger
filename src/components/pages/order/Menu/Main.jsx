import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import AdminPanel from "../AdminPanel/AdminPanel";
import { fakeMenu2 } from "../../../../data/fakeMenu";
import { useContext, useState } from "react";
import AdminContext from "../../../../context/AdminContext";
const Main = () => {
  const [products, setProducts] = useState(fakeMenu2);
  const { isModeAdmin } = useContext(AdminContext);
  return (
    <MainStyled>
      <Menu products={products} />
      {isModeAdmin && (
        <AdminPanel products={products} setProducts={setProducts} />
      )}
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
