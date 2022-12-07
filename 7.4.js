let usedPower = 0;

function Gadjet(type, color, status) {
      this.type = type;
      this.color = color;
      this.connect = Boolean;

}

function getPowerInfo() {

    console.log(`Потребляемая мощность приборов на данный момент - ${usedPower} Ватт`)
}


function MyGadjet(type, brand, color, status, power){
    this.type = type;
    this.brand = brand;
    this.color = color;
    this.status = status;
    this.power = power;

    if (this.status === 'connected') {
        console.log(`${this.type} подключен к электросети и потребляет ${this.power} Ватт`);
        usedPower += this.power;
    } else if (this.status === 'unconnected'){
        console.log(`${this.type} не подключен к электросети и потребляет 0 Ватт`);
    } else {
        console.log(`Статус подключения устройства \"${this.type}\" не определен`)
    }
}

MyGadjet.prototype = new Gadjet();
  
const phone = new MyGadjet ("Телефон", "Xiaomi", "white", 'unconnected', 5);

const laptop = new MyGadjet ("Ноутбук", "Asus", "black", 'connected', 60);

getPowerInfo();