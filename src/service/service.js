export default class Service{
  constructor() {
    this.urlBase = "https://apple-store-app-api.now.sh/";
  }

  getDevices = async(id) => {
    const URL = `${this.urlBase}devices/${id}`;

    const response = await fetch(URL , {
      method: "get"
    });

    return await response.json();
  };

  getCurrentDevice = async(id) => {
    const URL = `${this.urlBase}device/${id}`;

    const response = await fetch(URL , {
      method: "get"
    });

    return await response.json();
  };

  getBestSales = async() => {
    const URL = `${this.urlBase}sales-items`;

    const response = await fetch(URL , {
      method: "get"
    });

    return await response.json();
  };

  logIn = async(email, password) => {
    const URL = `${this.urlBase}users/login`;

    const response = await fetch(URL , {
      method: "post",
      headers: {email, password}
    });

    return await response.json();
  };

  signIn = async(user={}) => {
    const {first_name, last_name, phone, email, password} = user;

    const URL = `${this.urlBase}users/signin`;

    const response = await fetch(URL , {
      method: "post",
      headers: {first_name, last_name, phone, email, password}
    });

    return await response.json();
  };

  updateUser = async(user={}) => {
    const {_id, first_name, last_name, phone, email, address, password, new_password} = user;

    const URL = `${this.urlBase}users/update-user`;

    const response = await fetch(URL , {
      method: "post",
      headers: {_id, first_name, last_name, phone, email, address, password, new_password}
    });

    return await response.json();
  };

  deleteUser = async(user={}) => {
    const {_id, password} = user;

    const URL = `${this.urlBase}users/delete-user`;

    const response = await fetch(URL , {
      method: "post",
      headers: {_id, password}
    });

    return await response.json();
  };
}