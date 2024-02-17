import { mask,unMask } from "./xq-mask";

const xqMask= (): void => {
    mask()
}
const xqUnMask= (): void => {
    unMask()
}
// @ts-expect-error
window.xqMask=xqMask
// @ts-expect-error
window.xqUnMask=xqUnMask
export { xqMask,xqUnMask }
