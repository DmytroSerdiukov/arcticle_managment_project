const LocalStorage = {
  getToken: () => {
    const token = localStorage.getItem("token") as string;
    return token;
  },
  setToken: (city: string) => {
    if (!localStorage.getItem("cities"))
      localStorage.setItem(`cities`, JSON.stringify([]));
    const storage = localStorage.getItem("cities") as string;
    const cities = JSON.parse(storage) as string[];
    const newCities: string[] = [...cities, city];
    localStorage.setItem("cities", JSON.stringify(newCities));
  },
};

export default LocalStorage;
