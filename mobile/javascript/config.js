	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="55";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#623100";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#27181A";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Hide";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable=" Hide";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="Yes";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thicker";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#951149";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=14;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=1800;;bookConfig.securityType="1";bookConfig.CreatedTime ="240212141009";bookConfig.bookTitle="The four friends";bookConfig.bookmarkCR="f01cc4b7248ec55b4b50e1c179b877550b830de4";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149168658","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.7142857142857143","y":"0.2927689594356261","width":"0.1506172839506173","height":"0.13783068783068783","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"None","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/narr1.mp3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149164916","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.7477954144620811","y":"0.07583774250440917","width":"0.1728395061728395","height":"0.16225749559082892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/narr2.mp3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"20241214916418","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image2","x":"0.10229276895943562","y":"0.5167548500881834","width":"0.1781305114638448","height":"0.1728395061728395","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/parag3.MP3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149164194","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image3","x":"0.7266313932980599","y":"0.31746031746031744","width":"0.21693121693121692","height":"0.18694885361552027","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/parag4.MP3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"20241214916354","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image4","x":"0.7760141093474426","y":"0.005291005291005291","width":"0.1940035273368606","height":"0.16887125220458554","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/parag5.MP3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149168346","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image5","x":"0.1058201058201058","y":"0.019400352733686062","width":"0.20105820105820105","height":"0.18165784832451493","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/parag6.MP3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149166680","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image6","x":"0.8359788359788359","y":"0.01763668430335097","width":"0.14814814814814814","height":"0.15167548500881833","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/narr8.mp3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149163835","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image7","x":"0.7566137566137566","y":"0.06172839506172839","width":"0.18342151675485008","height":"0.16225749559082892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/narr9.mp3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149164616","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image8","x":"0.7936507936507936","y":"0.014109347442680775","width":"0.19047619047619047","height":"0.1746031746031746","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1250","imgOriginalHeight":"938","url":"./files/pageConfig/Let’s read-4.png","originalURL":"./files/pageConfig/Let’s read-4.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPlayAudio","autoPlay":"false","autoPlayAgain":"true","soundStopTriggerEvt":"none","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPlayAudio","audioURL":"./files/pageConfig/narr10.mp3","H5Replay":"false","H5PlaybackNumber":"0"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202412149165772","alpha":"1","mouseOverEffect":"0","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.031746031746031744","y":"0.042328042328042326","width":"0.941358024691358","height":"0.9250440917107584","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"567","pageHeight":"567"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"2250","imgOriginalHeight":"1687","url":"./files/pageConfig/The four friends and the seasons.png","originalURL":"./files/pageConfig/The four friends and the seasons.png","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionWindowHtml","windowWidth":"720","windowHeight":"540","caption":"","windowURL":"https://sarrbenamara.github.io/the-four-friends-and-seasons/"},"effect":{"effectType":"","triggerAction":"Note","duration":"1","position":"left"}}],[],[]]}; bookConfig.isFlipPdf=true; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}