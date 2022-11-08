import {useComponent} from '../../../hooks';
import classNames from 'classnames';

export interface TabItemType {
  name: string;
  code: string
}

interface TabsHeaderType {
  tabs: Array<TabItemType>;
  onChange: (e: number, item: TabItemType) => void;
  actived: number
}

const TabsHeader: React.FC<TabsHeaderType> = ({tabs, onChange, actived}) => {
  const { View } = useComponent()
  return (
    <View className={'qj-tabs'}>
      {
        tabs.map((item, index) => (
          <View
            onClick={() => onChange(index, item)} key={index}
            className={ classNames({ [`actived-item`]: actived === index, 'default-item': true })}
          >{item.name}</View>
        ))
      }
    </View>
  )
}

export default TabsHeader;
