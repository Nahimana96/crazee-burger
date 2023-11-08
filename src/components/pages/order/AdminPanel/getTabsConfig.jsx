import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentTabSelected) => [
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    className: `${currentTabSelected == "add" ? "active-button" : ""}`,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    className: `${currentTabSelected == "edit" ? "active-button" : ""}`,
  },
];
