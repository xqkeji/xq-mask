import { getOption,setOption } from "./xq-option"
import { append } from "xq-util"
let xqMaskModal:any=null
const mask= () => {
    setOption({})
    const template=getOption('template')
    append(document.body, template)
    const id=getOption('id')
    const xq_bs_mask = document.querySelector('#'+id)
    if (xq_bs_mask) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const xq_modal_dialog = xq_bs_mask.querySelector('.modal-dialog')!
      // @ts-expect-error
      if(typeof bootstrap!==undefined&& typeof bootstrap.Modal!==undefined)
      {
            // @ts-expect-error
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            xqMaskModal = new bootstrap.Modal(xq_bs_mask)
            xq_bs_mask.addEventListener('hidden.bs.modal', () => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
              xqMaskModal.dispose()
              xq_bs_mask.remove()
            })
            xqMaskModal.show()
        
      }
      else
      {
        console.log('error','the bootstrap not loaded!')
      }
    }
}

const unMask= () => {
  if(xqMaskModal)
  {
    xqMaskModal.hide();
  }
 
}
export {mask,unMask}