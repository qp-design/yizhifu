const key = 'saas-token';

const LIBARY = {
    QUERY_SkU_Shelf: 'web/rs/sku/querySkuNotOnShelf.json',
    GET_MODEL_TAG: 'web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json'
};

const SaasAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'

const getSession = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "");
  } catch (err) {
    console.log(err);
  }
}

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
};
