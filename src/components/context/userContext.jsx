import React from "react";

const UserContext = React.createContext("Industrys AFH II");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
