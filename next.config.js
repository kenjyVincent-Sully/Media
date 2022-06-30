/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['tmdb.org', 'themoviedb.org'],
    },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
