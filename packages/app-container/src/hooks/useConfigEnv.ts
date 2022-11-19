import {useEffect} from 'react';

export function useConfigEnv() {
  useEffect(() => {
    window._env_ = 'https://b2coptfa10b0d4f03f4ff48c571f14558fa068.saas.qjclouds.com/'
    // process.env = 'https://b2coptfa10b0d4f03f4ff48c571f14558fa068.saas.qjclouds.com/'
    // require('dotenv').config({ 'process.env.REACT_APP_BASE_URL': 'https://b2coptfa10b0d4f03f4ff48c571f14558fa068.saas.qjclouds.com/' })
    console.log('window._env_', window._env_)
  }, [])
}
