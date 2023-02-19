import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SkyeeToken", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deploySkyeeTokenFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const SkyeeToken = await ethers.getContractFactory("SkyeeToken");
        const token = await SkyeeToken.deploy();

        await token.deployed();

        const amount = ethers.utils.parseEther("0.1");

        const tx = await token.mintTestTokens(otherAccount.address, amount);

        await tx.wait();

        return { token, owner, otherAccount, amount };
    }

    describe("Deployment", function () {
        it("Should mint to the initial account", async function () {
            const { token, amount, otherAccount } = await loadFixture(
                deploySkyeeTokenFixture
            );

            expect(await token.balanceOf(otherAccount.address)).to.equal(
                amount
            );
        });
    });
});
