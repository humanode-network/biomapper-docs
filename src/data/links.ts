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
} as const satisfies Record<string, `https://${string}`>;

export default links;

export type Links = typeof links;

export type Link = keyof Links;
