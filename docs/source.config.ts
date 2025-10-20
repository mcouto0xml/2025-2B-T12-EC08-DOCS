import {
	defineConfig,
	defineDocs,
	frontmatterSchema,
	metaSchema,
} from "fumadocs-mdx/config";
import rehypeKatex from "rehype-katex";
import { remarkAdmonition, remarkMdxFiles } from "fumadocs-core/mdx-plugins";
import remarkMath from "remark-math";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
	docs: {
		schema: frontmatterSchema,
		postprocess: {
			includeProcessedMarkdown: true,
		},
	},
	meta: {
		schema: metaSchema,
	},
});

export default defineConfig({
	mdxOptions: {
		remarkPlugins: [remarkMath, remarkAdmonition, remarkMdxFiles],
		rehypePlugins: (v) => [rehypeKatex, ...v],
	},
});
