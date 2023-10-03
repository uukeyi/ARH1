import React, { createContext, useContext, useState } from "react";
import {
   ILandingBlock,
   ILandingBlockElement,
   landingBlockPrototype,
   landingElPrototype,
} from "../interfaces/landingPageResponse";
interface IAdminModalEditContext {
   elSettings: ILandingBlockElement;
   isOpen: boolean;
   setIsOpen: Function;
   setElSettings: Function;
   isOpenBlockEdit: boolean;
   setIsOpenBlockEdit: Function;
   blockSettings: ILandingBlock;
   setBlockSettings: Function;
}
interface IAdminModalEditProps {
   children?: React.ReactNode;
}
export const AdminModalEditContext =
   createContext<IAdminModalEditContext | null>(null);
export function useAdminModalEdit(): IAdminModalEditContext {
   const context = useContext(AdminModalEditContext);
   if (!context) {
      throw new Error("useAuth must be used within an AdminModalEditProvider");
   }
   return context;
}
export const AdminModalEditProvider: React.FC<IAdminModalEditProps> = ({
   children,
}) => {
   const [isOpen, setIsOpen] = useState(false);
   const [elSettings, setElSettings] =
      useState<ILandingBlockElement>(landingElPrototype);
   const [isOpenBlockEdit, setIsOpenBlockEdit] = useState(false);
   const [blockSettings, setBlockSettings] = useState<ILandingBlock>(
      landingBlockPrototype
   );
   return (
      <AdminModalEditContext.Provider
         value={{
            elSettings: elSettings,
            isOpen: isOpen,
            setElSettings: setElSettings,
            setIsOpen: setIsOpen,
            isOpenBlockEdit: isOpenBlockEdit,
            setIsOpenBlockEdit: setIsOpenBlockEdit,
            blockSettings: blockSettings,
            setBlockSettings: setBlockSettings,
         }}
      >
         {children}
      </AdminModalEditContext.Provider>
   );
};
