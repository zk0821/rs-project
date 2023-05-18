/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
        domains: [
            "images.unsplash.com",
            "via.placeholder.com",
            "randomuser.me",
        ],
    },
    assetPrefix: "./",
};

module.exports = nextConfig;
