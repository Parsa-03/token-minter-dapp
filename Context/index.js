import React, { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

//INTERNAL IMPORT
import {
    CheckIfWalletConnected,
    ConnectWallet,
    connectingTOKENCONTRACT,
    getBalance,
    connectingTOKEN_SALE_CONTRACT
} from "../Utils/index"

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const TOKEN_ICO = "TOKEN SALL DAPP";

    //state variables
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [nativeToken, setNativeToken] = useState("");
    const [tokenHolders, setTokenHolders] = useState("");
    const [tokenSale, setTokenSale] = useState("");
    const [currentHolders, setCurrentHolders] = useState("");

    //Fetch contract data
    const fetchInitailData = async () => {
        try {
            //GET USER ACCOUNT
            const account = await CheckIfWalletConnected();
            //GET USER BALANCE
            const balance = await getBalance();
            setBalance(ethers.utils.formatEther(balance.toString()));
            setAddress(account);

            //GET TOKEN CONTRACT
            const TOKEN_CONTRACT = await connectingTOKENCONTRACT();

            let tokenBalance;
            if (account) {
                tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
            } 
            else {
                tokenBalance = 0;
            }

            //GET ALL TOKEN DATE
            const tokenName = await TOKEN_CONTRACT.name();
            const tokenSymbol = await TOKEN_CONTRACT.symbol();
            const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
            const tokenStandard = await TOKEN_CONTRACT.standard();
            const tokenHolders = await TOKEN_CONTRACT._userId();
            const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
            const tokenAddress = await TOKEN_CONTRACT.address;

            const nativeToken = {
                tokenAddress: tokenAddress,
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                tokenOwnerOfContract: tokenOwnerOfContract,
                tokenStandard: tokenStandard,
                tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
                tokenBalance: ethers.utils.formatEther(tokenBalance.toString()),
                tokenHolders: tokenHolders.toNumber(),
            }
            setNativeToken(nativeToken);

            //getting token holders
            const getTokenHolders = await TOKEN_CONTRACT.getTokenHolders();
            setTokenHolders(getTokenHolders);

            //getting token holders data
            if (account) {
                const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(account);

                const currentHolder = {
                    tokenId: getTokenHolderData[0].toNumber(),
                    from: getTokenHolderData[1],
                    to: getTokenHolderData[2],
                    totalToken: ethers.utils.formatEther(
                        getTokenHolderData[3].toString()
                    ),
                    tokenHolder: getTokenHolderData[4],
                };

                setCurrentHolders(currentHolder);
            }

            //TOKEN SALE CONTRACT
            const TOKEN_SALE_CONTRACT = await connectingTOKEN_SALE_CONTRACT();
            const tokenPrice = await TOKEN_SALE_CONTRACT.tokenPrice();
            const tokenSold = await TOKEN_SALE_CONTRACT.tokensSold();
            const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf(
                "0x..."
            );

            const tokenSale = {
                tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
                tokenSold: tokenSold.toNumber(),
                tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString()),
            };

            setTokenSale(tokenSale);
            console.log(tokenSale);
            console.log(currentHolders);
            console.log(nativeToken);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchInitailData();
    }, []);


    //buy tocken 
    const buyToken = async (nToken) => {
        try {
            const amount = ethers.utils.parseUnits(nToken.toString(), "ether");
            const contract = await connectingTOKEN_SALE_CONTRACT();

            const buying = await contract.buyToken(nToken, {
                value: amount.toString(),
            });

            await buying.wait();
            console.log("buying...");
            window.location.reload();

        }
        catch (error) {
            console.log(error);
        }
    }

    //native token transfer
    const transferNativeToken = async () => {
        try {
            const TOKEN_SALE_ADDRESS = "0x...";
            const TOKEN_AMOUNT = 500;
            const tokens = TOKEN_AMOUNT.toString();
            const transferAmount = ethers.utils.parseEther(tokens);

            const contract = await connectingTOKENCONTRACT();
            const transaction = await contract.transfer(
                TOKEN_SALE_ADDRESS,
                transferAmount
            );

            console.log(contract);
            await transaction.wait();
            window.location.reload();
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <StateContext.Provider 
            value={{ 
                transferNativeToken,
                buyToken,
                ConnectWallet, 
                setAddress,
                TOKEN_ICO,
                currentHolders,
                tokenSale,
                tokenHolders,
                nativeToken,
                balance,
                address,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);