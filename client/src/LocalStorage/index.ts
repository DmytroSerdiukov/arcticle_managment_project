const LocalStorage = {
  getToken: () => {
    const token = localStorage.getItem("token") as string;
    return token;
  },
  setToken: (token: any) => {
    localStorage.setItem("token", token);
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },
};

export default LocalStorage;
