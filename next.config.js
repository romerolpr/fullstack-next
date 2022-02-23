/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // chave segura com 16 caracteres 
    secret: 'dE#eHptpxp6Syyz!',
    env: {
      "MYSQL_USER": "root",
        "MYSQL_PASSWORD": "root",
        "MYSQL_DATABASE": "db_fullstack",
        "MYSQL_HOST": "localhost",
        "MYSQL_PORT": "3307",
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
}

module.exports = nextConfig