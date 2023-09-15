/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    "/next" /*you can use asset prefix /next for dev inside tinqjs with tinqjs config basepath '/nextjs'*/,
  /*if the basepath inside tinqjs config '/' you can remove asset prefix inside nextjs*/
};

module.exports = nextConfig;
