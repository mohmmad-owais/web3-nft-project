const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT'); //This will actually compile our contract and 
    //generate the necessary files we need to work with our contract under the artifacts directory. Go check it out after you run this 
    
    const nftContract = await nftContractFactory.deploy(); //Hardhat will create a local Ethereum network for us, but just for this contract.
   
    await nftContract.deployed(); //We'll wait until our contract is officially mined and deployed to our local blockchain! That's right, hardhat
    // actually creates fake "miners" on your machine to try its best to imitate the actual blockchain.
    
    console.log("Contract deployed to:", nftContract.address);
  
  

 // Call the function.
  let txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

};

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

//So what does this mean? Well, every time you run a terminal command that starts with npx hardhat you are getting this
//hre object built on the fly using the hardhat.config.js specified in your code! This means you will never have to actually do some sort of import into your files like: