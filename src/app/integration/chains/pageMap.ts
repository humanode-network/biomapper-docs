import { Folder, PageMapItem } from "nextra";
import { bridgedChainsDisplayOrder } from "../../../data/stages";
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
}));

const findFolder = (items: PageMapItem[], name: string): Folder | undefined =>
  items.find((item) => "children" in item && (item as Folder).name === name) as
    | Folder
    | undefined;

export const injectPageMap = (pageMapItems: PageMapItem[]): PageMapItem[] => {
  // Nextra types are just dirt. We go off the rails here, but our job it
  // to make docs work, not solving shitty puzzles from the foreign codebase.

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
