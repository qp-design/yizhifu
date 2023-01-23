export function checkImgUrl(str: string) {
    const $domain = process.env.REACT_APP_BASE_URL;
    if (!RegExp(/https?/).test(str)) {
        return $domain + str;
    } else {
        return str;
    }
}
