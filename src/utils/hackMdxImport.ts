import { Heading, NextraMetadata } from "nextra";

export type MdxStarImport = {
  toc: Heading[];
  metadata: NextraMetadata;
};

// See https://github.com/shuding/nextra/issues/4193 on why we need this
// instead of a regular `.d.ts`.

export default function (
  mdxStarImport: any,
): asserts mdxStarImport is MdxStarImport {
  if (mdxStarImport.toc === undefined || mdxStarImport.metadata === undefined)
    throw new Error(
      'not a valid * (star) import, use import Content, * as contentStarImport from "./file.mdx"',
    );
}
