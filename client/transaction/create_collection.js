export const createCollection = `
//create collection

import Crops from 0xf8d6e0586b0a20c7

transaction {
    prepare(acct: AuthAccount) {
        acct.save(<- Crops.createCropCollection(), to: /storage/MyCropCollection)
        acct.link<&Crops.cropCollection{Crops.cropCollectionPublic}>(/public/MyCropCollection, target: /storage/MyCropCollection)
    }

    execute {
        log("Stored a collection for our crops")
    }
}`