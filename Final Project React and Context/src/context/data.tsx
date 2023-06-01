import React, { createContext, useContext, ReactNode, useState } from 'react';

export interface IIssue {
  id: string;
  title: string;
  state: string;
  url: string;
  created: string;
  updated: string;
}
type MyContextType = {
  issues: IIssue[];
  setIssues: (newIssues: IIssue[]) => void;
};

const MyContext = createContext<MyContextType>({
  issues: [],
  // eslint-disable-next-line
  setIssues: () => {},
});

const MyProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<IIssue[]>([]);

  return (
    <MyContext.Provider value={{ issues, setIssues }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => useContext(MyContext);

export { MyProvider, useMyContext };
