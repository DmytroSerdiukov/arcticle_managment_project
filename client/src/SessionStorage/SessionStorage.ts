const SessionStorage = {
  getToken: () => {
    const token = sessionStorage.getItem("token") as string;
    return token;
  },
  getItem: (key: string) => {
    const item = sessionStorage.getItem(key) as string;
    return item;
  },
  setToken: (token: any) => {
    sessionStorage.setItem("token", token);
  },
  setUserData: (user: any) => {
    sessionStorage.setItem("user", user);
  },
  removeToken: () => {
    sessionStorage.removeItem("token");
  },
  removeItem: (key: any) => {
    sessionStorage.removeItem(key);
  },
};

export default SessionStorage;
