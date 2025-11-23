/*!
 * xq-mask v1.0.3 (https://xqkeji.cn/demo/xq-mask)
 * Author xqkeji.cn
 * LICENSE SSPL-1.0
 * Copyright 2024 xqkeji.cn
 */
 import { append } from 'xq-util';

const template = '<div id="xq-bs-mask" class="modal modal-dialog-centered" tabindex="-1"  data-bs-backdrop="static" data-bs-keyboard="false"  aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="overlay"><i class="fa-spin bi bi-arrow-repeat"></i></div></div></div></div></div>';
const DEFAULT_OPTIONS = {
  id: "xq-bs-mask",
  template
};
let maskOptions = {};
const setOption = (options = {}) => {
  maskOptions = Object.assign({}, DEFAULT_OPTIONS);
  if (options) {
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(maskOptions, option)) {
        maskOptions[option] = options[option];
      }
    }
  }
};
const getOption = (key) => {
  if (key in maskOptions) {
    return maskOptions[key];
  }
  const id = maskOptions["id"];
  const modal = document.querySelector("#" + id);
  if (modal.hasAttribute(key)) {
    return String(modal.getAttribute(key));
  }
  return "";
};

let xqMaskModal = null;
const mask = () => {
  setOption({});
  const template = getOption("template");
  append(document.body, template);
  const id = getOption("id");
  const xq_bs_mask = document.querySelector("#" + id);
  if (xq_bs_mask) {
    xq_bs_mask.querySelector(".modal-dialog");
    if (typeof bootstrap !== void 0 && typeof bootstrap.Modal !== void 0) {
      xqMaskModal = new bootstrap.Modal(xq_bs_mask);
      xq_bs_mask.addEventListener("hidden.bs.modal", () => {
        xqMaskModal.dispose();
        xq_bs_mask.remove();
      });
      xqMaskModal.show();
    } else {
      console.log("error", "the bootstrap not loaded!");
    }
  }
};
const unMask = () => {
  if (xqMaskModal) {
    xqMaskModal.hide();
  }
};

const xqMask = () => {
  mask();
};
const xqUnMask = () => {
  unMask();
};
window.xqMask = xqMask;
window.xqUnMask = xqUnMask;

export { xqMask, xqUnMask };
