// Created by iWeb 3.0.4 local-build-20141108

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,296),url:'rilke_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'rilke_files/stroke_1.png'},{rect:new IWRect(2,-2,203,4),url:'rilke_files/stroke_2.png'},{rect:new IWRect(205,-2,4,4),url:'rilke_files/stroke_3.png'},{rect:new IWRect(205,2,4,296),url:'rilke_files/stroke_4.png'},{rect:new IWRect(205,298,4,4),url:'rilke_files/stroke_5.png'},{rect:new IWRect(2,298,203,4),url:'rilke_files/stroke_6.png'},{rect:new IWRect(-2,298,4,4),url:'rilke_files/stroke_7.png'}],new IWSize(207,300))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('rilke_files/rilkeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
