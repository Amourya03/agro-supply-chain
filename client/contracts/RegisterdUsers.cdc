
pub contract RegisterdUsers {

    pub struct Farmer {
        pub let name: String
        pub let farmerAddress: Address
        pub let farmer_location: String
        pub let role: String

        init(_name: String, _farmerAddress: Address, _farmer_location: String) {
            self.name = _name
            self.farmerAddress = _farmerAddress
            self.farmer_location = _farmer_location
            self.role = "Farmer"
        }
    }

    pub struct Distributer {
        pub let name: String
        pub let distributerAddress: Address
        pub let distributer_location: String
        pub let role: String

        init(_name: String, _distributerAddress: Address, _distributer_location: String) {
            self.name = _name
            self.distributerAddress = _distributerAddress
            self.distributer_location = _distributer_location
            self.role = "Distributer"
        }
    }

    pub struct Retailer {
        pub let name: String
        pub let retailerAddress: Address
        pub let retailer_location: String
        pub let role: String

        init(_name: String, _retailerAddress: Address, _retailer_location: String) {
            self.name = _name
            self.retailerAddress = _retailerAddress
            self.retailer_location = _retailer_location
            self.role = "Retailer"
        }
    }

    pub struct Manufacturer {
        pub let name: String
        pub let manufacturerAddress: Address
        pub let manufacturer_location: String
        pub let role: String

        init(_name: String, _manufacturerAddress: Address, _manufacturer_location: String) {
            self.name = _name
            self.manufacturerAddress = _manufacturerAddress
            self.manufacturer_location = _manufacturer_location
            self.role = "Manufacturer"
        }
    }

    access(contract) var farmers: {Address: Farmer}
    access(contract) var manufacturers: {Address: Manufacturer}
    access(contract) var distributers: {Address: Distributer}
    access(contract) var retailers: {Address: Retailer}

    pub fun getFarmers(farmerAddress: Address): &{Address: Farmer} {
        pre {
            self.farmers.containsKey(farmerAddress)
        }

        return &self.farmers as &{Address: Farmer}
    }

    pub fun getFarmerDetails(farmerAddress: Address): &Farmer {
        pre {
            self.farmers.containsKey(farmerAddress)
        }

        return &self.farmers[farmerAddress]! as &Farmer
    }

    pub fun getManufacturer(manufacturerAddress: Address): &{Address: Manufacturer} {
        pre {
            self.manufacturers.containsKey(manufacturerAddress)
        }

        return &self.manufacturers as &{Address: Manufacturer}
    }

    pub fun getManufacturerDetails(manufacturerAddress: Address): &Manufacturer {
        pre {
            self.manufacturers.containsKey(manufacturerAddress)
        }

        return &self.manufacturers[manufacturerAddress]! as &Manufacturer
    }

    pub fun getRetailers(retailerAddress: Address): &{Address: Retailer} {
        pre {
            self.retailers.containsKey(retailerAddress)
        }

        return &self.retailers as &{Address: Retailer}
    }

    pub fun getRetailerDetails(retailerAddress: Address): &Retailer {
        pre {
            self.retailers.containsKey(retailerAddress)
        }

        return &self.retailers[retailerAddress]! as &Retailer
    }

    pub fun getManufacturers(manufacturerAddress: Address): &{Address: Manufacturer} {
        pre {
            self.manufacturers.containsKey(manufacturerAddress)
        }

        return &self.manufacturers as &{Address: Manufacturer}
    }

    pub fun getManufacturersDetails(manufacturerAddress: Address): &Manufacturer {
        pre {
            self.manufacturers.containsKey(manufacturerAddress)
        }

        return &self.manufacturers[manufacturerAddress]! as &Manufacturer
    }

    pub fun createFarmer(name: String, farmerAddress: Address, farmer_location: String): Address {
        let farmerId = farmerAddress
        let farmer = Farmer(
            _name: name,
            _farmerAddress: farmerAddress,
            _farmer_location: farmer_location
        )
        self.farmers[farmerId] = farmer
        return farmerId
    }

    pub fun createManufacturer(name: String, manufacturerAddress: Address, manufacturer_location: String): Address {
        let manufacturerId = manufacturerAddress
        let manufacturer = Manufacturer(
            _name: name,
            _manufacturerAddress: manufacturerAddress,
            _manufacturer_location: manufacturer_location
        )
        self.manufacturers[manufacturerId] = manufacturer
        return manufacturerId
    }

    pub fun createDistributer(name: String, distributerAddress: Address, distributer_location: String): Address {
        let distributerId = distributerAddress
        let distributer = Distributer(
            _name: name,
            _distributerAddress: distributerAddress,
            _distributer_location: distributer_location
        )
        self.distributers[distributerId] = distributer
        return distributerId
    }

    pub fun createRetailer(name: String, retailerAddress: Address, retailer_location: String): Address {
        let retailerId = retailerAddress
        let retailer = Retailer(
            _name: name,
            _retailerAddress: retailerAddress,
            _retailer_location: retailer_location
        )
        self.retailers[retailerId] = retailer
        return retailerId
    }

    init() {
        self.farmers = {}
        self.manufacturers = {}
        self.retailers = {}
        self.distributers = {}
    }
    
}
