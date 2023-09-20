import React, { createContext, useContext, useState } from "react";
import { ILandingBlockElement } from "../interfaces/landingPageResponse";
interface IAdminModalEditContext {
   elSettings: ILandingBlockElement
   isOpen: boolean;
   setIsOpen: Function;
   setElSettings: Function;
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
   const [elSettings, setElSettings] = useState<ILandingBlockElement>({
      id: '',
      blockId: '',
      typeId: '',
      value: '',
      orderIndex: '',
      aosAnimation : '',
      block: {
         id: '',
         name: '',
         orderIndex: '',
         isVisible: false,
         isDeleted: false,
         elements: [],
      },
      type: {
         id: '',
         name: ''
      }
   });
   return (
      <AdminModalEditContext.Provider
         value={{
            elSettings: elSettings,
            isOpen: isOpen,
            setElSettings: setElSettings,
            setIsOpen: setIsOpen,
         }}
      >
         {children}
      </AdminModalEditContext.Provider>
   );
};
