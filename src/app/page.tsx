import { client } from "./client";
import { defineChain } from 'thirdweb';
import { ConnectButton } from "thirdweb/react";
import { StakeToken } from "../../components/Stake";


export default function Home() {
  return (
    <div style={{
      backgroundColor: "#0a0711",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
    }}>
      <h1 style={{ color: "#98ff99" }}>Stake Your $PUCUK & Get $TPUCUK</h1>
      <h3 style={{ margin: "10px" , color: "#98ff99" }}>"Hodl, Stake, Profit – Seize Your Financial Future!"</h3>
      <div style={{ textAlign: "center" }}>
        <ConnectButton
          client={client}
          chain={defineChain(93384)}
        />
        <StakeToken />
      <h4 style={{ margin: "10px" , color: "#98ff99" }}>Don't have $PUCUK ?</h4>
      <h3 style={{ color: "#0000FF" }}> <a href="https://pucuk.vercel.app/" target="_blank">{"\>> Claim Here! <<"}</a></h3>
      </div>
    </div>
  );
}