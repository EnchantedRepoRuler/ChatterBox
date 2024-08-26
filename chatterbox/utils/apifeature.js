import { ethers } from "ethers";
import Web3Modal from 'web3modal';

import {ChatterBoxAddress, ChatterBoxABI} from '../context/constant';

export const CheckIfWalletConnected = async () => {
    try{
        if (!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    }catch(error){
        console.log("Install MetaMask");
    }
};

export const connectWallet = async () => {
    try{

    }
    catch (error) {
        console.log(error);
    }
}