/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require("ipfs-http-client");
const ipfs = ipfsAPI({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
});

const delayMS = 6000; //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const ZineNFT = await ethers.getContract("YourCollectible", deployer);

  const preface = {
    description:
      '*"The scaffolding of Cyberspace is infrastructure which provides the foundation for the essential services which govern and serve society."*\
      \
      [Navigating Information Infrastructure](http://ipfs.io/ipfs/QmfCsS4ARcHm4B55Yk52stSztRUubztgjTG1RSdxQeMDTr) introduces the Zine collection by outlining decentralised communities and infrastructure as a cartographic practice of simultaneously mapping and navigating a space that is constantly developing. By Kelsie Nabben and Michael Zargham.',
    external_url:
      "http://ipfs.io/ipfs/QmfCsS4ARcHm4B55Yk52stSztRUubztgjTG1RSdxQeMDTr", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmfWz1DtbS5a6BB9sNee6W84fieNktKFhKKwLzGV2VYSzj",
    name: "00. Navigating Information Infrastructure.",
  };

  console.log("Uploading preface...");
  const uploaded = await ipfs.add(JSON.stringify(preface));

  console.log("Minting preface with IPFS hash (" + uploaded.path + ")");
  await ZineNFT.mintItem(
    "0xDF290293C4A4d6eBe38Fd7085d7721041f927E0a",
    uploaded.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const techno = {
    description:
      '*"Techno-reflexivity, as awareness of how one’s own ontological framework is projected in their work, is especially pertinent to automated infrastructures."*\
      \
      [Techno-reflexivity](http://ipfs.io/ipfs/QmZNnXCxwodk5WSAuTbZGKCg75pY5CGxsVaB7TsgjFRRvy) presents a creative methodology for software developer un-bias, by employing the ethnographic technique of reflexivity. By Kelsie Nabben and Michael Zargham.',
    external_url:
      "http://ipfs.io/ipfs/QmZNnXCxwodk5WSAuTbZGKCg75pY5CGxsVaB7TsgjFRRvy", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmW5VwKVKpwhi3V9Mhz6eXH54LW4zDT7MKJyd5hw8Sj8A2",
    name: "I. Techno-reflexivity ",
  };
  console.log("Uploading techno...");
  const uploadedtechno = await ipfs.add(JSON.stringify(techno));

  console.log("Minting techno with IPFS hash (" + uploadedtechno.path + ")");
  await ZineNFT.mintItem(
    "0x5BA02f4Ff6Af1d9d2Af8774D10fD32Eb57d4E2E6",
    uploadedtechno.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const algorithms = {
    description:
      '*"It is incumbent upon software engineers to consider algorithm design work with the awareness that should be associated with policy-making related to the burden of responsibility to the ‘public good’."\
      \
        [Algorithms as Policy](http://ipfs.io/ipfs/QmZzbModrM4vouB6FHu5QtBhE4H2KJwAg3Dcxz8fBN65mL) investigates how algorithm design can be reconceptualized as policy-making to create safer digital infrastructures. By Michael Zargham and Kelsie Nabben.',
    external_url:
      "http://ipfs.io/ipfs/QmZzbModrM4vouB6FHu5QtBhE4H2KJwAg3Dcxz8fBN65mL", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmervY1cScWQ5uUTs9YS2Fn3fpF7ainiNzYXbjLbNQmCxB",
    name: "II. Algorithms as Policy",
  };
  console.log("Uploading algorithms...");
  const uploadedalgorithms = await ipfs.add(JSON.stringify(algorithms));

  console.log(
    "Minting algorithms with IPFS hash (" + uploadedalgorithms.path + ")"
  );
  await ZineNFT.mintItem(
    "0x2a6d80D390a4E2651f375A7a3aF78C5F558b9740",
    uploadedalgorithms.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const ethics = {
    description:
      '*"The ethical engineer is one who is competent, responsible, and respectful of Cicero’s Creed II. Cicero’s Creed, engineering’s oldest ethic, directed engineers to place the safety of the public above all else."* - Cambridge University Press, 1997\
      \
      [Engineering Ethics in Web3](http://ipfs.io/ipfs/QmXDKmHRNCSDrSo1FznjAxV7B9xjPSVew7qG8xqQr37akp) inspects ethics as the core mission and motivation of participation in Web3 and token engineering commons. By Michael Zargham.',
    external_url:
      "http://ipfs.io/ipfs/QmXDKmHRNCSDrSo1FznjAxV7B9xjPSVew7qG8xqQr37akp", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmamUPwxWobGJngyEVCUYznCo7bhsaH1zT7DgJX78aKv9X",
    name: "III. Engineering Ethics",
  };
  console.log("Uploading ethics...");
  const uploadedethics = await ipfs.add(JSON.stringify(ethics));

  console.log("Minting ethics with IPFS hash (" + uploadedethics.path + ")");
  await ZineNFT.mintItem(
    "0x6868738d8E1E38E4bD2EB601262453D626D9648c",
    uploadedethics.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const decentralisedInfo = {
    description:
      '*"Decentralised information infrastructure is a rapidly developing sub-set of information systems infrastructure which deserves ethnographic attention to inspect the hard questions about the opportunities and implications of different architectures of digital tools in society."*\
      \
      [An Ethnography of Decentralised Information Infrastructure](http://ipfs.io/ipfs/QmPEAgfmET4DuZ9ByApZQQUX8fovMytXFU9Y57MZtAcFe2) is a historical investigation of cypherpunk nomenclature to create a genealogy and categorise the unique attributes of decentralised technologies. By Kelsie Nabben.',
    external_url:
      "http://ipfs.io/ipfs/QmPEAgfmET4DuZ9ByApZQQUX8fovMytXFU9Y57MZtAcFe2", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmUqn48onXHoPEcoGAXxk3cbsQjdWbnqPCVPiedpkSWpKs",
    name: "IV. Decentralised Information Infrastructure",
  };
  console.log("Uploading decentralisedInfo...");
  const uploadeddecentralisedInfo = await ipfs.add(
    JSON.stringify(decentralisedInfo)
  );

  console.log(
    "Minting decentralisedInfo with IPFS hash (" +
      uploadeddecentralisedInfo.path +
      ")"
  );
  await ZineNFT.mintItem(
    "0xF5535D4B271edC5E35dADC460385FE44F286Ab8e",
    uploadeddecentralisedInfo.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const adhoc = {
    description:
      '*"“Ad hoc” decentralised digital infrastructure’ enables self-organisation and coordination for actors in a network through publicly available, decentralised digital tools. The hope of advocates is that decentralised digital technologies can provide more resilient infrastructure for society."*\
      \
      [The Possibilities of “Ad Hoc” Decentralised Digital Infrastructure](http://ipfs.io/ipfs/QmSzGDwSsHU3CK36YFf9GaapPVRGThzkDQoZT2npUZ4hQ8) investigates decentralised technologies as enablers of new types of peer-to-peer networks with novel implications for how people coordinate. By Kelsie Nabben.',
    external_url:
      "http://ipfs.io/ipfs/QmSzGDwSsHU3CK36YFf9GaapPVRGThzkDQoZT2npUZ4hQ8", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmXososJejizo8dPcwCNZNbJ9JpwouW6vY5RqrnxyYmmAD",
    name: "V. “Ad Hoc” Decentralised Digital Infrastructure",
  };
  console.log("Uploading adhoc...");
  const uploadedadhoc = await ipfs.add(JSON.stringify(adhoc));

  console.log("Minting adhoc with IPFS hash (" + uploadedadhoc.path + ")");
  await ZineNFT.mintItem(
    "0x2945B24ee5e12914e4c3FEc462e9409d792C3EBe",
    uploadedadhoc.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const games = {
    description:
      '*"Network science uses formal mathematical representations of networks in order to combined formal theory with observed behavior."*\
      \
      [Network Formation Games](http://ipfs.io/ipfs/QmXEKwBMBiJ6WUEqWNBman28UFe3qvn2db3hYa8B2kFeBR) is a study of coordination games in algorthmic systems.  By Michael Zargham.',
    external_url:
      "http://ipfs.io/ipfs/QmXEKwBMBiJ6WUEqWNBman28UFe3qvn2db3hYa8B2kFeBR", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmP3KW2NpixaPvmACZTwuknERckCwqjoL1bPqxYzDFQgaE",
    name: "VI. Network Formation Games",
  };
  console.log("Uploading games...");
  const uploadedgames = await ipfs.add(JSON.stringify(games));

  console.log("Minting games with IPFS hash (" + uploadedgames.path + ")");
  await ZineNFT.mintItem(
    "0xf6Ce0526E8ee666441B7F5F0eBB78704f4C09746",
    uploadedgames.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const daos = {
    description:
      '*"Institutions are defined as stable patterns for regulating human behavior."*\
      \
      [Exploring DAOs as a New Kind of Institution](http://ipfs.io/ipfs/QmZbP2v7iTroUfE84exWBAmMEQSiAtVADmPEAuxSjm5PmE) with the Metagovernance project and Commons Stack. By Michael Zargham, Primavera de Fillipi, Joshua Tan, and Jeff Emmett in 2020.',
    external_url:
      "http://ipfs.io/ipfs/QmZbP2v7iTroUfE84exWBAmMEQSiAtVADmPEAuxSjm5PmE", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmcFYiB2t5bX81dy9dLg2XjtNSYEoB94S5pD43sPSPb7R1",
    name: "VII. Exploring DAOs",
  };
  console.log("Uploading daos...");
  const uploadeddaos = await ipfs.add(JSON.stringify(daos));

  console.log("Minting daos with IPFS hash (" + uploadeddaos.path + ")");
  await ZineNFT.mintItem(
    "0x397b2dA916Fd53d1db9758c65972c60a2c037d78",
    uploadeddaos.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const ostrom = {
    description:
      '*"We look forward to a future in which we can increasingly ‘automate Ostrom’ to facilitate the application of these principles by communities"*\
      \
      [Automating Ostrom for Effective DAO Management](http://ipfs.io/ipfs/QmZkaSbgYqUHuMsMtzdzDwQ5KuEyeanDwBbFWAEw72vNPy) provides comparatively early contributions on decentralised technologies as "commons" and designing cyber-physical commons to be ‘Ostrom Compliant’ by applying Ostrom principles. By Jeff Emmett and Michael Zargham in 2019.',
    external_url:
      "http://ipfs.io/ipfs/QmZkaSbgYqUHuMsMtzdzDwQ5KuEyeanDwBbFWAEw72vNPy", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmWV328ADJTUiktdeU2yfQp2qeVayHhTHRR1msTCgeDzqk",
    name: "VIII. Automating Ostrom",
  };
  console.log("Uploading ostrom...");
  const uploadedostrom = await ipfs.add(JSON.stringify(ostrom));

  console.log("Minting ostrom with IPFS hash (" + uploadedostrom.path + ")");
  await ZineNFT.mintItem(
    "0x8110d1D04ac316fdCACe8f24fD60C86b810AB15A",
    uploadedostrom.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const cad = {
    description:
      '*"Using applied complex systems engineering, we are investigating the design of data-driven policy tools that can better sense and respond to the needs of a network."*\
      \
      [Towards Computer-Aided Governance of Gitcoin Grants](http://ipfs.io/ipfs/QmZAkhYgzZeYUjrCXDjy1q8rnXmwFk7x1A75KzZevRm76o) applies computer-aided governance approaches to a case study on Gitcoin grants. By Michael Zargham, Danilo Lessa Bernardinelli, and Jeff Emmett.',
    external_url:
      "http://ipfs.io/ipfs/QmZAkhYgzZeYUjrCXDjy1q8rnXmwFk7x1A75KzZevRm76o", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmRMZNkCeKJ1njkTDvjGeoBoLch5BNmJXpckpHyrNyL6yq",
    name: "IX. Towards Computer-Aided Governance",
  };
  console.log("Uploading cad...");
  const uploadedcad = await ipfs.add(JSON.stringify(cad));

  console.log("Minting cad with IPFS hash (" + uploadedcad.path + ")");
  await ZineNFT.mintItem(
    "0xde21F729137C5Af1b01d73aF1dC21eFfa2B8a0d6",
    uploadedcad.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const deterring = {
    description:
      '*"The 4-step framework introduced is an iterative approach to increasing the sophistication of detection and mitigation of unwanted behaviors."*\
      \
      [Deterring Adversarial Behavior at Scale in Gitcoin Grants](http://ipfs.io/ipfs/QmTvMsxSWv3EFqsWPxL8eTWxjVzGoBhAYNwNkpRs3fPBjM) presents a novel frame for community based algorithmic policy making. By Jeff Emmett, Kelsie Nabben, Danilo Lessa Bernadelli, and Michael Zargham.',
    external_url:
      "http://ipfs.io/ipfs/QmTvMsxSWv3EFqsWPxL8eTWxjVzGoBhAYNwNkpRs3fPBjM", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/QmPqNGNWHzBrpZ1d3ybW1e26RY34Rv86hcLb6tgwtwTYPi",
    name: "X. Deterring Adversarial Behaviour",
  };
  console.log("Uploading deterring...");
  const uploadeddeterring = await ipfs.add(JSON.stringify(deterring));

  console.log(
    "Minting deterring with IPFS hash (" + uploadeddeterring.path + ")"
  );
  await ZineNFT.mintItem(
    "0xD4567069C5a1c1fc8261d8Ff5C0B1d98f069Cf47",
    uploadeddeterring.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const terra = {
    description:
      '*"In exploring the various layers of these complex, multi-scale systems we have constantly related the technical, such as algorithms, to the human, such as policies."*\
      \
      [Terra Nullius](http://ipfs.io/ipfs/QmWQQizQT8wfzkm71RybzKDrWuFyky6npfwxgcy8V6pMyf) concludes the Zine collection by applying our methodologies to ourselves and inviting readers to move from mapping to modelling by engaging with and applying the content presented. By Kelsie Nabben and Michael Zargham.',
    external_url:
      "http://ipfs.io/ipfs/QmWQQizQT8wfzkm71RybzKDrWuFyky6npfwxgcy8V6pMyf", // <-- this can link to a page for the specific file too
    image: "http://ipfs.io/ipfs/Qmcq6pc3guaoZ4vKZQuwMZH69KeqpqUPzohavxEiGBtZrH",
    name: "000. Terra Nullius",
  };
  console.log("Uploading terra...");
  const uploadedterra = await ipfs.add(JSON.stringify(terra));

  console.log("Minting terra with IPFS hash (" + uploadedterra.path + ")");
  await ZineNFT.mintItem(
    "0xDF290293C4A4d6eBe38Fd7085d7721041f927E0a",
    uploadedterra.path,
    { gasLimit: 10000000 }
  );

  await sleep(delayMS);

  const contract_metadata = {
    name: "ZINE: Navigating Information Infrastructure",
    description:
      "Navigating Information Infrastructure is a fusion of research and art. A digital Zine, this work is self-published using the same public digital infrastructures that are the subject of this work. As field researchers in cyberspace, we simultaneously map and navigate a space that is constantly evolving. That space is not only the digital infrastructure but also the social infrastructure: the communities that develop, operate, maintain and govern those infrastructures. \n\nThis collection is curated by Kelsie Nabben and Michael Zargham. Thank you to contributing authors and long-term collaborators: Jeff Emmett, Primavera Di Fillipi, Josh Tan, Danilo Lessa Bernardineli, as well as those who provided valuable feedback, including Jessica Zartler from Blockscience, and Professor Ellie Rennie from RMIT University. Credit for the design work goes to Vicky Plashevska and Max Kudinov from Magic Powered. Thanks to Matt Stephenson of Planck and Nico Rodriguez of MetaVision Labs for technical support with the development, deployment and distribution of the 12 unique NFTs representing this work. The full content of the Zine is available at IPFS CID [bafybeif24ylpdh47oyovmbjfzgq4t7vzmymixggdbj4lop2ceqyuh7gjne](http://ipfs.io/ipfs/bafybeif24ylpdh47oyovmbjfzgq4t7vzmymixggdbj4lop2ceqyuh7gjne)",
    image:
      "http://ipfs.io/ipfs/bafybeih4aagfytp7ltx63lafq4woiwzpfisesmi2tnr64fh5a43cytedoq",
    external_link:
      "http://ipfs.io/ipfs/bafybeif24ylpdh47oyovmbjfzgq4t7vzmymixggdbj4lop2ceqyuh7gjne",
    seller_fee_basis_points: 0, // Indicates a 1% seller fee.
    fee_recipient: "0x000000000000000000000000000000000000dEaD", // Where seller fees will be paid to.
  };
  console.log("Uploading contract data...");
  const uploadeddata = await ipfs.add(JSON.stringify(contract_metadata));

  console.log("Setting contract data (" + uploadeddata.path + ")");
  await ZineNFT.setContractURI(uploadeddata.path, { gasLimit: 10000000 });

  // ---------------------------------------

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
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
