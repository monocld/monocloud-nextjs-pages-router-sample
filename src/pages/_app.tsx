import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MonoCloudAuthProvider } from "@monocloud/nextjs-auth/client";
import Header from "@/components/header";

export default function App({
  Component,
    pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <MonoCloudAuthProvider>
      <Header />
      <Component {...pageProps} />
    </MonoCloudAuthProvider>
  )
}
