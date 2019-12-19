const delay = 1000;

export default class Service{
    constructor() {
      this.urlBase = "https://apple-store-app-api.now.sh/";
    }

    getDevices = async(id) => {
      console.log("Category was fetched");
      const URL = `${this.urlBase}devices/${id}`;
      
      const response = await fetch(URL , {
        method: "get"
      });

      return await response.json();
    };

    getCurrentDevice = async(id) => {
      console.log("Device was fetched");
      const URL = `${this.urlBase}device/${id}`;
      
      const response = await fetch(URL , {
        method: "get"
      });

      return await response.json();
    };

    getBestSales = async() => {
      console.log("Sales was fetched");
      const URL = `${this.urlBase}sales-items`;
      
      const response = await fetch(URL , {
        method: "get"
      });

      return await response.json();
    };

    logIn = (email, password) => {
        return new Promise((resolve) => {
            let user = false;
            users.map((el) => {
                if(el.email === email) user = el
            });
            setTimeout(() => {
                if(!user) resolve({status: -1, error: "User not found"});
                else if(user.password !== password) resolve({status: -1, error: "Password incorrect"});
                else {
                    const { password, ...newUser } = user;
                    resolve ({status: 0, user: newUser})
                }
            }, delay)
        })
    };

    checkIn = (user={}) => {
        const {first_name, last_name, phone, email, password, confirmPassword} = user;

        return new Promise((resolve) => {
            setTimeout(() => {
                if(!first_name || !last_name || !phone || !email || !password || !confirmPassword ){
                    resolve({status: -1, error: "Please fill in all fields"})
                }
                else if(users.some(el => el.email === email)) {
                    resolve({status: -1, error: "Email already exists"})
                }
                else if(password !== confirmPassword){
                    resolve({status: -1, error: "Password and confirm password do not match"})
                }
                else {
                    users.push({first_name, last_name, phone, email, password});
                    resolve({status: 0, user: {first_name, last_name, phone, email}})
                }
            }, delay)
        })
    }

}

const users = [
    {
        first_name: "Robert",
        last_name: "Downey",
        phone: "0990953678",
        email: "r.downey@gmail.com",
        password: "111"
    },
    {
        first_name: "Robert",
        last_name: "Downey",
        phone: "0990953678",
        email: "qq",
        password: "qq"
    },
    {
        first_name: "Bradley",
        last_name: "Pitt",
        phone: "0987893889",
        email: "b.pitt@gmail.com",
        password: "333",
    },
    {
        first_name: "Jennifer",
            last_name: "Aniston",
        phone: "0636572838",
        email: "j.aniston@gmail.com",
        password: "222"
    }
];