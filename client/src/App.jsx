import { useState, useEffect } from 'react'
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { createCollection } from '../transaction/create_collection.js'
import { depositCrop } from '../transaction/deposit_crop.js'
import { transferCrop } from '../transaction/transferCrop.js'
import { harvest } from '../transaction/harvestCrop.js'
import { processCrop } from '../transaction/processCrop.js'
import { sold } from '../transaction/soldCrop.js'
import diagram3 from './assets/diagram3.png'
import diagram2 from './assets/diagram2.png'
import diagram from './assets/diagram.png'

fcl.config()
  .put("accessNode.api", "http://localhost:8888")
  .put("discovery.wallet", "http://localhost:8701/fcl/authn")

// 0xfd69f80331841c4c

function App() {

  const [user, setUser] = useState({ addr: '' });
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [cropName, setCropName] = useState();
  const [cropInfo, setCropInfo] = useState();
  const [cropType, setCropType] = useState();
  const [quantity, setQuantity] = useState();
  const [productionData, setProductionData] = useState();
  const [price, setPrice] = useState();
  const [cropDetails, setCropDetails] = useState();
  const [recipeint, setRecipeint] = useState();
  const [id, setId] = useState();
  const [cropId, setCropId] = useState();
  const [allCropIds, setAllCropIds] = useState();

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, [])

  const Login = async () => {
    fcl.authenticate();
  }
  const Logout = async () => {
    fcl.unauthenticate();
  }

  const registerUser = async () => {

    try {

      const transactionId = await fcl.send([
        fcl.transaction`
        import RegisterdUsers from 0xf8d6e0586b0a20c7

transaction(_name: String, _farmer_location: String) {

  prepare(acct: AuthAccount) {
    let farmerId = RegisterdUsers.createFarmer(name: _name, farmerAddress: acct.address, farmer_location: _farmer_location)
  }

  execute {
    log("A Farmer is registered")
  }
}
        `,
        fcl.args([
          fcl.arg(name, t.String),
          fcl.arg(location, t.String)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  const runScript = async () => {
    const response = await fcl.query({
      cadence: `
      import RegisterdUsers from 0xf8d6e0586b0a20c7

      pub fun main(){
        let farmerDetails:&RegisterdUsers.Farmer = RegisterdUsers.getFarmerDetails(farmerAddress: 0xf8d6e0586b0a20c7)
        return &farmerDetails
    }
      `
    })

    console.log(response)
  }

  const makeCollection = async () => {

    try {

      const transactionId = await fcl.send([
        fcl.transaction(createCollection),
        fcl.args([]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  const depositInCollection = async () => {

    try {

      const transactionId = await fcl.send([
        fcl.transaction(depositCrop),
        fcl.args([
          fcl.arg(cropName, t.String),
          fcl.arg(cropInfo, t.String),
          fcl.arg(cropType, t.String),
          fcl.arg(quantity, t.String),
          fcl.arg(productionData, t.String),
          fcl.arg(price, t.String)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  const cropTransfer = async () => {

    try {

      const transactionId = await fcl.send([
        fcl.transaction(transferCrop),
        fcl.args([
          fcl.arg(recipeint, t.Address),
          fcl.arg(id, t.UInt64)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    setId(null);
  }

  const cropHarvest = async () => {

    try {

      const transactionId = await fcl.send([
        fcl.transaction(harvest),
        fcl.args([
          fcl.arg(id, t.UInt64)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    setId(null);
  }

  const cropProcess = async () => {

    try {

      const transactionId = await fcl.send([
        fcl.transaction(processCrop),
        fcl.args([
          fcl.arg(id, t.UInt64)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    setId(null);
  }

  const cropSold = async () => {

    try {

      const transactionId = await fcl.send([
        fcl.transaction(sold),
        fcl.args([
          fcl.arg(id, t.UInt64)
        ]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999)
      ]).then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
    setId(null);
  }


  const getCropIds = async () => {
    const response = await fcl.query({
      cadence: `
      import Crops from 0xf8d6e0586b0a20c7

pub fun main(account: Address): [UInt64]{
    let publicReference = getAccount(account).getCapability(/public/MyCropCollection)
                            .borrow<&Crops.cropCollection{Crops.cropCollectionPublic}>()
                            ?? panic("This account does not have a collection")
    
    return publicReference.getId()
}
      `,
      args: (arg, t) => [
        arg(user?.addr, t.Address)
      ],
    })

    const result = Object.entries(response);
    setAllCropIds(result)
    console.log(result)
  }

  const getCropDetails = async () => {
    const response = await fcl.query({
      cadence: `
      import Crops from 0xf8d6e0586b0a20c7

      pub fun main(account: Address, id: UInt64): &Crops.Crop{
        let publicReference = getAccount(account).getCapability(/public/MyCropCollection)
                                .borrow<&Crops.cropCollection{Crops.cropCollectionPublic}>()
                                ?? panic("This account does not have a collection")
        
        return publicReference.borrowCropCollection(id: id)!
    }
      `,
      args: (arg, t) => [
        arg(user?.addr, t.Address),
        arg(cropId, t.UInt64)
      ],
    })
    const result = Object.entries(response);
    setCropDetails(result)
    console.log(result)
  }





  return (
    <div className='flex flex-col justify-center items-center gap-6 bg-gradient-to-tr from-sky-100 via-cyan-100 to-emerald-50'>
        <h1 className='font-bold'>Agro Supply Chain</h1>
      
      <span>{"Hi "+user?.addr ?? "No Address"}</span>
      {user?.addr ? (
      <div className='flex flex-col gap-4'>
      <button onClick={Logout} className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>Disconnect Wallet</button>
      <div className='flex gap-2 flex-col justify-center'>
        <h1 className='font-bold'>Register Yourself:</h1>
        <input type="text" placeholder='User Name' onChange={(e) => setName(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <input type="text" placeholder='User Location' onChange={(e) => setLocation(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <button 
        className='bg-[#2952e3] py-2 px-7 mx-4 w-1/3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'
        onClick={() => registerUser()}>Submit</button>
        <button onClick={() => runScript()} 
        className='bg-gray-600 py-2 px-7 mx-4 w-1/3 rounded-full cursor-pointer hover:bg-gray-800 text-white'
        >getDetails</button>
      </div>
      <button onClick={() => makeCollection()} className='bg-[#2952e3] py-2 px-7 mx-4 w-1/3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>makecollection</button>
      <div className='flex gap-2 flex-col'>
        <h1 className='font-bold'>Add Your Crop Details: </h1>
        <input type="text" placeholder='Crop Name' onChange={(e) => setCropName(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <input type="text" placeholder='Crop Info' onChange={(e) => setCropInfo(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <input type="text" placeholder='Crop Type' onChange={(e) => setCropType(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <input type="text" placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <input type="text" placeholder='Price' onChange={(e) => setPrice(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <input type="text" placeholder='Production Data' onChange={(e) => setProductionData(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <button onClick={() => depositInCollection()} 
        className='bg-green-600 py-2 px-7 mx-4 w-1/3 rounded-full cursor-pointer hover:bg-green-800 text-white'
        >depositInCollection</button>
      </div>
      {allCropIds ? (
        <h1 className='text-sm flex flex-col gap-6'>{allCropIds.map((item) => (<p className='text-sm gap-2'>{item}</p>))}</h1>
      ) : (<h1>Nothinn</h1>)}
      <button onClick={() => getCropIds()} className='bg-[#2952e3] py-2 px-7 mx-4 w-1/3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>get Crop ids</button>
      <input type="text" placeholder='crop id for crop Data' onChange={(e) => setCropId(e.target.value)} className='border-black border-1 rounded-md p-2' />
      <button onClick={() => getCropDetails()} className='bg-[#2952e3] py-2 px-7 mx-4 w-1/3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>get Crop details</button>

      {cropDetails ? (
        <h1 className='text-sm flex flex-col gap-2 justify-start items-start'>{cropDetails.map((item) => (<p className='text-sm'>{item[0]} : {item[1]}</p>))}</h1>
      ) : (<h1>Nothinn</h1>)}

      <div className='flex gap-2'>
      <h1 className='font-bold'>Transfer to Recipient: </h1>
        <input type="text" placeholder='Address of recipeint' onChange={(e) => setRecipeint(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <input type="text" placeholder='id of Crop' onChange={(e) => setId(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <button onClick={() => cropTransfer()} className='bg-red-600 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-red-800 text-white'>Transfer Your Crop</button>
      </div>
      <div>
        <input type="text" placeholder='id of Crop' onChange={(e) => setId(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <button onClick={() => cropHarvest()} className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>harvest Your Crop</button>
      </div>
      <div>
        <input type="text" placeholder='id of Crop' onChange={(e) => setId(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <button onClick={() => cropProcess()} className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>process Your Crop</button>
      </div>
      <div>
        <input type="text" placeholder='id of Crop' onChange={(e) => setId(e.target.value)} className='border-black border-1 rounded-md p-2' />
        <button onClick={() => cropSold()} className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>sold Your Crop</button>
      </div>
  </div>)
        : (
          <button onClick={Login} className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>Connect Wallet</button>
        )}


<div className='m-10 p-24 font-bold gap-6 grid grid-cols-1 lg:grid-cols-2 items-center'>

<img src={diagram3} alt="pic-1" className=' w-2/3' />
<p>Food Safety Embracing Quality Control and Sustainability in the Agro Supply Chain.</p>
<p>Agro supply chain refers to the network of activities involved in the production, processing, distribution, and consumption of agricultural products. It encompasses various stages and stakeholders, from farmers and suppliers to retailers and consumers. Here are some key points about the agro supply chain:</p>
<p>
Production: The process begins with agricultural production, where farmers grow crops, raise livestock, or cultivate fish or other aquaculture products.</p>
<p>
Harvesting and Post-harvesting: After the crops reach maturity, they are harvested and prepared for further processing or distribution. Post-harvest activities include sorting, grading, cleaning, and packaging to maintain product quality.</p>
<p><img src={diagram2} alt="pic-1" className=' w-2/3' />
Processing: Agricultural products may undergo processing to enhance their value or transform them into various forms. This can include activities like milling, canning, freezing, drying, or extracting essential oils.</p>
<p>
Distribution and Retail: Agricultural products are distributed to wholesalers, retailers, and food service providers. This stage involves managing inventories, maintaining product quality, and meeting customer demand.</p>

<p><img src={diagram} alt="pic-1" className=' w-2/3' />
<p>
Consumer Consumption: The final stage of the agro supply chain is when consumers purchase and consume the agricultural products. Consumer preferences, health considerations, and sustainability concerns are increasingly influencing consumption patterns.</p>
Efficient management of the agro supply chain is vital for optimizing productivity, reducing waste, ensuring food security, and meeting consumer demands in a sustainable and responsible manner.</p>
</div>
        </div>
        )
      }

      export default App
