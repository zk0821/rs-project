/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: "/rs-project",
    basePath: "/rs-project",
};

module.exports = nextConfig;
