// WebsiteContext.js
import { createContext, useState } from 'react';

export const WebsiteContext = createContext();

export const WebsiteProvider = ({ children }) => {
  const [websiteData, setWebsiteData] = useState(null);

  return (
    <WebsiteContext.Provider value={{ websiteData, setWebsiteData }}>
      {children}
    </WebsiteContext.Provider>
  );
};
