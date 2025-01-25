import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: "/biomapper-docs",
});
