import { AppProps } from "next/app";
import { GlobalStyle } from "../style/GlobalStyle";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
