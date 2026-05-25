import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  
  images:{
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        remotePatterns: [
          new URL('https://flagcdn.com/**'),
          new URL('https://upload.wikimedia.org/**')
        ]
    
  }
}

export default nextConfig
