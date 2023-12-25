import React from "react";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../reusable-ui/Button";

export default function SubmitButton({ isFormSubmitted }) {
  return (
    <>
      <Button label="Ajouter un nouveau produit" version="success" />
      {isFormSubmitted && <SubmitMessage />}
    </>
  );
}
