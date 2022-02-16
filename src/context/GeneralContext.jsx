import React from "react";
import { fakeAuthProvider } from "../components/Form/authenticator";

const AuthContext = React.createContext();

const GeneralContext = ({ children }) => {
  const [user, setUser] = React.useState(null);

  let signin = (newUser, callback) =>
    fakeAuthProvider.signin(newUser, () => {
      setUser(newUser);

      callback();
    });

  let signout = (callback) =>
    fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });

  const dataAuth = { user, signin, signout };
  return (
    <AuthContext.Provider value={dataAuth}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default GeneralContext;
