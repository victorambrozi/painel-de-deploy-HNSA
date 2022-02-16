const fakeAuthProvider = {
  isAuthenticator: false,

  // entrar
  signin(newUser, callback) {
    fakeAuthProvider.isAuthenticator = true;
    return setTimeout(callback, 100);
  },

  //sair
  signout(callback) {
    fakeAuthProvider.isAuthenticator = false;
    return setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
