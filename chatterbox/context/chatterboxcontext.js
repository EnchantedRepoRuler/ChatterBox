import React, {useState, useEffect} from 'react';
import { useRouter} from 'next/router';


//INTERNAL IMPORTS
import {CheckIfWalletConnected, connectWallet, connectingWithContract} from '../utils/apifeature';


export const ChatterBoxContext = React.createContext();

export const ChatterBoxProvider = ({children}) => {


    const title = "Hey Welcome to ChatterBox";

    return(
        <ChatterBoxContext.Provider value={{title}}>
            {children}
        </ChatterBoxContext.Provider>
    )
}