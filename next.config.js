/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withImages = require("next-images");

module.exports = withImages();

module.exports = {
  env: {
    // The Movie DataBase API KEY
    API_KEY: "00ac511a8800f150d8edd280ac0a0884",
  },

  images: {
    domains: ["image.tmdb.org"],
  },
};
