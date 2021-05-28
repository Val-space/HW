function Auto(make, model, year, vinCode) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.vinCode = vinCode
}

Auto.prototype.log = function () {
    console.log(this.make + ' ' + this.model + ' ' + this.year);
}
Auto.prototype.checkVin = function () {
    return this.vinCode.length === 16 ? true : false
}


function Auto_Fuel(make, model, year, vinCode, engineCapacity, fuelConsumption) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.vinCode = vinCode,
        this.engineCapacity = engineCapacity,
        this.fuelConsumption = fuelConsumption
}
Auto_Fuel.prototype = Object.create(Auto.prototype)
Auto_Fuel.prototype.showFuelConsumption = function () {
    return this.engineCapacity + this.fuelConsumption
}



function Auto_Electric(make, model, year, vinCode, batteryCapacity) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.vinCode = vinCode,
        this.batteryCapacity = batteryCapacity
}
Auto_Electric.prototype = Object.create(Auto.prototype)
Auto_Electric.prototype.showBatteryConfig = function () {
    return this.batteryCapacity
}




let tesla = new Auto_Electric('Tesla', 'Model X', 2020, 'AF12124AEGJ32413', '100 кВт/ч')

tesla.log() // ‘Tesla Model X 2020’
tesla.checkVin() // true
tesla.showBatteryConfig() // ‘100 кВт/ч’