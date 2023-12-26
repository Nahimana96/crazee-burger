import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuroSymbol } from "react-icons/md";

export const getInputTextConfig = (product) => [
  {
    id: 0,
    name: "title",
    Icone: <FaHamburger />,
    placeholder: "Nom du produit (ex: Super Burger)",
    value: product.title,
  },
  {
    id: 1,
    name: "imageSource",
    Icone: <BsFillCameraFill />,
    placeholder:
      "Lien:URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: product.imageSource,
  },
  {
    id: 2,
    name: "price",
    Icone: <MdOutlineEuroSymbol />,
    placeholder: "Prix",
    value: product.price,
  },
];
