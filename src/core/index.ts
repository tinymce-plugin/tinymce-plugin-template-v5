
const stateSelectorAdapter = function (editor: { selection: { selectorChangedWithUnbind: (arg0: any, arg1: (o: any, v: any) => void) => { (): any; new(): any; unbind: any; }; }; dom: { getStyle: (arg0: any, arg1: string) => string; getParent: (arg0: any, arg1: string) => any; }; }, selector: any[]) {
  return function (buttonApi: { setActive: (arg0: any) => void; }) {
    return editor.selection.selectorChangedWithUnbind(selector.join(','),function (o: any, v: { node: any; }) {
      buttonApi.setActive(parseInt(editor.dom.getStyle(editor.dom.getParent(v.node, 'li,p,div'), 'text-indent')) > 0 && o)
    } ).unbind;
  };
};
const create = (editor: any, data?: any)=>{
  editor.undoManager.transact(function(){
    editor.focus();
    var _block = editor.selection.getStart();
    while(_block.nodeName !== 'LI'&&_block.nodeName !== 'P'&& _block.nodeName !== 'DIV' &&_block.nodeName !== 'BODY'){
        _block = _block.parentNode
    }
    // console.log(editor);
    editor.dom.getStyle(_block,'text-indent') ? editor.execCommand('tpIndent',false,'remove'):editor.execCommand('tpIndent')
    
});

}

export { create ,stateSelectorAdapter};