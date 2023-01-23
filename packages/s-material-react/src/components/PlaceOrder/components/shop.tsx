import { useComponent } from '@brushes/qj-simulate-component';
import {CardJsx} from '../../../common/card';


const ShopJsx = ({goodsList}: {goodsList: Array<any>}) => {
  console.log(6, goodsList);
  const { View } = useComponent();
  return (
    <View className={'place-order-goods'}>
      {
        goodsList.map((item, ind) => (
          <CardJsx key={ind} {...item} />
        ))
      }
    </View>
  )
}

export default ShopJsx;
