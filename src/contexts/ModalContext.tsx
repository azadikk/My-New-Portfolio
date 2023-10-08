import React from "react";

type modalTypes = {
     modal: boolean,
     setModal: (value: boolean) => void,
};

type ModalContextProviderProps = {
     children: React.ReactNode;
}

export const ModalContext = React.createContext<modalTypes | undefined>(undefined);

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({ children }) => {
     //my about modal
     const [modal, setModal] = React.useState(false);

     return (
          <ModalContext.Provider value={{ modal, setModal,  }}>
               {children}
          </ModalContext.Provider>
     )
}