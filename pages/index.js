import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import App from "./components/App";
import { HMSRoomProvider } from "@100mslive/react-sdk";
;

export default function Home() {
  return (
    <>
      <HMSRoomProvider>
        <App />
      </HMSRoomProvider>
    </>
  );
}
