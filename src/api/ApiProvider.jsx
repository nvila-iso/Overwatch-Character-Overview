import { createContext, useContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const requestGet = async (resource) => {
    try {
      const response = await fetch(resource);
      const data = response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const value = { requestGet };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export function useApi() {
  return useContext(ApiContext);
}
