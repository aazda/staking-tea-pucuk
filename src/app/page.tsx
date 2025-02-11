import { client } from "./client";
import { defineChain } from 'thirdweb';
import { ConnectButton } from "thirdweb/react";

export default function Home() {
  return (
    <div style={{
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
    }}>
      <div style={{ textAlign: "center" }}>
        <ConnectButton
          client={client}
          chain={defineChain(93384)}
        />
      </div>
    </div>
  );
}