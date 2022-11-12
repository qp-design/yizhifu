


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
