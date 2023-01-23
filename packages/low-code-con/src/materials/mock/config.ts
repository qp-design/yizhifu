import {DEFAULT_IMG} from '../common/img/constent';


export const config = [
  {
    code: 'basic',
    label: '基础组件',
    children: [
      {
        code: 'index',
        type: 'Title',
        name: '标题',
        group: [
          {
            type: 'Title',
            name: '主标题',
            icon: 'icon-text',
            props: {
              value: '请填写主标题或文本',
              fontSize: 20,
              textAlign: 'left',
              color: '#000000',
              backgroundColor: '#fafafa',
              fontWeight: 'normal',
              textDecoration: 'none',
              fontStyle: 'normal',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Title',
            name: '副标题',
            icon: 'icon-superscript-',
            props: {
              value: '请填写副标题或文本',
              fontSize: 16,
              textAlign: 'left',
              color: '#cccccc',
              backgroundColor: '#fff',
              fontWeight: 'normal',
              textDecoration: 'none',
              fontStyle: 'normal',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Title',
            name: '正文',
            icon: 'icon-article-line',
            props: {
              value: '请填写正文',
              fontSize: 12,
              textAlign: 'left',
              color: '#666666',
              backgroundColor: '#fff',
              fontWeight: 'normal',
              textDecoration: 'none',
              fontStyle: 'normal',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          }
        ]
      },
      {
        code: 'index',
        type: 'Cube',
        name: '魔方区',
        group: [
          {
            type: 'Cube',
            name: '大图',
            icon: 'icon-picture',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                }
              ],
              type: 1,
              borderRadius: 0,
              selectImg: [],
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Cube',
            name: '一行两个',
            icon: 'icon-a-bianzu2',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                }
              ],
              type: 2,
              borderRadius: 0,
              selectImg: [],
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Cube',
            name: '一上二下',
            icon: 'icon-a-bianzu3beifen2',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                }
              ],
              type: 3,
              borderRadius: 0,
              selectImg: [],
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Cube',
            name: '一左二右',
            icon: 'icon-a-bianzu3beifen',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                }
              ],
              type: 4,
              borderRadius: 0,
              selectImg: [],
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Cube',
            name: '田字形',
            icon: 'icon-a-bianzu31',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                }
              ],
              type: 5,
              borderRadius: 0,
              selectImg: [],
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          }
        ]
      },
      {
        code: 'index',
        name: '商品',
        group: [
          {
            type: 'Goods',
            name: '一行一个',
            icon: 'icon-picture',
            props: {
              defaultValue: [
                {
                  goodsCode: 1,
                  goodsName: '默认标题',
                  brandName: '千匠网络',
                  pricesetNprice: 1000,
                  pricesetMakeprice: 1,
                  dataPic: DEFAULT_IMG
                }
              ],
              goods: [],
              cell: 1,
              circular: 1,
              margin: 8,
              markedPrice: 1,
              classCode: 'one',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Goods',
            name: '一行两个',
            icon: 'icon-a-bianzu2',
            props: {
              defaultValue: [
                {
                  goodsCode: 1,
                  goodsName: '默认标题',
                  brandName: '千匠网络',
                  pricesetNprice: 1000,
                  pricesetMakeprice: 1,
                  dataPic: DEFAULT_IMG
                },
                {
                  goodsCode: 1,
                  goodsName: '默认标题',
                  brandName: '千匠网络',
                  pricesetNprice: 1000,
                  pricesetMakeprice: 1,
                  dataPic: DEFAULT_IMG
                }
              ],
              goods: [],
              cell: 2,
              circular: 1,
              margin: 8,
              markedPrice: 1,
              classCode: 'two',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          },
          {
            type: 'Goods',
            name: '左右结构',
            icon: 'icon-a-bianzu3beifen',
            props: {
              defaultValue: [
                {
                  goodsCode: 1,
                  goodsName: '默认标题',
                  brandName: '千匠网络',
                  pricesetNprice: 1000,
                  pricesetMakeprice: 1,
                  dataPic: DEFAULT_IMG
                }
              ],
              goods: [],
              cell: 1,
              circular: 1,
              margin: 8,
              markedPrice: 1,
              classCode: 'three',
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          }
        ]
      },
      {
        code: 'index',
        name: '公告',
        group: [
          {
            type: 'Notice',
            name: '公告',
            icon: 'icon-notice',
            props: {
              borderColor: '#fff3e9',
              fontSize: '15px',
              color: '#ff6010',
              backgroundColor: '#fff9ed',
              text: '默认公告内容',
              margin: 8,
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 0
            }
          }
        ]
      },
      {
        code: 'index',
        name: '分隔线',
        group: [
          {
            type: 'Line',
            name: '分隔线',
            icon: 'icon-separator',
            props: {
              borderRadius: 0,
              height: 2,
              width: 100,
              backgroundColor: '#CCCCCC',
              paddingTop: 10,
              paddingBottom: 10
            }
          }
        ]
      },
      {
        code: 'index',
        name: '视频',
        group: [
          {
            type: 'Video',
            name: '视频',
            icon: 'icon-vcodeeo-line',
            props: {
              url: '',
              poster: '',
              autoplay: false,
              loop: false,
              paddingTop: 10,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0
            }
          }
        ]
      },
      {
        code: 'index',
        name: '客服',
        group: [
          {
            type: 'Service',
            name: '客服',
            icon: 'icon-service',
            props: {
              width: 100,
              height: 100,
              borderRadius: 100,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }
          }
        ]
      },
      {
        code: 'index',
        name: '搜索',
        group: [
          {
            type: 'Search',
            name: '搜索',
            icon: 'icon-search-line',
            props: {
              value: '点击搜索商品',
              fontColor: '#9A9A9A',
              iconShow: true,
              backgroundColor: '#ECECEE',
              borderRadius: 20,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10
            }
          }
        ]
      },
      {
        code: 'index',
        name: '轮播图',
        group: [
          {
            type: 'Slider',
            name: '轮播图',
            icon: 'icon-carousel',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                }
              ],
              type: 1,
              autoplay: false,
              autoplayInterval: 3000,
              direction: 'horizontal',
              loop: true,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 0,
              paddingRight: 0,
              selectImg: []
            }
          },
          {
            type: 'Slider',
            name: '全屏轮播图',
            icon: 'icon-carousels',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  link: ''
                }
              ],
              type: 2,
              autoplay: false,
              autoplayInterval: 3000,
              direction: 'horizontal',
              loop: true,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              selectImg: []
            }
          }
        ]
      },
      {
        code: 'index',
        name: '商品组',
        group: [
          {
            type: 'GoodsGroup',
            name: '商品组',
            icon: 'icon-goods-two',
            props: {
              defaultValue: [
                {
                  title: '商品组标题',
                  subTitle: '商品组副标题',
                  defaultValue: [
                    {
                      goodsCode: 1,
                      goodsName: '默认标题',
                      brandName: '千匠网络',
                      pricesetNprice: 1000,
                      pricesetMakeprice: 1,
                      dataPic: DEFAULT_IMG
                    },
                    {
                      goodsCode: 1,
                      goodsName: '默认标题',
                      brandName: '千匠网络',
                      pricesetNprice: 1000,
                      pricesetMakeprice: 1,
                      dataPic: DEFAULT_IMG
                    }
                  ]
                },
                {
                  title: '商品组标题',
                  subTitle: '商品组副标题',
                  defaultValue: [
                    {
                      goodsCode: 1,
                      goodsName: '默认标题',
                      brandName: '千匠网络',
                      pricesetNprice: 1000,
                      pricesetMakeprice: 1,
                      dataPic: DEFAULT_IMG
                    },
                    {
                      goodsCode: 1,
                      goodsName: '默认标题',
                      brandName: '千匠网络',
                      pricesetNprice: 1000,
                      pricesetMakeprice: 1,
                      dataPic: DEFAULT_IMG
                    }
                  ]
                }
              ],
              type: 1,
              borderRadius: 1,
              marginTop: 10,
              marginBottom: 10,
              selectGoodsGroup: []
            }
          }
        ]
      },
      {
        code: 'index',
        type: 'ClassifyNav',
        name: '分类导航',
        group: [
          {
            type: 'ClassifyNav',
            name: '分类导航',
            icon: 'icon-a-icon_Cubenavigation',
            props: {
              defaultValue: [
                {
                  imgUrl: DEFAULT_IMG,
                  title: '分类标题',
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  title: '分类标题',
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  title: '分类标题',
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  title: '分类标题',
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  title: '分类标题',
                  link: ''
                },
                {
                  imgUrl: DEFAULT_IMG,
                  title: '分类标题',
                  link: ''
                }
              ],
              type: 1,
              borderRadius: 0,
              paddingTop: 10,
              paddingBottom: 10,
              selectClassifyNav: []
            }
          }
        ]
      }
    ]
  },
];
