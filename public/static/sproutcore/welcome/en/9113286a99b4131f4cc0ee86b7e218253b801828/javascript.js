(function(){var a="sproutcore/ace";if(!SC.BUNDLE_INFO){throw"SC.BUNDLE_INFO is not defined!"
}if(SC.BUNDLE_INFO[a]){return}SC.BUNDLE_INFO[a]={requires:["sproutcore/empty_theme"],styles:["/static/sproutcore/ace/en/71fef724301b04e00df8643ac18a190f56ab68a0/stylesheet-packed.css","/static/sproutcore/ace/en/71fef724301b04e00df8643ac18a190f56ab68a0/stylesheet.css"],scripts:["/static/sproutcore/ace/en/71fef724301b04e00df8643ac18a190f56ab68a0/javascript-packed.js","/static/sproutcore/ace/en/71fef724301b04e00df8643ac18a190f56ab68a0/javascript.js"]}
})();SC.stringsFor("English",{});Welcome=SC.Object.create({NAMESPACE:"Welcome",VERSION:"1.0.0",store:SC.Store.create().from("CoreTools.DataSource"),displayTitle:function(){var a=(window.location.hostname||"localhost").toString();
return a.match(/sproutcore\.com/)?"SproutCore Demos".loc():"SproutCore Developer Tools"
}.property().cacheable()});Welcome.targetsController=SC.ArrayController.create({reload:function(){var a=Welcome.store.find(CoreTools.TARGETS_QUERY);
this.set("content",a)},appsOnly:function(){return this.filter(function(a){return(a.get("kind")==="app")&&(a.get("name")!=="/sproutcore/welcome")
})}.property("[]").cacheable(),loadApplication:function(){var b=this.get("selection").firstObject(),a=b?b.get("appUrl"):null;
if(a){this.set("canLoadApp",NO);this.invokeLater(function(){window.location.href=a
})}},launchEnabled:function(){var b=this.get("canLoadApp"),c=this.get("selection"),a=c.firstObject();
return b&&a&&a.get("name")!=="/sproutcore"}.property("canLoadApp","selection").cacheable(),canLoadApp:YES,allowsEmptySelection:NO,allowsMultipleSelection:NO});
Welcome.mainPage=SC.Page.design({mainPane:SC.MainPane.design({childViews:"contentView".w(),contentView:SC.View.design({layout:{width:280,height:340,centerX:0,centerY:0},childViews:"heading appSelector launchApplication".w(),heading:SC.View.design({layout:{width:271,centerX:0,top:0,height:60},tagName:"img",render:function(a,b){a.attr("src","/static/sproutcore/foundation/en/8da2f2e6ca3e0fc087fc50fd57fa316c970e07c0/images/sproutcore.png")
}}),appSelector:SC.View.design({layout:{top:80,left:0,right:0,bottom:46},childViews:"scrollView".w(),classNames:"app-selector",scrollView:SC.ScrollView.design({layout:{left:0,top:0,right:0,bottom:0},hasHorizontalScroller:NO,contentView:SC.ListView.design({rowHeight:40,contentBinding:"Welcome.targetsController.appsOnly",selectionBinding:"Welcome.targetsController.selection",isEnabledBinding:"Welcome.targetsController.canLoadApp",contentValueKey:"displayName",contentIconKey:"targetIcon",hasContentIcon:YES,target:"Welcome.targetsController",action:"loadApplication"})})}),launchApplication:SC.ButtonView.design({layout:{bottom:0,height:30,width:160,centerX:0},isEnabledBinding:"Welcome.targetsController.launchEnabled",controlSize:SC.HUGE_CONTROL_SIZE,title:"Launch Application",isDefault:YES,target:"Welcome.targetsController",action:"loadApplication"})})})});
Welcome.main=function main(){Welcome.getPath("mainPage.mainPane").append();Welcome.targetsController.reload()
};function main(){Welcome.main()};