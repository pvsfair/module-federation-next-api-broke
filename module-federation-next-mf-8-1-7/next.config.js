const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "mf-8-1-7",
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        remotes: {},
        shared: {},
        extraOptions: {},
      })
    );
    return config;
  },
  compiler: {
    styledComponents: {
      minify: true,
      ssr: true,
    },
  },
  // swcMinify: false,
};
