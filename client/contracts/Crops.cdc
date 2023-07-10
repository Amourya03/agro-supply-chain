pub contract Crops {

    pub var totalSupply: UInt64

    pub resource Crop {
        pub let id: UInt64
        pub var crop_name: String
        pub var crop_type: String
        pub var crop_info: String
        pub var quantity: String
        pub var price: String
        pub var production_data: String
        pub var isHarvested: Bool
        pub var isProcessed: Bool
        pub var isSold: Bool


        pub fun harvestCrop() {
            self.isHarvested = true
        }

        pub fun processCrop() {
            self.isProcessed = true
        }

        pub fun soldCrop() {
            self.isSold = true
        }

        init (_crop_name: String, _crop_info: String, _crop_type: String, _quantity: String, _production_data: String, _price: String) {
            self.id = Crops.totalSupply
            Crops.totalSupply = Crops.totalSupply + 1

            self.crop_name = _crop_name
            self.crop_info = _crop_info
            self.crop_type = _crop_type
            self.quantity = _quantity
            self.price = _price
            self.production_data = _production_data
            self.isHarvested = false
            self.isProcessed = false
            self.isSold = false
        }
    }

    // Event emitted when a product is harvested
    pub event Harvested(productId: UInt64, farmer: Address)

    // Event emitted when a product is processed
    pub event Processed(productId: UInt64)

    // Event emitted when a product is sold
    pub event Sold(productId: UInt64) // can add buyer: Address for more info


    pub resource interface cropCollectionPublic {
        pub fun getId(): [UInt64]
        pub fun deposit(crop: @Crop)
        pub fun borrowCropCollection(id: UInt64): &Crop?
    }

    pub resource cropCollection: cropCollectionPublic {
        pub var ownedCrops: @{UInt64: Crop}

        pub fun deposit(crop: @Crop) {
            self.ownedCrops[crop.id] <-! crop
        }

        pub fun withdraw(id: UInt64): @Crop {
            let crop <- self.ownedCrops.remove(key: id) ?? panic("This collection doesnt contain the crop of the given id")

            return <- crop
        }

        pub fun getId(): [UInt64] {
            return self.ownedCrops.keys
        }

        pub fun borrowCropCollection(id: UInt64): &Crop? {
            return &self.ownedCrops[id] as &Crop?
            
        }

        pub fun harvestCrop(id: UInt64, farmerAddress: Address) {
            if self.ownedCrops[id]?.isHarvested == false {

                self.ownedCrops[id]?.harvestCrop()
                emit Harvested(productId: id, farmer: farmerAddress)
            } else {
                panic("is already harvested")
            }
        }

        pub fun processCrop(id: UInt64) {
            if self.ownedCrops[id]?.isProcessed == false {

                self.ownedCrops[id]?.processCrop()
                emit Processed(productId: id)
            } else {
                panic("is already Processed")
            }
        }

        pub fun soldCrop(id: UInt64) {
            if self.ownedCrops[id]?.isSold == false {

                self.ownedCrops[id]?.isSold
                emit Sold(productId: id)
            } else {
                panic("is already Sold")
            }
        }

        init () {
            self.ownedCrops <- {}
        }

        destroy() {
            destroy self.ownedCrops
        }
    }

    pub fun createCropCollection(): @cropCollection {
        return <- create cropCollection()
    }

    pub fun createCrop(crop_name: String, crop_info: String, crop_type: String, quantity: String, production_data: String, price: String): @Crop {
        return <- create Crop(_crop_name: crop_name, _crop_info: crop_info, _crop_type: crop_type, _quantity: quantity, _production_data: production_data, _price: price)
    }

    init () {
        self.totalSupply = 0

    }

}
