export const depositCrop = `
//diposit crop

import Crops from 0xf8d6e0586b0a20c7

transaction(crop_name: String, crop_info: String, crop_type: String, quantity: String, production_data: String, price: String) {

    prepare(acct: AuthAccount) {

        let aReferenceCollection = acct.borrow<&Crops.cropCollection>(from: /storage/MyCropCollection)!

        aReferenceCollection.deposit(crop: <- Crops.createCrop(crop_name: crop_name, crop_info: crop_info, crop_type: crop_type, quantity: quantity, production_data: production_data, price: price))
    }

    execute {
        log("Stored newly minted Crop to collection")
    }
}`