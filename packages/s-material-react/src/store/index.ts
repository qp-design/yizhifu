import Taro from '@tarojs/taro'
// const key = process.env.REACT_APP_SESSION_KEY || 'saas-token';
const key = 'saas-token';

const LIBARY = {
    QUERY_SkU_Shelf: 'web/rs/sku/querySkuNotOnShelf.json',
    GET_MODEL_TAG: 'web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json'
};

const SaasAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'

const getSession = (key: string) => {
  try {
    const func = localStorage ? localStorage.getItem(key) : Taro.getStorageSync(key);
    return JSON.parse(func);
  } catch (err) {
    console.log(err);
  }
}

// 获取页面配置信息
export const queryModelTag = (params = {}) => {
  let fly;
  const Fly = require("flyio/dist/npm/wx");
  fly = new Fly()
  return fly.post(HOST + LIBARY.GET_MODEL_TAG, params, {headers:{
      "content-type":"application/x-www-form-urlencoded",
      "Saas-Agent": SaasAgent + ' qj-wemini',
      [key]: getSession(key).ticketTokenid,
    }}).then((res: { data: any; }) => res.data)
};

// 商品详情页面
export const querySkuNotOnShelf = (params = {}) => {
    let fly;

   const Fly = require("flyio/dist/npm/wx");
   fly = new Fly()
    return fly.post('https://b2copt-dev2021112700000085.qjclouds.com/' + LIBARY.QUERY_SkU_Shelf, params, {headers:{
            "content-type":"application/x-www-form-urlencoded",
            "Saas-Agent": SaasAgent,
        [key]: getSession(key).ticketTokenid,
        }})
      .then((res: { data: any; }) => res.data)
      // .then((res: { errorCode: any; msg: any; }) => {
      //   if (res.errorCode) {
      //     Taro.showToast({
      //       title: res.msg || '接口失败',
      //       icon: 'error',
      //       duration: 2000
      //     })
      //     return Promise.reject(res.msg || '接口失败');
      //   }
      //   return res
      // })
};
