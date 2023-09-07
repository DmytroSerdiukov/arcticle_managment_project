const LocalStorage = {
  getToken: () => {
    const token = localStorage.getItem("token") as string;
    return token;
  },
  getItem: (key: string) => {
    const item = localStorage.getItem(key) as string;
    return item;
  },
  setToken: (token: any) => {
    localStorage.setItem("token", token);
  },
  setUserData: (user: any) => {
    localStorage.setItem("user", user);
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },
  removeItem: (key: any) => {
    localStorage.removeItem(key);
  },
};

export default LocalStorage;
