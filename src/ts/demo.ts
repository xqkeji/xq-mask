import {xqMask,xqUnMask}  from "./index";

// @ts-expect-error
window.xqMask=xqMask
// @ts-expect-error
window.xqUnMask=xqUnMask
export default {
    xqMask,xqUnMask
}