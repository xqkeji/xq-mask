const template=
'<div id="xq-bs-mask" class="modal modal-dialog-centered" tabindex="-1"  data-bs-backdrop="static" data-bs-keyboard="false"  aria-hidden="true">'+
    '<div class="modal-dialog">'+
        '<div class="modal-content">'+
            '<div class="modal-body"><div class="overlay"><i class="fa-spin bi bi-arrow-repeat"></i></div></div>'+
        '</div>'+
    '</div>'+
'</div>'

const DEFAULT_OPTIONS = {
    id:'xq-bs-mask',
    template: template
}
let maskOptions={}
const setOption=(options={})=>{
    maskOptions=Object.assign({}, DEFAULT_OPTIONS);
    if (options) {
        for (const option in options) {
            
            if(Object.prototype.hasOwnProperty.call(maskOptions,option))
            {
                // @ts-ignore
                maskOptions[option] = options[option]
            }
        }
    }
}

const getOption=(key:string):any=>{
    if (key in maskOptions) {
        // @ts-ignore
        return maskOptions[key]
    }
    // @ts-ignore
    const id=maskOptions['id']
    const modal:any = document.querySelector('#'+id)
    if (modal.hasAttribute(key)) {
      return String(modal.getAttribute(key))
    }

    return ''
}

export {setOption,getOption}
