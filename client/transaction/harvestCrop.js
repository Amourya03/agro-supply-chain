export const harvest = `
import Crops from 0xf8d6e0586b0a20c7

transaction(id: UInt64) {

    prepare(acct: AuthAccount) {

        let aReferenceCollection = acct.borrow<&Crops.cropCollection>(from: /storage/MyCropCollection)!

        aReferenceCollection.harvestCrop(id: id, farmerAddress: acct.address)
    }

    execute {
        log("crop harvested")
    }
}
`