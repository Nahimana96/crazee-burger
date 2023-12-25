import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import HintMessage from "./HintMessage";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    content: hasAlreadyBeenClicked ? <HintMessage /> : <EditForm />,
  },
];
export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected);
