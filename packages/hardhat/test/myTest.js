const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("My Dapp", function () {
  let myContract;

  describe("YourContract", function () {
    it("Should deploy YourContract", async function () {
      const YourContract = await ethers.getContractFactory("YourCollectible");

      myContract = await YourContract.deploy();
    });

    describe("setPurpose()", function () {
      it("Should be able to set a new contract URI", async function () {
        const newPurpose = "https://example.com";

        await myContract.setContractURI(newPurpose);
        expect(await myContract.contractURI()).to.equal(newPurpose);
      });
    });
  });
});
