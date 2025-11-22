// next.config.js
/**
 * Next.js configuration for static export.
 * Setting `output: "export"` makes `next build` generate a static site
 * in the `out` directory, which Cloudflare Pages expects.
 */
module.exports = {
    output: "export",
    // Optional: disable image optimization for static export
    images: {
        unoptimized: true,
    },
};
