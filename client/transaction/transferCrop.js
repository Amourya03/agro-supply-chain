export const transferCrop = `
//transfer crop

import Crops from 0xf8d6e0586b0a20c7

//givieng to: recipient
transaction(recipient: Address, id: UInt64) {

    //giver will sign the transaction
    prepare(acct: AuthAccount) {
        let collection = acct.borrow<&Crops.cropCollection>(from: /storage/MyCropCollection)!
        let publicReference = getAccount(recipient).getCapability(/public/MyCropCollection)
                                .borrow<&Crops.cropCollection{Crops.cropCollectionPublic}>()
                                ?? panic("This Account doesnot have a collection")
        
       publicReference.deposit(crop: <- collection.withdraw(id: id))
    }

    execute {
        log("transfered crop to reciepient")
    }
}`