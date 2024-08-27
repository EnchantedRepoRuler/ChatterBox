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
        if (!window.ethereum) return console.log("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (error) {
        console.log(error);
    }
}

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(ChatterBoxABI, ChatterBoxAddress, signerOrProvider);


export const connectingWithContract = async () => {
    try{
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer =  provider.getSigner();
        const contract = fetchContract(signer);
        
        return contract;
    }catch{
        console.log("error");
    }
} 


export const converTime = (time)=> {
    const newTime = new Date(time.toNumber());

    const realTime = newTime.getHours() + 
    "/" + 
    newTime.getMinutes() + 
    "/" + 
    newTime.getSeconds() + 
    " Date:" + 
    newTime.getDate() +
    "/" +
    (newTime.getMonth() + 1) +
    "/" +
    newTime.getFullYear();

    return realTime;

}
