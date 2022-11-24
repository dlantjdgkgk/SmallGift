import React from "react";
import type { PayloadType, CheckerTypes } from "./types";

type ValidsType = keyof PayloadType | CheckerTypes;

export interface SubmitValidContextType {
  valids: Record<ValidsType, boolean>;
  setValids: (key: ValidsType, valid: boolean) => void;
}

const SubmitValidContext = React.createContext<SubmitValidContextType>({
  valids: {} as any,
  setValids: () => {},
});

const SubmitValidContextProvider: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  const [valids, setValids] = React.useState<Record<ValidsType, boolean>>({} as any);

  const context = React.useMemo<SubmitValidContextType>(
    () => ({
      valids,
      setValids: (key, valid) =>
        setValids((prev) => {
          const tmp = { ...prev };
          tmp[key] = valid;
          return tmp;
        }),
    }),
    [valids],
  );

  return <SubmitValidContext.Provider value={context}>{children}</SubmitValidContext.Provider>;
};

export const useSubmitValid = () => {
  return React.useContext<SubmitValidContextType>(SubmitValidContext);
};

export default SubmitValidContextProvider;
