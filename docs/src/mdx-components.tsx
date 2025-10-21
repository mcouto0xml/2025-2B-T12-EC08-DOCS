import defaultMdxComponents, { createRelativeLink } from "fumadocs-ui/mdx";
import { Mermaid } from "@/components/mdx/mermaid";
import type { MDXComponents } from "mdx/types";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { File, Folder, Files } from "fumadocs-ui/components/files";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    Mermaid,
    File,
    Folder,
    Files,
    ...components,
  };
}
