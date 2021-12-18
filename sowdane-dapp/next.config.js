module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  async redirects() {
    return [
      {
        source:'/',
        destination:'/login',
        permanent:true
      }
    ]
  }
}
