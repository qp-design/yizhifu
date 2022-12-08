import { getEnv, getTaro } from '@brushes/api';

export async function navigatorImpl(url: string) {
    const isTaro = getEnv();
    if (isTaro) {
        const Taro = await getTaro();
        Taro.navigateTo({
            url
        });
    }
}

export async function navigatorBackImpl(back = 1) {
    const isTaro = getEnv();
    if (isTaro) {
        const Taro = await getTaro();
        Taro.navigateBack({
            delta: back
        })
    }
}


export async function switchTabImpl(url: string) {
    const isTaro = getEnv();
    if (isTaro) {
        const Taro = await getTaro();
        Taro.switchTab({
            url
        })
    }
}
