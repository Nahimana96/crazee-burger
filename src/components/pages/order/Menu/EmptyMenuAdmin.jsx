import React, { useContext } from "react";
import AdminContext from "../../../../context/AdminContext";
import Button from "../../../reusable-ui/Button";

const EmptyMenuAdmin = () => {
  const { resetMenu } = useContext(AdminContext);
  return (
    <div className="menu-vide">
      <p>
        <strong> Le menu est vide ?</strong>
      </p>
      <p>Cliquez ci-dessous pour le réinitialiser</p>
      <Button label={"Générer de nouveaux produits"} onClick={resetMenu} />
    </div>
  );
};

export default EmptyMenuAdmin;
