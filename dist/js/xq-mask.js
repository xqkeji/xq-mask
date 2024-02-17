/*!
 * xq-mask v1.0.1 (https://xqkeji.cn/demo/xq-mask)
 * Author xqkeji.cn
 * LICENSE SSPL-1.0
 * Copyright 2024 xqkeji.cn
 */
 "use strict";
(() => {
  // src/ts/xq-option.ts
  var template = '<div id="xq-bs-mask" class="modal modal-dialog-centered" tabindex="-1"  data-bs-backdrop="static" data-bs-keyboard="false"  aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="overlay"><i class="fa-spin bi bi-arrow-repeat"></i></div></div></div></div></div>';
  var DEFAULT_OPTIONS = {
    id: "xq-bs-mask",
    template
  };
  var maskOptions = {};
  var setOption = (options = {}) => {
    maskOptions = Object.assign({}, DEFAULT_OPTIONS);
    if (options) {
      for (const option in options) {
        if (Object.prototype.hasOwnProperty.call(maskOptions, option)) {
          maskOptions[option] = options[option];
        }
      }
    }
  };
  var getOption = (key) => {
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

  // node_modules/xq-util/dist/index.mjs
  var append = (element, dom) => {
    const node = document.createRange().createContextualFragment(dom);
    element.append(node);
  };

  // src/ts/xq-mask.ts
  var xqMaskModal = null;
  var mask = () => {
    setOption({});
    const template2 = getOption("template");
    append(document.body, template2);
    const id = getOption("id");
    const xq_bs_mask = document.querySelector("#" + id);
    if (xq_bs_mask) {
      const xq_modal_dialog = xq_bs_mask.querySelector(".modal-dialog");
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
  var unMask = () => {
    if (xqMaskModal) {
      xqMaskModal.hide();
    }
  };

  // src/ts/index.ts
  var xqMask = () => {
    mask();
  };
  var xqUnMask = () => {
    unMask();
  };
  window.xqMask = xqMask;
  window.xqUnMask = xqUnMask;
})();
/*! Bundled license information:

xq-util/dist/index.mjs:
  (*!
   * xq-util v1.0.4 (http://xqkeji.cn/)
   * Author xqkeji.cn
   * LICENSE SSPL-1.0
   * Copyright 2023 xqkeji.cn
   *)
*/
