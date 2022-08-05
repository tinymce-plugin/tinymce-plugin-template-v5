 const setupI18n = (e:any,o:pluginOpt)=>{
  tinymce.util.XHR.send({
    url:   e.tp$.isDev()? '/langs/i18n.json' : e.editorManager.PluginManager.urls[o.registryName] +'/langs/i18n.json',
    async: false,
    success: function (text:any) {
     try {
      e.tp$.I18n.add(e.settings.language,JSON.parse(text)[e.settings.language])
     } catch (error) {
     }
    },
  })
}
export default setupI18n

