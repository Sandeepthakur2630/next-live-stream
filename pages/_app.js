import "../styles/globals.css";
import { HMSRoomProvider } from "@100mslive/react-sdk";
export default function App({ Component, pageProps }) {
  return (
    <HMSRoomProvider>
      <Component {...pageProps} />
    </HMSRoomProvider>
  );
}
