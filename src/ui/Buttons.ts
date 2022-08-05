import * as Main from "../core";
const setup = (editor: any,opt:pluginOpt) => {
  if (!editor.ui.registry.getAll().icons[opt.registryName]) {
    editor.ui.registry.addIcon(
      opt.registryName,
      opt.icon
   );
  }

  editor.ui.registry.addToggleButton(opt.registryName, {
    icon: opt.registryName,
    tooltip: opt.title,
    onAction: ()=>Main.create(editor),
    onSetup: Main.stateSelectorAdapter(editor, [
      '*[style*="text-indent"]',
      '*[data-mce-style*="text-indent"]',
    ])
  });

  editor.ui.registry.addMenuItem(opt.registryName, {
    icon: opt.registryName,
    text: opt.title,
    onAction: () => Main.create(editor),
  });
  
};
export { setup };
