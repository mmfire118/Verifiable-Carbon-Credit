/*
Loan Testing Suite
*/

const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

describe("CarbonCredit Suite", function () {

  const provider = waffle.provider;

  let addr1;
  let CarbonCredit;
  let CarbonCreditEvent;

  beforeEach(async function () {
    [addr] = await ethers.getSigners();
    CarbonCredit = await ethers.getContractFactory("VCCToken");
    carbonCredit = await CarbonCredit.deploy();
  });

  describe("Deployment", function () {
    it("Should initialize the CarbonCredit contract ", async function () {
      await carbonCredit.connect(addr);
    });
  });
  describe("Verification", function () {
    it("Should verify a CarbonCredit", async function () {
      await expect(carbonCredit.verify(
        "test",
        "test",
        15,
      )).to.emit(carbonCredit, "Verified");
    });
  });
  describe("Unlock", function () {
    it("Should unlock a CarbonCredit", async function () {
      await carbonCredit.unlock("test");
      await expect(CarbonCredit.lock[carbonCredit]).toBe(false);
      await expect(CarbonCredit.projectMonitoringReport[carbonCredit]).toBe("test");
    });
  });
})