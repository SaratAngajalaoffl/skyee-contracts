import { ethers } from "hardhat";

async function main() {
    const SkyeeToken = await ethers.getContractFactory("SkyeeToken");
    const token = await SkyeeToken.deploy();

    await token.deployed();

    const [owner, otherAccount] = await ethers.getSigners();

    console.log(`Sky token deployed at ${token.address}`);

    const amount = ethers.utils.parseEther("1000");

    console.log(amount);

    const tx = await token.mintTestTokens(otherAccount.address, amount);

    await tx.wait();

    console.log(`Owner Account: ${owner.address}`);
    console.log(`Other Account: ${otherAccount.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
