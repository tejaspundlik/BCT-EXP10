import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { BuyMeCoffee } from "../../components/BuyMeCoffee";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "2rem",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <ConnectEmbed client={client} chain={chain} />
      <BuyMeCoffee />
    </div>
  );
}
