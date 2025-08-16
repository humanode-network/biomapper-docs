const chat = "https://link.humanode.io/chat";

const humanodeDocsChains = "https://link.humanode.io/docs/chains";

const biomapperSdkDocs = "https://link.humanode.io/docs/biomapper-sdk";

const biomapperSdkRepo = "https://github.com/humanode-network/biomapper-sdk";
const biomapperSdkRepoUsage =
  "https://github.com/humanode-network/biomapper-sdk/tree/master/usage";
const biomapperSdkRepoExamples =
  "https://github.com/humanode-network/biomapper-sdk/tree/master/examples";

const biomapperDocsRepo = "https://github.com/humanode-network/biomapper-docs";
const biomapperDocsRepoMaster =
  "https://github.com/humanode-network/biomapper-docs/tree/master";

const biostakerMainnet = "https://mainnet.biostaker.hmnd.app";

export const tradeLinks = {
  bingx: "https://link.humanode.io/trade/bingx",
  bitmart: "https://link.humanode.io/trade/bitmart",
  kucoin: "https://link.humanode.io/trade/kucoin",
  simpleswap: "https://link.humanode.io/trade/simpleswap",
  coinex: "https://link.humanode.io/trade/coinex",
  if: "https://link.humanode.io/trade/impossible-finance",
  uniswapArbitrumWeth: "https://link.humanode.io/trade/uniswap/arbitrum/weth",
} as const satisfies Record<string, `https://${string}`>;

export const bridgeLinks = {
  chainport: "https://link.humanode.io/bridge/chainport",
} as const satisfies Record<string, `https://${string}`>;

const humanodeSwap =
  "https://evm-playground.mainnet.stages.humanode.io/swap/native-to-evm";
const polkadotExt = "https://polkadot.js.org/extension";
const talismanWallet = "https://link.humanode.io/wallets/talisman";

const humanodeTestnet5FaucetBot = "https://t.me/HumanodeTestnet5FaucetBot";

const squidrouter = "https://app.squidrouter.com/";

const links = {
  chat,
  humanodeDocsChains,
  biostakerMainnet,
  biomapperDocsRepo,
  biomapperDocsRepoMaster,
  biomapperSdkDocs,
  biomapperSdkRepo,
  biomapperSdkRepoUsage,
  biomapperSdkRepoExamples,
  humanodeSwap,
  polkadotExt,
  talismanWallet,
  humanodeTestnet5FaucetBot,
  squidrouter,
} as const satisfies Record<string, `https://${string}`>;

export default links;

export type Links = typeof links;

export type Link = keyof Links;
