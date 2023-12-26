import React, { useContext } from "react";
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
    >
      <EditInfoMessage />
    </Form>
  );
};

export default EditForm;
