import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminContext from "../../../../context/AdminContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

const EditForm = () => {
  const { productToEdit, setProductToEdit, handleEdit, titleEditRef } =
    useContext(AdminContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const productBeingUpdated = { ...productToEdit, [name]: value };
    setProductToEdit(productBeingUpdated);

    handleEdit(productBeingUpdated);
  };
  return (
    <Form
      product={productToEdit}
      imageSource={productToEdit.imageSource}
      onChange={handleChange}
      ref={titleEditRef}
      QUELQUECHOSE={<EditInfoMessage />}
    />
  );
};

const EditFormStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: repeat(4, 25%);
  max-width: 880px;
  height: 160px;
  column-gap: 20px;
  row-gap: 8px;

  .input-fields {
    grid-column-start: 2;
    height: 100%;
    align-items: center;
    background-color: ${theme.colors.greyLight};
    input {
      background-color: ${theme.colors.greyLight};
    }
    input::placeholder {
      color: ${theme.colors.greyMedium};
    }
    svg {
      color: ${theme.colors.greyBlue};
    }
  }
`;
export default EditForm;
