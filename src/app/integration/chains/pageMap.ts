import { Folder, PageMapItem } from "nextra";
import { bridgedChains, bridgedChainsDisplayOrder } from "../../../data/stages";
import { convertToPageMap, normalizePageMap } from "nextra/page-map";

export const { pageMap: rawPageMap, mdxPages } = convertToPageMap({
  filePaths: bridgedChainsDisplayOrder.map(
    (bridgedChainId) => `${bridgedChainId}.mdx`,
  ),
  basePath: "integration/chains",
});

export const pageMap = bridgedChainsDisplayOrder.map((bridgedChainId) => ({
  name: bridgedChainId,
  route: `/integration/chains/${bridgedChainId}`,
  frontMatter: {
    title: bridgedChains[bridgedChainId].generalDisplayName,
  },
}));

const findFolder = (items: PageMapItem[], name: string): Folder | undefined =>
  items.find((item) => "children" in item && (item as Folder).name === name) as
    | Folder
    | undefined;

export const injectPageMap = (pageMapItems: PageMapItem[]): PageMapItem[] => {
  // Nextra types are not convenient to work with manually here, and our job is
  // making the docs work, not solving type-system puzzles from the foreign
  // codebase, or building a library of helpers to make sane API for what
  // we need to do.
  // So we go off the rails with `any` - but all that is confined to this function
  // body.
  // Ultimately, we wouldn't want to search though the page map manually, but
  // rather we'd have a well-defined placeholder at `_meta` file (not a hack
  // like we have now) - and a universal utility to rewrite those placeholders
  // with our generated content, that we'd use instead of this with
  // the `pageMap` we have above.

  const integrationFolder = findFolder(pageMapItems, "integration");
  if (integrationFolder === undefined) {
    return pageMapItems;
  }

  const dataItem = integrationFolder.children.find((item) => "data" in item);

  if (dataItem === undefined) return pageMapItems;

  dataItem.data.chains = { title: "Chains" };

  const chainsIndex = integrationFolder.children.findIndex(
    (item) => (item as any).name === "chains",
  );

  integrationFolder.children[chainsIndex] = {
    name: "chains",
    route: integrationFolder.route + "/chains",
    children: pageMap,
  } as const satisfies Folder;

  return normalizePageMap(pageMapItems);
};
