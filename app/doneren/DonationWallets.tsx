"use client";

import { useState } from "react";

type CryptoWallet = {
  name: string;
  ticker: string;
  network: string;
  address: string;
  description: string;
};

/*
  ==========================================================
  HIER VOEG JE DE OFFICIËLE PUBLIC WALLETADRESSEN TOE
  ==========================================================

  Vul uitsluitend publieke ontvangstadressen in.
  NOOIT private keys, recovery phrases of seed phrases.

  Voorbeeld:

  {
    name: "Ethereum",
    ticker: "ETH",
    network: "Ethereum",
    address: "0x1234...",
    description: "ETH via het Ethereum netwerk.",
  }
*/

const cryptoWallets: CryptoWallet[] = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    network: "Bitcoin",
    address: "",
    description: "Bitcoin via het Bitcoin netwerk.",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    network: "Ethereum",
    address: "",
    description: "Ethereum via het Ethereum netwerk.",
  },
  {
    name: "USD Coin",
    ticker: "USDC",
    network: "Ethereum",
    address: "",
    description: "USDC via het Ethereum netwerk.",
  },
];

export default function DonationWallets() {
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);

  const copyAddress = async (ticker: string, address: string) => {
    if (!address) {
      return;
    }

    try {
      await navigator.clipboard.writeText(address);

      setCopiedWallet(ticker);

      window.setTimeout(() => {
        setCopiedWallet(null);
      }, 2000);
    } catch {
      setCopiedWallet(null);
    }
  };

  return (
    <div className="cryptoWalletGrid">
      {cryptoWallets.map((wallet) => {
        const available = wallet.address.trim().length > 0;

        return (
          <article
            className={`cryptoWalletCard ${
              !available ? "cryptoWalletUnavailable" : ""
            }`}
            key={`${wallet.ticker}-${wallet.network}`}
          >
            <div className="walletTop">
              <div className="walletSymbol">
                {wallet.ticker.substring(0, 1)}
              </div>

              <div className="walletIdentity">
                <strong>{wallet.name}</strong>
                <span>{wallet.ticker}</span>
              </div>
            </div>

            <div className="walletNetwork">
              <span>Netwerk</span>

              <strong>{wallet.network}</strong>
            </div>

            <p className="walletDescription">{wallet.description}</p>

            {available ? (
              <>
                <div className="walletAddressBlock">
                  <span>Walletadres</span>

                  <code>{wallet.address}</code>
                </div>

                <button
                  type="button"
                  className="copyWalletButton"
                  onClick={() => copyAddress(wallet.ticker, wallet.address)}
                >
                  {copiedWallet === wallet.ticker
                    ? "Adres gekopieerd"
                    : "Kopieer adres"}
                </button>
              </>
            ) : (
              <div className="walletNotAvailable">
                <span>Walletadres</span>

                <strong>Wordt binnenkort toegevoegd</strong>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
