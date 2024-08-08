/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  transpilePackages: [
    "@mui/material",
    "@mui/lab",
    "@mui/icons-material",
    "@mui/material-nextjs",
  ],
  reactStrictMode: false,
};

export default nextConfig;
