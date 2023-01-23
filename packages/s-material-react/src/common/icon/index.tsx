import classNames from 'classnames';
import { useComponent } from '@brushes/qj-simulate-component';

export const QjMobileIcon = ({
    className = 'iconfont',
    prefixClass = 'icon',
    onClick = () => {},
    style = {
        fontSize: 16,
        color: '#444',
        fontWeight: 900
    },
    value
}: // onClick
{
    className?: Array<any> | string;
    prefixClass?: string;
    style?: Object;
    value: string;
    onClick?: Function
}) => {
    const { Text } = useComponent();
    const iconName = value ? `${prefixClass}-${value}` : '';
    return <Text onClick={onClick} className={classNames(prefixClass, iconName, className)} style={style}></Text>;
};
