import { useComponent } from '../../hooks';

export function Loading({ text = '加载中……' }: { text?: string }) {
    const { View, Text } = useComponent();
    return (
        <View style={{ textAlign: 'center', fontSize: '14px', padding: '5px 0' }}>
            <View className="qj-loading">
                <View className="qj-loading__ring"></View>
                <View className="qj-loading__ring"></View>
                <View className="qj-loading__ring"></View>
            </View>
            <Text style={{ marginLeft: 5 }}>{text}</Text>
        </View>
    );
}
