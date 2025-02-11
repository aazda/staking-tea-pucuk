import { getContract } from "thirdweb";
import { defineChain } from "thirdweb";
import { client } from "@/app/client";
import { stakingContractABI } from "../utils/stakingContractABI";

const stakeTokenContractAdress = '0x5917746c0c59C3c8D1662C5EC362aCC905503b22';
const rewardTokenContractAdress = '0xC678A437254B9a26F8E651e5A3D38a6C8aB5E721';
const stakingContractAdress = '0xb1C4cAc1ed2Ff8064C293C713604Ea53A2604b52';

export const stakeTokenContract = getContract({
    client: client,
    chain: defineChain(93384),
    address: stakeTokenContractAdress,
});

export const rewardTokenContract = getContract({
    client: client,
    chain: defineChain(93384),
    address: rewardTokenContractAdress,
});

export const stakingContract = getContract({
    client: client,
    chain: defineChain(93384),
    address: stakingContractAdress,
    abi: stakingContractABI,
});