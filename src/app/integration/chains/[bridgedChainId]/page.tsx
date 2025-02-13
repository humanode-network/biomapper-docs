import React from "react";
import { NextraMetadata } from "nextra";
import { MDX } from "../../../../components/mdx";
import { bridgedChains } from "../../../../data/stages";
import { BridgedChainId } from "../../../../data/stages.derived";
import hackMdxImport from "../../../../utils/hackMdxImport";
import Content, * as contentImports from "./content.mdx";

hackMdxImport(contentImports); // trickery 9000 (TM)
const { metadata, toc } = contentImports;

export const generateStaticParams = () => {
  return Object.keys(bridgedChains).map((bridgedChainId) => ({
    bridgedChainId,
  }));
};

export default async function Page({
  params,
}: {
  params: Promise<{ bridgedChainId: BridgedChainId }>;
}) {
  const { bridgedChainId } = await params;

  const bridgedChain = bridgedChains[bridgedChainId];

  const metadataOverride = {
    ...metadata,
    description: `Integrating with Humanode Biomapper on ${bridgedChain.generalDisplayName}.`,
  } as const satisfies NextraMetadata;

  return (
    <MDX.wrapper metadata={metadataOverride} toc={toc}>
      <Content bridgedChainId={bridgedChainId} bridgedChain={bridgedChain} />
    </MDX.wrapper>
  );
}
