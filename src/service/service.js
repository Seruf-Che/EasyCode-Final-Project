const delay = 1000

export default class AppleService{

    getDevices = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    reject(new Error("Something went wrong"))
                }
                resolve(storage[id])
            }, delay)
        })
    };

    getCurrentDevice = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                  devices.find(e => e.id === id)
                )
            }, delay)
        })
    };

    getBestSales = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(best_sales)
          }, delay)
      })
    }

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

const iphones = [
    {
        category: "iphone",
        id: 1001,
        model: "Smartphone Apple iPhone 8 64GB (Gold) (MQ6M2)",
        description: "Screen: 4.7 (1334x750) / Processor: six-core Apple A11 Bionic / Camera: 12 MP + 7 MP / OS: iOS 11 / Internal memory: 64 GB / RAM: 2 GB / LTE / GPS, GLONASS, BDS, GALILEO / Dimensions: 138.4x67.3x7.3 mm / Weight: 148 g",
        price: "600",
        img: "https://avic.ua/assets/cache/images/assets/files/products/34325/image/200x220-apple-iphone-8-gold-02.jpg",
        stoсkPrice: "570"
    },
    {
        category: "iphone",
        id: 1002,
        model: "Smartphone Apple iPhone 11 Pro Max 64GB Midnight Green (MWH22)",
        description: "Screen: 6.5 OLED (2688x1242) / Processor: six-core Apple A13 Bionic / Camera: 12 + 12 + 12 MP + 12 MP / OS: iOS 13 / Internal memory: 64 GB / RAM: 6 GB / LTE / GPS, GLONASS , BDS, GALILEO / Dimensions: 158x77.8x8.1 mm / Weight: 226 g",
        price: "1500",
        img: "https://avic.ua/assets/cache/images/assets/files/products/218501/image/200x220-apple-iphone-11-pro-max-midnight-green-1.jpg",
        stoсkPrice: null
    },
    {
        category: "iphone",
        id: 1003,
        model: "Smartphone Apple iPhone 11 64GB Product Red (MWL92)",
        description: "Screen: 6.1 IPS (1792x828) / Processor: six-core Apple A13 Bionic / Camera: 12 + 12 MP + 12 MP / OS: iOS 13 / Internal memory: 64 GB / RAM: 4 GB / LTE / GPS, GLONASS, BDS , GALILEO / Dimensions: 150.9 x 75.7 x 8.3 mm / Weight: 194 g",
        price: "900",
        img: "https://avic.ua/assets/cache/images/assets/files/products/34325/image/200x220-apple-iphone-8-gold-02.jpg",
        stoсkPrice: "860"
    },
];

const ipads = [
    {
        category: "ipad",
        id: 2001,
        model: "Apple iPad Pro 10.5 Wi-Fi 64GB Gold Tablet (MQDX2)",
        description: "Screen: 10.5 (2224x1668) (Retina display) / Processor: six-core Apple A10X (2.36 GHz) / RAM: 4 GB / 64 GB of internal memory / Camera: 12 MP and 7 Mp / OS: iOS 11 / Dimensions: 250, 6x174.1x6.1 mm / Weight: 469 g",
        price: "700",
        img: "https://avic.ua/assets/cache/images/assets/files/products/24660/image/200x220-apple-ipad-pro-10-5-wi-fi-64gb-gold-mqdx2.jpg",
        stoсkPrice: null
    },
    {
        category: "ipad",
        id: 2002,
        model: "Apple iPad Pro 11 (2018) Wi-Fi 256GB Space Gray (MTXQ2)",
        description: "Screen: 11.0 (2388x1668) (Liquid Retina) / Processor: eight-core Apple A12X Bionic / RAM: 4 GB / 256 GB of internal memory / Camera: 12 MP and 7 MP / OS: iOS 12 / Dimensions: 247.6 x 178.5 x 5 9 mm / Weight: 468 g",
        price: "900",
        img: "https://avic.ua/assets/cache/images/assets/files/products/210518/image/200x220-apple-ipad-pro-11-2018-space-gray-1.jpg",
        stoсkPrice: "820"
    },
    {
        categoryId: "ipad",
        id: 2003,
        model: "Tablet Apple iPad mini 4 128Gb WiFi Gold (MK9Q2)",
        description: "Screen: 7.9 (2048x1536) (Retina display) / Processor: Apple A8 (1.5 GHz) / RAM: 2 GB / 128 GB of internal memory / Camera: 8 MP and 1.2 Mp / OS: iOS 9 / Dimensions : 203.2 x 134.8 x 6.1 mm / Weight: 298.8 g",
        price: "400",
        img: "https://avic.ua/assets/cache/images/assets/files/products/15837/image/200x220-Apple-iPad-mini-4-Gold.jpg",
        stoсkPrice: null
    },
]

const best_sales = [
    {
        category: "iphone",
        id: 1001,
        model: "Smartphone Apple iPhone 8 64GB (Gold) (MQ6M2)",
        description: "Screen: 4.7 (1334x750) / Processor: six-core Apple A11 Bionic / Camera: 12 MP + 7 MP / OS: iOS 11 / Internal memory: 64 GB / RAM: 2 GB / LTE / GPS, GLONASS, BDS, GALILEO / Dimensions: 138.4x67.3x7.3 mm / Weight: 148 g",
        price: "600",
        img: "https://avic.ua/assets/cache/images/assets/files/products/34325/image/200x220-apple-iphone-8-gold-02.jpg",
        stoсkPrice: "570"
    },
    {
        category: "ipad",
        id: 2002,
        model: "Apple iPad Pro 11 (2018) Wi-Fi 256GB Space Gray (MTXQ2)",
        description: "Screen: 11.0 (2388x1668) (Liquid Retina) / Processor: eight-core Apple A12X Bionic / RAM: 4 GB / 256 GB of internal memory / Camera: 12 MP and 7 MP / OS: iOS 12 / Dimensions: 247.6 x 178.5 x 5 9 mm / Weight: 468 g",
        price: "900",
        img: "https://avic.ua/assets/cache/images/assets/files/products/210518/image/200x220-apple-ipad-pro-11-2018-space-gray-1.jpg",
        stoсkPrice: "820"
    },
    {
        category: "iphone",
        id: 1003,
        model: "Smartphone Apple iPhone 11 64GB Product Red (MWL92)",
        description: "Screen: 6.1 IPS (1792x828) / Processor: six-core Apple A13 Bionic / Camera: 12 + 12 MP + 12 MP / OS: iOS 13 / Internal memory: 64 GB / RAM: 4 GB / LTE / GPS, GLONASS, BDS , GALILEO / Dimensions: 150.9 x 75.7 x 8.3 mm / Weight: 194 g",
        price: "900",
        img: "https://avic.ua/assets/cache/images/assets/files/products/34325/image/200x220-apple-iphone-8-gold-02.jpg",
        stoсkPrice: "860"
    },
]

const storage = {
    837382: [...iphones],
    736726: [...ipads]
};

const devices = [
  ...iphones,
  ...ipads
]
