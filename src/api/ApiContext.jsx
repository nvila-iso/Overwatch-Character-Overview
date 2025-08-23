import { createContext, useContext, useState } from "react";

export const API = "https://overfast-api.tekrop.fr";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const headers = { "Content-Type": "application/json" };

  const request = async (resource, options) => {
    const response = await fetch(API + resource, {
      ...options,
      headers,
    });
    const isJson = /json/.test(response.headers.get("Content-Type"));
    const result = isJson ? await response.json() : undefined;
    if (!response.ok) throw Error(result?.message ?? "Something went wrong :(");
    return result;
  };

  const [tags, setTags] = useState({});

  const provideTag = (tag, query) => {
    setTags((prev) => {
      const next = { ...prev, [tag]: query };
      return next;
    });
  };

  const invalidateTags = (tagsToInvalidate) => {
    tagsToInvalidate.forEach((tag) => {
      const query = tags[tag];
      if (query) query();
    });
  };

  const value = { request, provideTag, invalidateTags };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) throw Error("useApi must be used within ApiProvider");
  return context;
};
