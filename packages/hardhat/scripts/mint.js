/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0x3b0459C53FD6fC216FEa8817512990c886310386"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const ZineNFT = await ethers.getContract("Zine Collection", deployer);

  const preface = {
    "description": "Navigating Information Infrastructure introduces the Zine collection by outlining decentralised communities and infrastructure as a cartographic practice of simultaneously mapping and navigating a space that is constantly developing. By Kelsie Nabben and Michael Zargham.",
    "external_url": "http://ipfs.io/ipfs/QmcC4xUCPLEeT1KzX3hFXameqSXW2MYx7zK97j7GWj9iQc",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmfWz1DtbS5a6BB9sNee6W84fieNktKFhKKwLzGV2VYSzj",
    "name": "00. Navigating Information Infrastructure."
  }
  console.log("Uploading preface...")
  const uploaded = await ipfs.add(JSON.stringify(preface))

  console.log("Minting preface with IPFS hash ("+uploaded.path+")")
  await ZineNFT.mintItem("0x5BA02f4Ff6Af1d9d2Af8774D10fD32Eb57d4E2E6",uploaded.path,{gasLimit:10000000})


  await sleep(delayMS)


  const techno = {
    "description": "Techno-reflexivity presents a creative methodology for software developer un-bias, by employing the ethnographic technique of reflexivity. By Kelsie Nabben and Michael Zargham.",
    "external_url": "http://ipfs.io/ipfs/QmcC4xUCPLEeT1KzX3hFXameqSXW2MYx7zK97j7GWj9iQc",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmW5VwKVKpwhi3V9Mhz6eXH54LW4zDT7MKJyd5hw8Sj8A2",
    "name": "I. Techno-reflexivity "
  }
  console.log("Uploading techno...")
  const uploadedtechno = await ipfs.add(JSON.stringify(techno))

  console.log("Minting techno with IPFS hash ("+uploadedtechno.path+")")
  await ZineNFT.mintItem("0x5BA02f4Ff6Af1d9d2Af8774D10fD32Eb57d4E2E6",uploadedtechno.path,{gasLimit:10000000})



  await sleep(delayMS)


  const algorithms = {
    "description": "Algorithms as Policy investigates how algorithm design can be reconceptualized as policy-making to create safer digital infrastructures. By Michael Zargham and Kelsie Nabben.",
    "external_url": "http://ipfs.io/ipfs/Qmaq2ZkL3o8fdNKgVAgQ7voiVqbMf72GZ2mAfWeCLWMsT1",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmervY1cScWQ5uUTs9YS2Fn3fpF7ainiNzYXbjLbNQmCxB",
    "name": "II. Algorithms as Policy"
  }
  console.log("Uploading algorithms...")
  const uploadedalgorithms = await ipfs.add(JSON.stringify(algorithms))

  console.log("Minting algorithms with IPFS hash ("+uploadedalgorithms.path+")")
  await ZineNFT.mintItem("0x2a6d80D390a4E2651f375A7a3aF78C5F558b9740",uploadedalgorithms.path,{gasLimit:10000000})



  await sleep(delayMS)


  const ethics = {
    "description": "Engineering Ethics inspects ethics as the core mission and motivation of participation in Web3 and token engineering commons. By Michael Zargham. ",
    "external_url": "http://ipfs.io/ipfs/QmZXBZGiVpSTLk1HE1ZtcuMN6hxQT1krZsfqazWatwpdhA",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmamUPwxWobGJngyEVCUYznCo7bhsaH1zT7DgJX78aKv9X",
    "name": "III. Engineering Ethics",
  }
  console.log("Uploading ethics...")
  const uploadedethics = await ipfs.add(JSON.stringify(ethics))

  console.log("Minting ethics with IPFS hash ("+uploadedethics.path+")")
  await ZineNFT.mintItem("0x6868738d8E1E38E4bD2EB601262453D626D9648c",uploadedethics.path,{gasLimit:10000000})



  await sleep(delayMS)


  const decentralisedInfo = {
    "description": "An Ethnography of Decentralised Information Infrastructure is a historical investigation of cypherpunk nomenclature to create a genealogy and categorise the unique attributes of decentralised technologies. By Kelsie Nabben.",
    "external_url": "http://ipfs.io/ipfs/QmaNc4HLFEWTeujAmXGxyPWLcvHVRG56kzDRuG8ur24GDX",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmUqn48onXHoPEcoGAXxk3cbsQjdWbnqPCVPiedpkSWpKs",
    "name": "IV. Decentralised Information Infrastructure",
  }
  console.log("Uploading decentralisedInfo...")
  const uploadeddecentralisedInfo = await ipfs.add(JSON.stringify(decentralisedInfo))

  console.log("Minting decentralisedInfo with IPFS hash ("+uploadeddecentralisedInfo.path+")")
  await ZineNFT.mintItem("0xF5535D4B271edC5E35dADC460385FE44F286Ab8e",uploadeddecentralisedInfo.path,{gasLimit:10000000})



  await sleep(delayMS)

  const adhoc = {
    "description": "The Possibilities of '“Ad Hoc” Decentralised Digital Infrastructure' investigates decentralised technologies as enablers of new types of peer-to-peer networks with novel implications for how people coordinate. By Kelsie Nabben.!",
    "external_url": "http://ipfs.io/ipfs/QmPXEoCWDm4Uci2tad8LX2cy4Vi8t9GGXcFrEDNoC1vtTq",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmXososJejizo8dPcwCNZNbJ9JpwouW6vY5RqrnxyYmmAD",
    "name": "V. “Ad Hoc” Decentralised Digital Infrastructure",
  }
  console.log("Uploading adhoc...")
  const uploadedadhoc = await ipfs.add(JSON.stringify(adhoc))

  console.log("Minting adhoc with IPFS hash ("+uploadedadhoc.path+")")
  await ZineNFT.mintItem("0x2945B24ee5e12914e4c3FEc462e9409d792C3EBe",uploadedadhoc.path,{gasLimit:10000000})


  await sleep(delayMS)

  const games = {
    "description": "Network Formation Games is a study of coordination games in algorthmic systems.  By Michael Zargham.",
    "external_url": "http://ipfs.io/ipfs/QmeD68oUZgzvcsPjQ7Yn9nZR2SgcMRUgafh6MBn1UJqkmo",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmP3KW2NpixaPvmACZTwuknERckCwqjoL1bPqxYzDFQgaE",
    "name": "VI. Network Formation Games",
  }
  console.log("Uploading games...")
  const uploadedgames = await ipfs.add(JSON.stringify(games))

  console.log("Minting games with IPFS hash ("+uploadedgames.path+")")
  await ZineNFT.mintItem("0xf6Ce0526E8ee666441B7F5F0eBB78704f4C09746",uploadedgames.path,{gasLimit:10000000})


  await sleep(delayMS)

  const daos = {
    "description": "Exploring DAOs as a New Kind of Institution with the Metagovernance project and Commons Stack. By Michael Zargham, Primavera de Fillipi, Joshua Tan, and Jeff Emmett in 2020.",
    "external_url": "http://ipfs.io/ipfs/QmYvZSggq63QekAoJB68Xhup5iZvQFwW7qkhiR9WpZftVH",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmcFYiB2t5bX81dy9dLg2XjtNSYEoB94S5pD43sPSPb7R1",
    "name": "VII. Exploring DAOs",
  }
  console.log("Uploading daos...")
  const uploadeddaos = await ipfs.add(JSON.stringify(daos))

  console.log("Minting daos with IPFS hash ("+uploadeddaos.path+")")
  await ZineNFT.mintItem("0x397b2dA916Fd53d1db9758c65972c60a2c037d78",uploadeddaos.path,{gasLimit:10000000})


  await sleep(delayMS)

  const ostrom = {
    "description": "Automating Ostrom for Effective DAO Management provides comparatively early contributions on decentralised technologies as 'commons' and designing cyber-physical commons to be ‘Ostrom Compliant’ by applying Ostrom principles. By Jeff Emmett and Michael Zargham in 2019.",
    "external_url": "http://ipfs.io/ipfs/QmTEVh19FKmpSk3hcmiWZbXxE657Ht1VBR2brTNSBzR1im",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmWV328ADJTUiktdeU2yfQp2qeVayHhTHRR1msTCgeDzqk",
    "name": "VIII. Automating Ostrom",
  }
  console.log("Uploading ostrom...")
  const uploadedostrom = await ipfs.add(JSON.stringify(ostrom))

  console.log("Minting ostrom with IPFS hash ("+uploadedostrom.path+")")
  await ZineNFT.mintItem("0x8110d1D04ac316fdCACe8f24fD60C86b810AB15A",uploadedostrom.path,{gasLimit:10000000})


  await sleep(delayMS)

  const cad = {
    "description": "Towards Computer-Aided Governance applies computer-aided governance approaches to a case study on Gitcoin grants. By Michael Zargham, Danilo Lessa Bernardinelli, and Jeff Emmett.",
    "external_url": "http://ipfs.io/ipfs/QmZP3rSNtZC8bPYGHNUdNyqF3GHTVDp5hU4tSkLeoJVdRk",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmRMZNkCeKJ1njkTDvjGeoBoLch5BNmJXpckpHyrNyL6yq",
    "name": "IX. Towards Computer-Aided Governance",
  }
  console.log("Uploading cad...")
  const uploadedcad = await ipfs.add(JSON.stringify(cad))

  console.log("Minting cad with IPFS hash ("+uploadedcad.path+")")
  await ZineNFT.mintItem("0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6",uploadedcad.path,{gasLimit:10000000})


  await sleep(delayMS)

  const deterring = {
    "description": "Deterring Adversarial Behavior at Scale in Gitcoin Grants presents a novel frame for community based algorithmic policy making. By Jeff Emmett, Kelsie Nabben, Danilo Lessa Bernadelli, and Michael Zargham.",
    "external_url": "http://ipfs.io/ipfs/QmRsvpmEJ1ZjfoxuudT4a1v2XPswHR7tsSASq6ZQxMRLav",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/QmPqNGNWHzBrpZ1d3ybW1e26RY34Rv86hcLb6tgwtwTYPi",
    "name": "X. Deterring Adversarial Behaviour",
  }
  console.log("Uploading deterring...")
  const uploadeddeterring = await ipfs.add(JSON.stringify(deterring))

  console.log("Minting deterring with IPFS hash ("+uploadeddeterring.path+")")
  await ZineNFT.mintItem("0xD4567069C5a1c1fc8261d8Ff5C0B1d98f069Cf47",uploadeddeterring.path,{gasLimit:10000000})


  await sleep(delayMS)

  const terra = {
    "description": "Terra Nullius concludes the Zine collection by applying our methodologies to ourselves and inviting readers to move from mapping to modelling by engaging with and applying the content presented. By Kelsie Nabben and Michael Zargham.",
    "external_url": "http://ipfs.io/ipfs/QmdduMKUJVW5vbmW9mg1d2CjyUE9n4V7vnqLgZg5CSibV9",// <-- this can link to a page for the specific file too
    "image": "http://ipfs.io/ipfs/Qmcq6pc3guaoZ4vKZQuwMZH69KeqpqUPzohavxEiGBtZrH",
    "name": "000. Terra Nullius",
  }
  console.log("Uploading terra...")
  const uploadedterra = await ipfs.add(JSON.stringify(terra))

  console.log("Minting terra with IPFS hash ("+uploadedterra.path+")")
  await ZineNFT.mintItem("0x5BA02f4Ff6Af1d9d2Af8774D10fD32Eb57d4E2E6",uploadedterra.path,{gasLimit:10000000})






  //await sleep(delayMS)

  // console.log("Transferring Ownership of ZineNFT to "+toAddress+"...")

  // await ZineNFT.transferOwnership(toAddress)

  // await sleep(delayMS)

  /*


  console.log("Minting techno...")
  await ZineNFT.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","techno.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
