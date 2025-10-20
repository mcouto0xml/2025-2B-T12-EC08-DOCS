import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	output: "export",
	basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
	assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default withMDX(config);
