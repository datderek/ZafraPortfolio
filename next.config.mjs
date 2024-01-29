/** @type {import('next').NextConfig} */
const nextConfig = {
    /* 
     * Enables static exports for static webapps
     *
     * https://nextjs.org/docs/app/building-your-application/deploying/static-exports
     * 
     */
    output: 'export',

    /*
     * Deploys Next.js app under the sub-path of a domain (Github Pages)
     *
     * https://nextjs.org/docs/app/api-reference/next-config-js/basePath
     */
    basePath: "/zafraportfolio",

    /*
     * Disable server-based image optimization, as we won't be using a custom
     * loader
     *
     * https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization
     */
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
