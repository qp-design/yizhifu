import { useComponent } from '../../hooks';
import { memo, ReactNode, useMemo } from 'react';
import { getEnv } from '@brushes/api';

interface ScrollViewType {
    Threshold?: number;
    scrollTop?: number;
    children: ReactNode;
    onScroll: (e: any) => void;
}
const ScrollViewJsx: React.FC<ScrollViewType> = ({ Threshold = 20, onScroll, scrollTop = 0, children, ...props }) => {
    const { ScrollView, PullToRefresh } = useComponent();
    const ScrollViewJsx = ScrollView || PullToRefresh;
    const isTaro = getEnv();
    const propsConfig = useMemo(() => {
        if (isTaro) {
            return {
                scrollY: true,
                scrollWithAnimation: true,
                scrollTop,
                lowerThreshold: Threshold,
                onScrollToLower: onScroll,
                ...props
            };
        }
        return {
            onRefresh: onScroll
        };
    }, []);

    return <ScrollViewJsx {...propsConfig}>{children}</ScrollViewJsx>;
};

export const ScrollView = memo(ScrollViewJsx);
