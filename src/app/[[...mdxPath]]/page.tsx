import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents } from "../../mdx-components";
import { Metadata, ResolvingMetadata } from "next";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(
  props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const [page, resolved] = await Promise.all([
    props.params.then((params) => importPage(params.mdxPath)),
    parent,
  ]);

  const { metadata } = page;

  if (metadata.noTitle === true) {
    return { ...metadata, title: resolved.title };
  }
  return metadata;
}

const Wrapper = useMDXComponents().wrapper;

export default async function Page(props) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
