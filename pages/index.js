import React from "react";

//internal import
import { useStateContext } from "../Context/index";
import {
  About,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Contact,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale,
} from "../Components/index";

const index = () => {
  const { 
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
   } = useStateContext();
  return (
    <div className="v_dark">
      <Header address={address} setAddress={setAddress} ConnectWallet={ConnectWallet}/>
      <Banner transferNativeToken = {transferNativeToken} />
      <Service/>
      <About/>
      <tokenSale buyToken={buyToken} tokenSale={tokenSale}/>
      <Distribution/>
      <MobileApp/>
      <Team/>
      <Faq/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default index;
