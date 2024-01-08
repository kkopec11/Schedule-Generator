import React, { useState } from "react";
import { workerData } from "../components/CalendarGrid/components/rows";

interface DataProviderProps {
  children?: React.ReactNode;
}

export const DataContext = React.createContext<any>(undefined);

export const DataProvider = (props: DataProviderProps) => {
  const [rows, setRows] = useState<any>([]);

  return (
    <DataContext.Provider value={{ rows, setRows }}>
      {props.children}
    </DataContext.Provider>
  );
};

export const useGenerateDataRows = () => React.useContext(DataContext);
