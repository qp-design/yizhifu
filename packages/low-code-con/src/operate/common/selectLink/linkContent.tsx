import React, {memo, useMemo} from "react";
import {Tabs} from "antd";
import BaseLink from "./components/baseLink";
import GoodsClassifyLink from "./components/goodsClassifyLink";
import GoodsList from "./components/goodsList";

const LinkContentJsx = ({result, handleChoose}: any) => {
  const tabItems = useMemo(() => [
    {
      label: `功能页`,
      key: `1`,
      children: <BaseLink result={result} handleChoose={handleChoose} />
    },
    {
      label: `商品分类`,
      key: `2`,
      children: <GoodsClassifyLink result={result} handleChoose={handleChoose} />
    },
    {
      label: `商品列表`,
      key: `3`,
      children: <GoodsList result={result} handleChoose={handleChoose} />
    },
  ], [result])

  return (
    <Tabs
      items={tabItems}
    />
  )
}

export const LinkContent = memo(LinkContentJsx);
