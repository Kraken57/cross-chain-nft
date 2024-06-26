import "../styles/globals.css"

import merge from "lodash/merge"
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import {chain, configureChains, createClient, WagmiConfig} from "wagmi`"

import React from "react";

const _app = () => {
  return <div>_app</div>;
};

export default _app;
