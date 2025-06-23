/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.microcms-assets.io',
            },
            {
                hostname: 'res.cloudinary.com',
            },
            {
                hostname: 'i.scdn.co',
            },
        ],
    },
};

export default nextConfig;
