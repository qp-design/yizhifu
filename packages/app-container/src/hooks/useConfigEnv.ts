import {useEffect} from 'react';

interface ObjType {
  host: string;
  token: string;
  phone: string
}

export function useConfigEnv() {
  useEffect(() => {

    const url = new URL(window.location.href);
    let obj : ObjType = {
      host: '',
      token: '',
      phone: ''
    }

    for(let param of url.searchParams) {
      console.log(param)
      const [key, value] = param;
      // @ts-ignore
      obj[key] = value
    }

    window._env_ = {
      TOKEN: obj.token,
      PHONE: obj.phone,
      REACT_APP_SESSION_KEY: 'saas-token',
      REACT_APP_BASE_URL: obj.host,
      REACT_APP_APPLICATION: '',
      REACT_IMG_PATH: 'paas/shop/'
    }

  }, [])
}
