/*
 * Raphael 1.4.3 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael=(function(){function aA(){if(aA.is(arguments[0],aV)){var d=arguments[0],e=B[bk](aA,d.splice(0,3+aA.is(d[0],ax))),S=e.set();
for(var R=0,bp=d[o];R<bp;R++){var E=d[R]||{};a9.test(E.type)&&S[f](e[E.type]().attr(E))
}return S}return B[bk](aA,arguments)}aA.version="1.4.3";var a=/[, ]+/,a9=/^(circle|rect|path|ellipse|text|image)$/,bm="prototype",ab="hasOwnProperty",V=document,aH=window,n={was:Object[bm][ab].call(aH,"Raphael"),is:aH.Raphael},bh=function(){},a5="appendChild",bk="apply",bf="concat",P="createTouch" in V,aG="",az=" ",F="split",M="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[F](az),ba={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},aN="join",o="length",bo=String[bm].toLowerCase,aj=Math,h=aj.max,a3=aj.min,ax="number",aa="string",aV="array",aP="toString",aS="fill",aK=Object[bm][aP],bc={},a6=aj.pow,f="push",bi=/^(?=[\da-f]$)/,c=/^url\(['"]?([^\)]+?)['"]?\)$/i,C=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+(?:\s*,\s*[\d\.]+)?)\s*\)|rgba?\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%(?:\s*,\s*[\d\.]+%))\s*\)|hs[bl]\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hs[bl]\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,Y=aj.round,A="setAttribute",ae=parseFloat,N=parseInt,aT=" progid:DXImageTransform.Microsoft",a8=String[bm].toUpperCase,l={blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},ah={along:"along",blur:ax,"clip-rect":"csv",cx:ax,cy:ax,fill:"colour","fill-opacity":ax,"font-size":ax,height:ax,opacity:ax,path:"path",r:ax,rotation:"csv",rx:ax,ry:ax,scale:"csv",stroke:"colour","stroke-opacity":ax,"stroke-width":ax,translation:"csv",width:ax,x:ax,y:ax},bb="replace";
aA.type=(aH.SVGAngle||V.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");
if(aA.type=="VML"){var ap=V.createElement("div");ap.innerHTML="<!--[if vml]><br><br><![endif]-->";
if(ap.childNodes[o]!=2){return aA.type=null}ap=null}aA.svg=!(aA.vml=aA.type=="VML");
bh[bm]=aA[bm];aA._id=0;aA._oid=0;aA.fn={};aA.is=function(e,d){d=bo.call(d);return(d=="object"&&e===Object(e))||(d=="undefined"&&typeof e==d)||(d=="null"&&e==null)||bo.call(aK.call(e).slice(8,-1))==d
};aA.setWindow=function(d){aH=d;V=aH.document};var aW=function(e){if(aA.vml){var d=/^\s+|\s+$/g;
aW=at(function(R){var S;R=(R+aG)[bb](d,aG);try{var bp=new aH.ActiveXObject("htmlfile");
bp.write("<body>");bp.close();S=bp.body}catch(br){S=aH.createPopup().document.body
}var i=S.createTextRange();try{S.style.color=R;var bq=i.queryCommandValue("ForeColor");
bq=((bq&255)<<16)|(bq&65280)|((bq&16711680)>>>16);return"#"+("000000"+bq[aP](16)).slice(-6)
}catch(br){return"none"}})}else{var E=V.createElement("i");E.title="Rapha\xebl Colour Picker";
E.style.display="none";V.body[a5](E);aW=at(function(i){E.style.color=i;return V.defaultView.getComputedStyle(E,aG).getPropertyValue("color")
})}return aW(e)};var au=function(){return"hsb("+[this.h,this.s,this.b]+")"},y=function(){return this.hex
};aA.hsb2rgb=at(function(bs,bq,bw){if(aA.is(bs,"object")&&"h" in bs&&"s" in bs&&"b" in bs){bw=bs.b;
bq=bs.s;bs=bs.h}var R,S,bx;if(bw==0){return{r:0,g:0,b:0,hex:"#000"}}if(bs>1||bq>1||bw>1){bs/=255;
bq/=255;bw/=255}var bp=~~(bs*6),bt=(bs*6)-bp,E=bw*(1-bq),e=bw*(1-(bq*bt)),by=bw*(1-(bq*(1-bt)));
R=[bw,e,E,E,by,bw,bw][bp];S=[by,bw,bw,e,E,E,by][bp];bx=[E,E,by,bw,bw,e,E][bp];R*=255;
S*=255;bx*=255;var bu={r:R,g:S,b:bx,toString:y},d=(~~R)[aP](16),br=(~~S)[aP](16),bv=(~~bx)[aP](16);
d=d[bb](bi,"0");br=br[bb](bi,"0");bv=bv[bb](bi,"0");bu.hex="#"+d+br+bv;return bu},aA);
aA.rgb2hsb=at(function(d,e,bq){if(aA.is(d,"object")&&"r" in d&&"g" in d&&"b" in d){bq=d.b;
e=d.g;d=d.r}if(aA.is(d,aa)){var bs=aA.getRGB(d);d=bs.r;e=bs.g;bq=bs.b}if(d>1||e>1||bq>1){d/=255;
e/=255;bq/=255}var bp=h(d,e,bq),i=a3(d,e,bq),R,E,S=bp;if(i==bp){return{h:0,s:0,b:bp}
}else{var br=(bp-i);E=br/bp;if(d==bp){R=(e-bq)/br}else{if(e==bp){R=2+((bq-d)/br)}else{R=4+((d-e)/br)
}}R/=6;R<0&&R++;R>1&&R--}return{h:R,s:E,b:S,toString:au}},aA);var aX=/,?([achlmqrstvxz]),?/gi,aZ=/\s*,\s*/,j={hs:1,rg:1};
aA._path2string=function(){return this.join(",")[bb](aX,"$1")};function at(E,e,d){function i(){var R=Array[bm].slice.call(arguments,0),bp=R[aN]("\u25ba"),S=i.cache=i.cache||{},bq=i.count=i.count||[];
if(S[ab](bp)){return d?d(S[bp]):S[bp]}bq[o]>=1000&&delete S[bq.shift()];bq[f](bp);
S[bp]=E[bk](e,R);return d?d(S[bp]):S[bp]}return i}aA.getRGB=at(function(e){if(!e||!!((e=e+aG).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1}
}if(e=="none"){return{r:-1,g:-1,b:-1,hex:"none"}}!(j[ab](e.substring(0,2))||e.charAt()=="#")&&(e=aW(e));
var bp,i,E,bs,S,bt,bq=e.match(C);if(bq){if(bq[2]){bs=N(bq[2].substring(5),16);E=N(bq[2].substring(3,5),16);
i=N(bq[2].substring(1,3),16)}if(bq[3]){bs=N((bt=bq[3].charAt(3))+bt,16);E=N((bt=bq[3].charAt(2))+bt,16);
i=N((bt=bq[3].charAt(1))+bt,16)}if(bq[4]){bq=bq[4][F](aZ);i=ae(bq[0]);E=ae(bq[1]);
bs=ae(bq[2]);S=ae(bq[3])}if(bq[5]){bq=bq[5][F](aZ);i=ae(bq[0])*2.55;E=ae(bq[1])*2.55;
bs=ae(bq[2])*2.55;S=ae(bq[3])}if(bq[6]){bq=bq[6][F](aZ);i=ae(bq[0]);E=ae(bq[1]);bs=ae(bq[2]);
return aA.hsb2rgb(i,E,bs)}if(bq[7]){bq=bq[7][F](aZ);i=ae(bq[0])*2.55;E=ae(bq[1])*2.55;
bs=ae(bq[2])*2.55;return aA.hsb2rgb(i,E,bs)}bq={r:i,g:E,b:bs};var d=(~~i)[aP](16),R=(~~E)[aP](16),br=(~~bs)[aP](16);
d=d[bb](bi,"0");R=R[bb](bi,"0");br=br[bb](bi,"0");bq.hex="#"+d+R+br;isFinite(ae(S))&&(bq.o=S);
return bq}return{r:-1,g:-1,b:-1,hex:"none",error:1}},aA);aA.getColor=function(e){var i=this.getColor.start=this.getColor.start||{h:0,s:1,b:e||0.75},d=this.hsb2rgb(i.h,i.s,i.b);
i.h+=0.075;if(i.h>1){i.h=0;i.s-=0.2;i.s<=0&&(this.getColor.start={h:0,s:1,b:i.b})
}return d.hex};aA.getColor.reset=function(){delete this.start};var aI=/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,ay=/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig;
aA.parsePathString=at(function(d){if(!d){return null}var i={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},e=[];
if(aA.is(d,aV)&&aA.is(d[0],aV)){e=aJ(d)}if(!e[o]){(d+aG)[bb](aI,function(R,E,bq){var bp=[],S=bo.call(E);
bq[bb](ay,function(bs,br){br&&bp[f](+br)});if(S=="m"&&bp[o]>2){e[f]([E][bf](bp.splice(0,2)));
S="l";E=E=="m"?"l":"L"}while(bp[o]>=i[S]){e[f]([E][bf](bp.splice(0,i[S])));if(!i[S]){break
}}})}e[aP]=aA._path2string;return e});aA.findDotsAtSegment=function(e,d,bD,bB,bp,R,br,bq,bx){var bv=1-bx,bu=a6(bv,3)*e+a6(bv,2)*3*bx*bD+bv*3*bx*bx*bp+a6(bx,3)*br,bs=a6(bv,3)*d+a6(bv,2)*3*bx*bB+bv*3*bx*bx*R+a6(bx,3)*bq,bz=e+2*bx*(bD-e)+bx*bx*(bp-2*bD+e),by=d+2*bx*(bB-d)+bx*bx*(R-2*bB+d),bC=bD+2*bx*(bp-bD)+bx*bx*(br-2*bp+bD),bA=bB+2*bx*(R-bB)+bx*bx*(bq-2*R+bB),bw=(1-bx)*e+bx*bD,bt=(1-bx)*d+bx*bB,E=(1-bx)*bp+bx*br,i=(1-bx)*R+bx*bq,S=(90-aj.atan((bz-bC)/(by-bA))*180/aj.PI);
(bz>bC||by<bA)&&(S+=180);return{x:bu,y:bs,m:{x:bz,y:by},n:{x:bC,y:bA},start:{x:bw,y:bt},end:{x:E,y:i},alpha:S}
};var ad=at(function(bu){if(!bu){return{x:0,y:0,width:0,height:0}}bu=O(bu);var br=0,bq=0,R=[],e=[],E;
for(var S=0,bt=bu[o];S<bt;S++){E=bu[S];if(E[0]=="M"){br=E[1];bq=E[2];R[f](br);e[f](bq)
}else{var bp=aU(br,bq,E[1],E[2],E[3],E[4],E[5],E[6]);R=R[bf](bp.min.x,bp.max.x);e=e[bf](bp.min.y,bp.max.y);
br=E[5];bq=E[6]}}var d=a3[bk](0,R),bs=a3[bk](0,e);return{x:d,y:bs,width:h[bk](0,R)-d,height:h[bk](0,e)-bs}
}),aJ=function(bp){var E=[];if(!aA.is(bp,aV)||!aA.is(bp&&bp[0],aV)){bp=aA.parsePathString(bp)
}for(var e=0,R=bp[o];e<R;e++){E[e]=[];for(var d=0,S=bp[e][o];d<S;d++){E[e][d]=bp[e][d]
}}E[aP]=aA._path2string;return E},am=at(function(R){if(!aA.is(R,aV)||!aA.is(R&&R[0],aV)){R=aA.parsePathString(R)
}var bt=[],bv=0,bu=0,by=0,bx=0,E=0;if(R[0][0]=="M"){bv=R[0][1];bu=R[0][2];by=bv;bx=bu;
E++;bt[f](["M",bv,bu])}for(var bq=E,bz=R[o];bq<bz;bq++){var d=bt[bq]=[],bw=R[bq];
if(bw[0]!=bo.call(bw[0])){d[0]=bo.call(bw[0]);switch(d[0]){case"a":d[1]=bw[1];d[2]=bw[2];
d[3]=bw[3];d[4]=bw[4];d[5]=bw[5];d[6]=+(bw[6]-bv).toFixed(3);d[7]=+(bw[7]-bu).toFixed(3);
break;case"v":d[1]=+(bw[1]-bu).toFixed(3);break;case"m":by=bw[1];bx=bw[2];default:for(var bp=1,br=bw[o];
bp<br;bp++){d[bp]=+(bw[bp]-((bp%2)?bv:bu)).toFixed(3)}}}else{d=bt[bq]=[];if(bw[0]=="m"){by=bw[1]+bv;
bx=bw[2]+bu}for(var S=0,e=bw[o];S<e;S++){bt[bq][S]=bw[S]}}var bs=bt[bq][o];switch(bt[bq][0]){case"z":bv=by;
bu=bx;break;case"h":bv+=+bt[bq][bs-1];break;case"v":bu+=+bt[bq][bs-1];break;default:bv+=+bt[bq][bs-2];
bu+=+bt[bq][bs-1]}}bt[aP]=aA._path2string;return bt},0,aJ),v=at(function(R){if(!aA.is(R,aV)||!aA.is(R&&R[0],aV)){R=aA.parsePathString(R)
}var bs=[],bu=0,bt=0,bx=0,bw=0,E=0;if(R[0][0]=="M"){bu=+R[0][1];bt=+R[0][2];bx=bu;
bw=bt;E++;bs[0]=["M",bu,bt]}for(var bq=E,by=R[o];bq<by;bq++){var d=bs[bq]=[],bv=R[bq];
if(bv[0]!=a8.call(bv[0])){d[0]=a8.call(bv[0]);switch(d[0]){case"A":d[1]=bv[1];d[2]=bv[2];
d[3]=bv[3];d[4]=bv[4];d[5]=bv[5];d[6]=+(bv[6]+bu);d[7]=+(bv[7]+bt);break;case"V":d[1]=+bv[1]+bt;
break;case"H":d[1]=+bv[1]+bu;break;case"M":bx=+bv[1]+bu;bw=+bv[2]+bt;default:for(var bp=1,br=bv[o];
bp<br;bp++){d[bp]=+bv[bp]+((bp%2)?bu:bt)}}}else{for(var S=0,e=bv[o];S<e;S++){bs[bq][S]=bv[S]
}}switch(d[0]){case"Z":bu=bx;bt=bw;break;case"H":bu=d[1];break;case"V":bt=d[1];break;
default:bu=bs[bq][bs[bq][o]-2];bt=bs[bq][bs[bq][o]-1]}}bs[aP]=aA._path2string;return bs
},null,aJ),bl=function(e,E,d,i){return[e,E,d,i,d,i]},a4=function(e,E,bp,R,d,i){var S=1/3,bq=2/3;
return[S*e+bq*bp,S*E+bq*R,S*d+bq*bp,S*i+bq*R,d,i]},U=function(by,b3,bH,bF,bz,bt,S,bx,b2,bA){var R=aj.PI,bE=R*120/180,d=R/180*(+bz||0),bL=[],bI,bZ=at(function(b4,b7,i){var b6=b4*aj.cos(i)-b7*aj.sin(i),b5=b4*aj.sin(i)+b7*aj.cos(i);
return{x:b6,y:b5}});if(!bA){bI=bZ(by,b3,-d);by=bI.x;b3=bI.y;bI=bZ(bx,b2,-d);bx=bI.x;
b2=bI.y;var e=aj.cos(R/180*bz),bv=aj.sin(R/180*bz),bN=(by-bx)/2,bM=(b3-b2)/2;var bX=(bN*bN)/(bH*bH)+(bM*bM)/(bF*bF);
if(bX>1){bX=aj.sqrt(bX);bH=bX*bH;bF=bX*bF}var E=bH*bH,bQ=bF*bF,bS=(bt==S?-1:1)*aj.sqrt(aj.abs((E*bQ-E*bM*bM-bQ*bN*bN)/(E*bM*bM+bQ*bN*bN))),bC=bS*bH*bM/bF+(by+bx)/2,bB=bS*-bF*bN/bH+(b3+b2)/2,bs=aj.asin(((b3-bB)/bF).toFixed(7)),br=aj.asin(((b2-bB)/bF).toFixed(7));
bs=by<bC?R-bs:bs;br=bx<bC?R-br:br;bs<0&&(bs=R*2+bs);br<0&&(br=R*2+br);if(S&&bs>br){bs=bs-R*2
}if(!S&&br>bs){br=br-R*2}}else{bs=bA[0];br=bA[1];bC=bA[2];bB=bA[3]}var bw=br-bs;if(aj.abs(bw)>bE){var bD=br,bG=bx,bu=b2;
br=bs+bE*(S&&br>bs?1:-1);bx=bC+bH*aj.cos(br);b2=bB+bF*aj.sin(br);bL=U(bx,b2,bH,bF,bz,0,S,bG,bu,[br,bD,bC,bB])
}bw=br-bs;var bq=aj.cos(bs),b1=aj.sin(bs),bp=aj.cos(br),b0=aj.sin(br),bO=aj.tan(bw/4),bR=4/3*bH*bO,bP=4/3*bF*bO,bY=[by,b3],bW=[by+bR*b1,b3-bP*bq],bV=[bx+bR*b0,b2-bP*bp],bT=[bx,b2];
bW[0]=2*bY[0]-bW[0];bW[1]=2*bY[1]-bW[1];if(bA){return[bW,bV,bT][bf](bL)}else{bL=[bW,bV,bT][bf](bL)[aN]()[F](",");
var bJ=[];for(var bU=0,bK=bL[o];bU<bK;bU++){bJ[bU]=bU%2?bZ(bL[bU-1],bL[bU],d).y:bZ(bL[bU],bL[bU+1],d).x
}return bJ}},X=function(e,d,E,i,br,bq,bp,S,bs){var R=1-bs;return{x:a6(R,3)*e+a6(R,2)*3*bs*E+R*3*bs*bs*br+a6(bs,3)*bp,y:a6(R,3)*d+a6(R,2)*3*bs*i+R*3*bs*bs*bq+a6(bs,3)*S}
},aU=at(function(i,d,R,E,by,bx,bu,br){var bw=(by-2*R+i)-(bu-2*by+R),bt=2*(R-i)-2*(by-R),bq=i-R,bp=(-bt+aj.sqrt(bt*bt-4*bw*bq))/2/bw,S=(-bt-aj.sqrt(bt*bt-4*bw*bq))/2/bw,bs=[d,br],bv=[i,bu],e;
aj.abs(bp)>1000000000000&&(bp=0.5);aj.abs(S)>1000000000000&&(S=0.5);if(bp>0&&bp<1){e=X(i,d,R,E,by,bx,bu,br,bp);
bv[f](e.x);bs[f](e.y)}if(S>0&&S<1){e=X(i,d,R,E,by,bx,bu,br,S);bv[f](e.x);bs[f](e.y)
}bw=(bx-2*E+d)-(br-2*bx+E);bt=2*(E-d)-2*(bx-E);bq=d-E;bp=(-bt+aj.sqrt(bt*bt-4*bw*bq))/2/bw;
S=(-bt-aj.sqrt(bt*bt-4*bw*bq))/2/bw;aj.abs(bp)>1000000000000&&(bp=0.5);aj.abs(S)>1000000000000&&(S=0.5);
if(bp>0&&bp<1){e=X(i,d,R,E,by,bx,bu,br,bp);bv[f](e.x);bs[f](e.y)}if(S>0&&S<1){e=X(i,d,R,E,by,bx,bu,br,S);
bv[f](e.x);bs[f](e.y)}return{min:{x:a3[bk](0,bv),y:a3[bk](0,bs)},max:{x:h[bk](0,bv),y:h[bk](0,bs)}}
}),O=at(function(by,bt){var R=v(by),bu=bt&&v(bt),bv={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},d={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},bp=function(bz,bA){var i,bB;
if(!bz){return["C",bA.x,bA.y,bA.x,bA.y,bA.x,bA.y]}!(bz[0] in {T:1,Q:1})&&(bA.qx=bA.qy=null);
switch(bz[0]){case"M":bA.X=bz[1];bA.Y=bz[2];break;case"A":bz=["C"][bf](U[bk](0,[bA.x,bA.y][bf](bz.slice(1))));
break;case"S":i=bA.x+(bA.x-(bA.bx||bA.x));bB=bA.y+(bA.y-(bA.by||bA.y));bz=["C",i,bB][bf](bz.slice(1));
break;case"T":bA.qx=bA.x+(bA.x-(bA.qx||bA.x));bA.qy=bA.y+(bA.y-(bA.qy||bA.y));bz=["C"][bf](a4(bA.x,bA.y,bA.qx,bA.qy,bz[1],bz[2]));
break;case"Q":bA.qx=bz[1];bA.qy=bz[2];bz=["C"][bf](a4(bA.x,bA.y,bz[1],bz[2],bz[3],bz[4]));
break;case"L":bz=["C"][bf](bl(bA.x,bA.y,bz[1],bz[2]));break;case"H":bz=["C"][bf](bl(bA.x,bA.y,bz[1],bA.y));
break;case"V":bz=["C"][bf](bl(bA.x,bA.y,bA.x,bz[1]));break;case"Z":bz=["C"][bf](bl(bA.x,bA.y,bA.X,bA.Y));
break}return bz},e=function(bz,bA){if(bz[bA][o]>7){bz[bA].shift();var bB=bz[bA];while(bB[o]){bz.splice(bA++,0,["C"][bf](bB.splice(0,6)))
}bz.splice(bA,1);bw=h(R[o],bu&&bu[o]||0)}},E=function(bD,bC,bA,bz,bB){if(bD&&bC&&bD[bB][0]=="M"&&bC[bB][0]!="M"){bC.splice(bB,0,["M",bz.x,bz.y]);
bA.bx=0;bA.by=0;bA.x=bD[bB][1];bA.y=bD[bB][2];bw=h(R[o],bu&&bu[o]||0)}};for(var br=0,bw=h(R[o],bu&&bu[o]||0);
br<bw;br++){R[br]=bp(R[br],bv);e(R,br);bu&&(bu[br]=bp(bu[br],d));bu&&e(bu,br);E(R,bu,bv,d,br);
E(bu,R,d,bv,br);var bq=R[br],bx=bu&&bu[br],S=bq[o],bs=bu&&bx[o];bv.x=bq[S-2];bv.y=bq[S-1];
bv.bx=ae(bq[S-4])||bv.x;bv.by=ae(bq[S-3])||bv.y;d.bx=bu&&(ae(bx[bs-4])||d.x);d.by=bu&&(ae(bx[bs-3])||d.y);
d.x=bu&&bx[bs-2];d.y=bu&&bx[bs-1]}return bu?[R,bu]:R},null,aJ),t=at(function(bt){var bs=[];
for(var bp=0,bu=bt[o];bp<bu;bp++){var e={},br=bt[bp].match(/^([^:]*):?([\d\.]*)/);
e.color=aA.getRGB(br[1]);if(e.color.error){return null}e.color=e.color.hex;br[2]&&(e.offset=br[2]+"%");
bs[f](e)}for(bp=1,bu=bs[o]-1;bp<bu;bp++){if(!bs[bp].offset){var E=ae(bs[bp-1].offset||0),R=0;
for(var S=bp+1;S<bu;S++){if(bs[S].offset){R=bs[S].offset;break}}if(!R){R=100;S=bu
}R=ae(R);var bq=(R-E)/(S-bp+1);for(;bp<S;bp++){E+=bq;bs[bp].offset=E+"%"}}}return bs
}),aB=function(d,R,i,E){var e;if(aA.is(d,aa)||aA.is(d,"object")){e=aA.is(d,aa)?V.getElementById(d):d;
if(e.tagName){if(R==null){return{container:e,width:e.style.pixelWidth||e.offsetWidth,height:e.style.pixelHeight||e.offsetHeight}
}else{return{container:e,width:R,height:i}}}}else{return{container:1,x:d,y:R,width:i,height:E}
}},a0=function(d,i){var e=this;for(var E in i){if(i[ab](E)&&!(E in d)){switch(typeof i[E]){case"function":(function(R){d[E]=d===e?R:function(){return R[bk](e,arguments)
}})(i[E]);break;case"object":d[E]=d[E]||{};a0.call(this,d[E],i[E]);break;default:d[E]=i[E];
break}}}},aw=function(d,e){d==e.top&&(e.top=d.prev);d==e.bottom&&(e.bottom=d.next);
d.next&&(d.next.prev=d.prev);d.prev&&(d.prev.next=d.next)},ag=function(d,e){if(e.top===d){return
}aw(d,e);d.next=null;d.prev=e.top;e.top.next=d;e.top=d},m=function(d,e){if(e.bottom===d){return
}aw(d,e);d.next=e.bottom;d.prev=null;e.bottom.prev=d;e.bottom=d},G=function(e,d,i){aw(e,i);
d==i.top&&(i.top=e);d.next&&(d.next.prev=e);e.next=d.next;e.prev=d;d.next=e},aD=function(e,d,i){aw(e,i);
d==i.bottom&&(i.bottom=e);d.prev&&(d.prev.next=e);e.prev=d.prev;d.prev=e;e.next=d
},w=function(d){return function(){throw new Error("Rapha\xebl: you are calling to method \u201c"+d+"\u201d of removed object")
}},aF=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/;if(aA.svg){bh[bm].svgns="http://www.w3.org/2000/svg";
bh[bm].xlink="http://www.w3.org/1999/xlink";Y=function(d){return +d+(~~d===d)*0.5
};var a2=function(i,d){if(d){for(var e in d){if(d[ab](e)){i[A](e,d[e]+aG)}}}else{i=V.createElementNS(bh[bm].svgns,i);
i.style.webkitTapHighlightColor="rgba(0,0,0,0)";return i}};aA[aP]=function(){return"Your browser supports SVG.\nYou are running Rapha\xebl "+this.version
};var u=function(d,E){var e=a2("path");E.canvas&&E.canvas[a5](e);var i=new aL(e,E);
i.type="path";ai(i,{fill:"none",stroke:"#000",path:d});return i};var b=function(R,bx,d){var bu="linear",br=0.5,bp=0.5,bz=R.style;
bx=(bx+aG)[bb](aF,function(bB,i,bC){bu="radial";if(i&&bC){br=ae(i);bp=ae(bC);var bA=((bp>0.5)*2-1);
a6(br-0.5,2)+a6(bp-0.5,2)>0.25&&(bp=aj.sqrt(0.25-a6(br-0.5,2))*bA+0.5)&&bp!=0.5&&(bp=bp.toFixed(5)-0.00001*bA)
}return aG});bx=bx[F](/\s*\-\s*/);if(bu=="linear"){var bq=bx.shift();bq=-ae(bq);if(isNaN(bq)){return null
}var S=[0,0,aj.cos(bq*aj.PI/180),aj.sin(bq*aj.PI/180)],bw=1/(h(aj.abs(S[2]),aj.abs(S[3]))||1);
S[2]*=bw;S[3]*=bw;if(S[2]<0){S[0]=-S[2];S[2]=0}if(S[3]<0){S[1]=-S[3];S[3]=0}}var bt=t(bx);
if(!bt){return null}var e=R.getAttribute(aS);e=e.match(/^url\(#(.*)\)$/);e&&d.defs.removeChild(V.getElementById(e[1]));
var E=a2(bu+"Gradient");E.id="r"+(aA._id++)[aP](36);a2(E,bu=="radial"?{fx:br,fy:bp}:{x1:S[0],y1:S[1],x2:S[2],y2:S[3]});
d.defs[a5](E);for(var bs=0,by=bt[o];bs<by;bs++){var bv=a2("stop");a2(bv,{offset:bt[bs].offset?bt[bs].offset:!bs?"0%":"100%","stop-color":bt[bs].color||"#fff"});
E[a5](bv)}a2(R,{fill:"url(#"+E.id+")",opacity:1,"fill-opacity":1});bz.fill=aG;bz.opacity=1;
bz.fillOpacity=1;return 1};var W=function(e){var d=e.getBBox();a2(e.pattern,{patternTransform:aA.format("translate({0},{1})",d.x,d.y)})
};var ai=function(bw,bF){var bz={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},bB=bw.node,bx=bw.attrs,bt=bw.rotate(),bp=function(bM,bL){bL=bz[bo.call(bL)];
if(bL){var bJ=bM.attrs["stroke-width"]||"1",bH={round:bJ,square:bJ,butt:0}[bM.attrs["stroke-linecap"]||bF["stroke-linecap"]]||0,bK=[];
var bI=bL[o];while(bI--){bK[bI]=bL[bI]*bJ+((bI%2)?1:-1)*bH}a2(bB,{"stroke-dasharray":bK[aN](",")})
}};bF[ab]("rotation")&&(bt=bF.rotation);var bs=(bt+aG)[F](a);if(!(bs.length-1)){bs=null
}else{bs[1]=+bs[1];bs[2]=+bs[2]}ae(bt)&&bw.rotate(0,true);for(var bA in bF){if(bF[ab](bA)){if(!l[ab](bA)){continue
}var by=bF[bA];bx[bA]=by;switch(bA){case"blur":bw.blur(by);break;case"rotation":bw.rotate(by,true);
break;case"href":case"title":case"target":var bD=bB.parentNode;if(bo.call(bD.tagName)!="a"){var R=a2("a");
bD.insertBefore(R,bB);R[a5](bB);bD=R}bD.setAttributeNS(bw.paper.xlink,bA,by);break;
case"cursor":bB.style.cursor=by;break;case"clip-rect":var e=(by+aG)[F](a);if(e[o]==4){bw.clip&&bw.clip.parentNode.parentNode.removeChild(bw.clip.parentNode);
var i=a2("clipPath"),bC=a2("rect");i.id="r"+(aA._id++)[aP](36);a2(bC,{x:e[0],y:e[1],width:e[2],height:e[3]});
i[a5](bC);bw.paper.defs[a5](i);a2(bB,{"clip-path":"url(#"+i.id+")"});bw.clip=bC}if(!by){var bE=V.getElementById(bB.getAttribute("clip-path")[bb](/(^url\(#|\)$)/g,aG));
bE&&bE.parentNode.removeChild(bE);a2(bB,{"clip-path":aG});delete bw.clip}break;case"path":if(bw.type=="path"){a2(bB,{d:by?bx.path=v(by):"M0,0"})
}break;case"width":bB[A](bA,by);if(bx.fx){bA="x";by=bx.x}else{break}case"x":if(bx.fx){by=-bx.x-(bx.width||0)
}case"rx":if(bA=="rx"&&bw.type=="rect"){break}case"cx":bs&&(bA=="x"||bA=="cx")&&(bs[1]+=by-bx[bA]);
bB[A](bA,Y(by));bw.pattern&&W(bw);break;case"height":bB[A](bA,by);if(bx.fy){bA="y";
by=bx.y}else{break}case"y":if(bx.fy){by=-bx.y-(bx.height||0)}case"ry":if(bA=="ry"&&bw.type=="rect"){break
}case"cy":bs&&(bA=="y"||bA=="cy")&&(bs[2]+=by-bx[bA]);bB[A](bA,Y(by));bw.pattern&&W(bw);
break;case"r":if(bw.type=="rect"){a2(bB,{rx:by,ry:by})}else{bB[A](bA,by)}break;case"src":if(bw.type=="image"){bB.setAttributeNS(bw.paper.xlink,"href",by)
}break;case"stroke-width":bB.style.strokeWidth=by;bB[A](bA,by);if(bx["stroke-dasharray"]){bp(bw,bx["stroke-dasharray"])
}break;case"stroke-dasharray":bp(bw,by);break;case"translation":var bq=(by+aG)[F](a);
bq[0]=+bq[0]||0;bq[1]=+bq[1]||0;if(bs){bs[1]+=bq[0];bs[2]+=bq[1]}x.call(bw,bq[0],bq[1]);
break;case"scale":bq=(by+aG)[F](a);bw.scale(+bq[0]||1,+bq[1]||+bq[0]||1,isNaN(ae(bq[2]))?null:+bq[2],isNaN(ae(bq[3]))?null:+bq[3]);
break;case aS:var S=(by+aG).match(c);if(S){i=a2("pattern");var bv=a2("image");i.id="r"+(aA._id++)[aP](36);
a2(i,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});a2(bv,{x:0,y:0});bv.setAttributeNS(bw.paper.xlink,"href",S[1]);
i[a5](bv);var bG=V.createElement("img");bG.style.cssText="position:absolute;left:-9999em;top-9999em";
bG.onload=function(){a2(i,{width:this.offsetWidth,height:this.offsetHeight});a2(bv,{width:this.offsetWidth,height:this.offsetHeight});
V.body.removeChild(this);bw.paper.safari()};V.body[a5](bG);bG.src=S[1];bw.paper.defs[a5](i);
bB.style.fill="url(#"+i.id+")";a2(bB,{fill:"url(#"+i.id+")"});bw.pattern=i;bw.pattern&&W(bw);
break}var E=aA.getRGB(by);if(!E.error){delete bF.gradient;delete bx.gradient;!aA.is(bx.opacity,"undefined")&&aA.is(bF.opacity,"undefined")&&a2(bB,{opacity:bx.opacity});
!aA.is(bx["fill-opacity"],"undefined")&&aA.is(bF["fill-opacity"],"undefined")&&a2(bB,{"fill-opacity":bx["fill-opacity"]})
}else{if((({circle:1,ellipse:1})[ab](bw.type)||(by+aG).charAt()!="r")&&b(bB,by,bw.paper)){bx.gradient=by;
bx.fill="none";break}}E[ab]("o")&&a2(bB,{"fill-opacity":E.o/100});case"stroke":E=aA.getRGB(by);
bB[A](bA,E.hex);bA=="stroke"&&E[ab]("o")&&a2(bB,{"stroke-opacity":E.o/100});break;
case"gradient":(({circle:1,ellipse:1})[ab](bw.type)||(by+aG).charAt()!="r")&&b(bB,by,bw.paper);
break;case"opacity":case"fill-opacity":if(bx.gradient){var d=V.getElementById(bB.getAttribute(aS)[bb](/^url\(#|\)$/g,aG));
if(d){var br=d.getElementsByTagName("stop");br[br[o]-1][A]("stop-opacity",by)}break
}default:bA=="font-size"&&(by=N(by,10)+"px");var bu=bA[bb](/(\-.)/g,function(bH){return a8.call(bH.substring(1))
});bB.style[bu]=by;bB[A](bA,by);break}}}L(bw,bF);if(bs){bw.rotate(bs.join(az))}else{ae(bt)&&bw.rotate(bt,true)
}};var k=1.2,L=function(d,R){if(d.type!="text"||!(R[ab]("text")||R[ab]("font")||R[ab]("font-size")||R[ab]("x")||R[ab]("y"))){return
}var bs=d.attrs,e=d.node,bu=e.firstChild?N(V.defaultView.getComputedStyle(e.firstChild,aG).getPropertyValue("font-size"),10):10;
if(R[ab]("text")){bs.text=R.text;while(e.firstChild){e.removeChild(e.firstChild)}var E=(R.text+aG)[F]("\n");
for(var S=0,bt=E[o];S<bt;S++){if(E[S]){var bq=a2("tspan");S&&a2(bq,{dy:bu*k,x:bs.x});
bq[a5](V.createTextNode(E[S]));e[a5](bq)}}}else{E=e.getElementsByTagName("tspan");
for(S=0,bt=E[o];S<bt;S++){S&&a2(E[S],{dy:bu*k,x:bs.x})}}a2(e,{y:bs.y});var bp=d.getBBox(),br=bs.y-(bp.y+bp.height/2);
br&&isFinite(br)&&a2(e,{y:bs.y+br})},aL=function(e,d){var E=0,i=0;this[0]=e;this.id=aA._oid++;
this.node=e;e.raphael=this;this.paper=d;this.attrs=this.attrs||{};this.transformations=[];
this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1};!d.bottom&&(d.bottom=this);this.prev=d.top;
d.top&&(d.top.next=this);d.top=this;this.next=null};aL[bm].rotate=function(e,d,E){if(this.removed){return this
}if(e==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][aN](az)
}return this._.rt.deg}var i=this.getBBox();e=(e+aG)[F](a);if(e[o]-1){d=ae(e[1]);E=ae(e[2])
}e=ae(e[0]);if(d!=null){this._.rt.deg=e}else{this._.rt.deg+=e}(E==null)&&(d=null);
this._.rt.cx=d;this._.rt.cy=E;d=d==null?i.x+i.width/2:d;E=E==null?i.y+i.height/2:E;
if(this._.rt.deg){this.transformations[0]=aA.format("rotate({0} {1} {2})",this._.rt.deg,d,E);
this.clip&&a2(this.clip,{transform:aA.format("rotate({0} {1} {2})",-this._.rt.deg,d,E)})
}else{this.transformations[0]=aG;this.clip&&a2(this.clip,{transform:aG})}a2(this.node,{transform:this.transformations[aN](az)});
return this};aL[bm].hide=function(){!this.removed&&(this.node.style.display="none");
return this};aL[bm].show=function(){!this.removed&&(this.node.style.display="");return this
};aL[bm].remove=function(){if(this.removed){return}aw(this,this.paper);this.node.parentNode.removeChild(this.node);
for(var d in this){delete this[d]}this.removed=true};aL[bm].getBBox=function(){if(this.removed){return this
}if(this.type=="path"){return ad(this.attrs.path)}if(this.node.style.display=="none"){this.show();
var E=true}var bq={};try{bq=this.node.getBBox()}catch(S){}finally{bq=bq||{}}if(this.type=="text"){bq={x:bq.x,y:Infinity,width:0,height:0};
for(var d=0,R=this.node.getNumberOfChars();d<R;d++){var bp=this.node.getExtentOfChar(d);
(bp.y<bq.y)&&(bq.y=bp.y);(bp.y+bp.height-bq.y>bq.height)&&(bq.height=bp.y+bp.height-bq.y);
(bp.x+bp.width-bq.x>bq.width)&&(bq.width=bp.x+bp.width-bq.x)}}E&&this.hide();return bq
};aL[bm].attr=function(E,bq){if(this.removed){return this}if(E==null){var S={};for(var R in this.attrs){if(this.attrs[ab](R)){S[R]=this.attrs[R]
}}this._.rt.deg&&(S.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(S.scale=this.scale());
S.gradient&&S.fill=="none"&&(S.fill=S.gradient)&&delete S.gradient;return S}if(bq==null&&aA.is(E,aa)){if(E=="translation"){return x.call(this)
}if(E=="rotation"){return this.rotate()}if(E=="scale"){return this.scale()}if(E==aS&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient
}return this.attrs[E]}if(bq==null&&aA.is(E,aV)){var d={};for(var e=0,bp=E.length;
e<bp;e++){d[E[e]]=this.attr(E[e])}return d}if(bq!=null){var br={};br[E]=bq;ai(this,br)
}else{if(E!=null&&aA.is(E,"object")){ai(this,E)}}return this};aL[bm].toFront=function(){if(this.removed){return this
}this.node.parentNode[a5](this.node);var d=this.paper;d.top!=this&&ag(this,d);return this
};aL[bm].toBack=function(){if(this.removed){return this}if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);
m(this,this.paper);var d=this.paper}return this};aL[bm].insertAfter=function(d){if(this.removed){return this
}var e=d.node;if(e.nextSibling){e.parentNode.insertBefore(this.node,e.nextSibling)
}else{e.parentNode[a5](this.node)}G(this,d,this.paper);return this};aL[bm].insertBefore=function(d){if(this.removed){return this
}var e=d.node;e.parentNode.insertBefore(this.node,e);aD(this,d,this.paper);return this
};aL[bm].blur=function(e){var d=this;if(+e!==0){var i=a2("filter"),E=a2("feGaussianBlur");
d.attrs.blur=e;i.id="r"+(aA._id++)[aP](36);a2(E,{stdDeviation:+e||1.5});i.appendChild(E);
d.paper.defs.appendChild(i);d._blur=i;a2(d.node,{filter:"url(#"+i.id+")"})}else{if(d._blur){d._blur.parentNode.removeChild(d._blur);
delete d._blur;delete d.attrs.blur}d.node.removeAttribute("filter")}};var Z=function(e,d,S,R){d=Y(d);
S=Y(S);var E=a2("circle");e.canvas&&e.canvas[a5](E);var i=new aL(E,e);i.attrs={cx:d,cy:S,r:R,fill:"none",stroke:"#000"};
i.type="circle";a2(E,i.attrs);return i};var aY=function(i,d,bq,e,S,bp){d=Y(d);bq=Y(bq);
var R=a2("rect");i.canvas&&i.canvas[a5](R);var E=new aL(R,i);E.attrs={x:d,y:bq,width:e,height:S,r:bp||0,rx:bp||0,ry:bp||0,fill:"none",stroke:"#000"};
E.type="rect";a2(R,E.attrs);return E};var ar=function(e,d,bp,S,R){d=Y(d);bp=Y(bp);
var E=a2("ellipse");e.canvas&&e.canvas[a5](E);var i=new aL(E,e);i.attrs={cx:d,cy:bp,rx:S,ry:R,fill:"none",stroke:"#000"};
i.type="ellipse";a2(E,i.attrs);return i};var s=function(i,bp,d,bq,e,S){var R=a2("image");
a2(R,{x:d,y:bq,width:e,height:S,preserveAspectRatio:"none"});R.setAttributeNS(i.xlink,"href",bp);
i.canvas&&i.canvas[a5](R);var E=new aL(R,i);E.attrs={x:d,y:bq,width:e,height:S,src:bp};
E.type="image";return E};var af=function(e,d,S,R){var E=a2("text");a2(E,{x:d,y:S,"text-anchor":"middle"});
e.canvas&&e.canvas[a5](E);var i=new aL(E,e);i.attrs={x:d,y:S,"text-anchor":"middle",text:R,font:l.font,stroke:"none",fill:"#000"};
i.type="text";ai(i,i.attrs);return i};var bj=function(e,d){this.width=e||this.width;
this.height=d||this.height;this.canvas[A]("width",this.width);this.canvas[A]("height",this.height);
return this};var B=function(){var E=aB[bk](0,arguments),i=E&&E.container,e=E.x,bp=E.y,R=E.width,d=E.height;
if(!i){throw new Error("SVG container not found.")}var S=a2("svg");e=e||0;bp=bp||0;
R=R||512;d=d||342;a2(S,{xmlns:"http://www.w3.org/2000/svg",version:1.1,width:R,height:d});
if(i==1){S.style.cssText="position:absolute;left:"+e+"px;top:"+bp+"px";V.body[a5](S)
}else{if(i.firstChild){i.insertBefore(S,i.firstChild)}else{i[a5](S)}}i=new bh;i.width=R;
i.height=d;i.canvas=S;a0.call(i,i,aA.fn);i.clear();return i};bh[bm].clear=function(){var d=this.canvas;
while(d.firstChild){d.removeChild(d.firstChild)}this.bottom=this.top=null;(this.desc=a2("desc"))[a5](V.createTextNode("Created with Rapha\xebl"));
d[a5](this.desc);d[a5](this.defs=a2("defs"))};bh[bm].remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);
for(var d in this){this[d]=w(d)}}}if(aA.vml){var J={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},aE=/([clmz]),?([^clmz]*)/gi,bn=/-?[^,\s-]+/g,aO=1000+az+1000,r=10,p={path:1,rect:1},a1=function(bu){var br=/[ahqstv]/ig,E=v;
(bu+aG).match(br)&&(E=O);br=/[clmz]/g;if(E==v&&!(bu+aG).match(br)){var bq=(bu+aG)[bb](aE,function(bx,bz,bv){var by=[],i=bo.call(bz)=="m",bw=J[bz];
bv[bb](bn,function(bA){if(i&&by[o]==2){bw+=by+J[bz=="m"?"l":"L"];by=[]}by[f](Y(bA*r))
});return bw+by});return bq}var bs=E(bu),e,d;bq=[];for(var S=0,bt=bs[o];S<bt;S++){e=bs[S];
d=bo.call(bs[S][0]);d=="z"&&(d="x");for(var R=1,bp=e[o];R<bp;R++){d+=Y(e[R]*r)+(R!=bp-1?",":aG)
}bq[f](d)}return bq[aN](az)};aA[aP]=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl "+this.version
};u=function(i,e){var S=aq("group");S.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
S.coordsize=e.coordsize;S.coordorigin=e.coordorigin;var R=aq("shape"),E=R.style;E.width=e.width+"px";
E.height=e.height+"px";R.coordsize=aO;R.coordorigin=e.coordorigin;S[a5](R);var bp=new aL(R,S,e),d={fill:"none",stroke:"#000"};
i&&(d.path=i);bp.isAbsolute=true;bp.type="path";bp.path=[];bp.Path=aG;ai(bp,d);e.canvas[a5](S);
return bp};ai=function(bs,bz){bs.attrs=bs.attrs||{};var bw=bs.node,bA=bs.attrs,bp=bw.style,E,by=(bz.x!=bA.x||bz.y!=bA.y||bz.width!=bA.width||bz.height!=bA.height||bz.r!=bA.r)&&bs.type=="rect",bE=bs;
for(var bq in bz){if(bz[ab](bq)){bA[bq]=bz[bq]}}if(by){bA.path=al(bA.x,bA.y,bA.width,bA.height,bA.r);
bs.X=bA.x;bs.Y=bA.y;bs.W=bA.width;bs.H=bA.height}bz.href&&(bw.href=bz.href);bz.title&&(bw.title=bz.title);
bz.target&&(bw.target=bz.target);bz.cursor&&(bp.cursor=bz.cursor);"blur" in bz&&bs.blur(bz.blur);
if(bz.path&&bs.type=="path"||by){bw.path=a1(bA.path)}if(bz.rotation!=null){bs.rotate(bz.rotation,true)
}if(bz.translation){E=(bz.translation+aG)[F](a);x.call(bs,E[0],E[1]);if(bs._.rt.cx!=null){bs._.rt.cx+=+E[0];
bs._.rt.cy+=+E[1];bs.setBox(bs.attrs,E[0],E[1])}}if(bz.scale){E=(bz.scale+aG)[F](a);
bs.scale(+E[0]||1,+E[1]||+E[0]||1,+E[2]||null,+E[3]||null)}if("clip-rect" in bz){var d=(bz["clip-rect"]+aG)[F](a);
if(d[o]==4){d[2]=+d[2]+(+d[0]);d[3]=+d[3]+(+d[1]);var br=bw.clipRect||V.createElement("div"),bD=br.style,S=bw.parentNode;
bD.clip=aA.format("rect({1}px {2}px {3}px {0}px)",d);if(!bw.clipRect){bD.position="absolute";
bD.top=0;bD.left=0;bD.width=bs.paper.width+"px";bD.height=bs.paper.height+"px";S.parentNode.insertBefore(br,S);
br[a5](S);bw.clipRect=br}}if(!bz["clip-rect"]){bw.clipRect&&(bw.clipRect.style.clip=aG)
}}if(bs.type=="image"&&bz.src){bw.src=bz.src}if(bs.type=="image"&&bz.opacity){bw.filterOpacity=aT+".Alpha(opacity="+(bz.opacity*100)+")";
bp.filter=(bw.filterMatrix||aG)+(bw.filterOpacity||aG)}bz.font&&(bp.font=bz.font);
bz["font-family"]&&(bp.fontFamily='"'+bz["font-family"][F](",")[0][bb](/^['"]+|['"]+$/g,aG)+'"');
bz["font-size"]&&(bp.fontSize=bz["font-size"]);bz["font-weight"]&&(bp.fontWeight=bz["font-weight"]);
bz["font-style"]&&(bp.fontStyle=bz["font-style"]);if(bz.opacity!=null||bz["stroke-width"]!=null||bz.fill!=null||bz.stroke!=null||bz["stroke-width"]!=null||bz["stroke-opacity"]!=null||bz["fill-opacity"]!=null||bz["stroke-dasharray"]!=null||bz["stroke-miterlimit"]!=null||bz["stroke-linejoin"]!=null||bz["stroke-linecap"]!=null){bw=bs.shape||bw;
var bx=(bw.getElementsByTagName(aS)&&bw.getElementsByTagName(aS)[0]),bB=false;!bx&&(bB=bx=aq(aS));
if("fill-opacity" in bz||"opacity" in bz){var e=((+bA["fill-opacity"]+1||2)-1)*((+bA.opacity+1||2)-1)*((+aA.getRGB(bz.fill).o+1||2)-1);
e<0&&(e=0);e>1&&(e=1);bx.opacity=e}bz.fill&&(bx.on=true);if(bx.on==null||bz.fill=="none"){bx.on=false
}if(bx.on&&bz.fill){var i=bz.fill.match(c);if(i){bx.src=i[1];bx.type="tile"}else{bx.color=aA.getRGB(bz.fill).hex;
bx.src=aG;bx.type="solid";if(aA.getRGB(bz.fill).error&&(bE.type in {circle:1,ellipse:1}||(bz.fill+aG).charAt()!="r")&&b(bE,bz.fill)){bA.fill="none";
bA.gradient=bz.fill}}}bB&&bw[a5](bx);var R=(bw.getElementsByTagName("stroke")&&bw.getElementsByTagName("stroke")[0]),bC=false;
!R&&(bC=R=aq("stroke"));if((bz.stroke&&bz.stroke!="none")||bz["stroke-width"]||bz["stroke-opacity"]!=null||bz["stroke-dasharray"]||bz["stroke-miterlimit"]||bz["stroke-linejoin"]||bz["stroke-linecap"]){R.on=true
}(bz.stroke=="none"||R.on==null||bz.stroke==0||bz["stroke-width"]==0)&&(R.on=false);
var bv=aA.getRGB(bz.stroke);R.on&&bz.stroke&&(R.color=bv.hex);e=((+bA["stroke-opacity"]+1||2)-1)*((+bA.opacity+1||2)-1)*((+bv.o+1||2)-1);
var bt=(ae(bz["stroke-width"])||1)*0.75;e<0&&(e=0);e>1&&(e=1);bz["stroke-width"]==null&&(bt=bA["stroke-width"]);
bz["stroke-width"]&&(R.weight=bt);bt&&bt<1&&(e*=bt)&&(R.weight=1);R.opacity=e;bz["stroke-linejoin"]&&(R.joinstyle=bz["stroke-linejoin"]||"miter");
R.miterlimit=bz["stroke-miterlimit"]||8;bz["stroke-linecap"]&&(R.endcap=bz["stroke-linecap"]=="butt"?"flat":bz["stroke-linecap"]=="square"?"square":"round");
if(bz["stroke-dasharray"]){var bu={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};
R.dashstyle=bu[ab](bz["stroke-dasharray"])?bu[bz["stroke-dasharray"]]:aG}bC&&bw[a5](R)
}if(bE.type=="text"){bp=bE.paper.span.style;bA.font&&(bp.font=bA.font);bA["font-family"]&&(bp.fontFamily=bA["font-family"]);
bA["font-size"]&&(bp.fontSize=bA["font-size"]);bA["font-weight"]&&(bp.fontWeight=bA["font-weight"]);
bA["font-style"]&&(bp.fontStyle=bA["font-style"]);bE.node.string&&(bE.paper.span.innerHTML=(bE.node.string+aG)[bb](/</g,"&#60;")[bb](/&/g,"&#38;")[bb](/\n/g,"<br>"));
bE.W=bA.w=bE.paper.span.offsetWidth;bE.H=bA.h=bE.paper.span.offsetHeight;bE.X=bA.x;
bE.Y=bA.y+Y(bE.H/2);switch(bA["text-anchor"]){case"start":bE.node.style["v-text-align"]="left";
bE.bbx=Y(bE.W/2);break;case"end":bE.node.style["v-text-align"]="right";bE.bbx=-Y(bE.W/2);
break;default:bE.node.style["v-text-align"]="center";break}}};b=function(d,bq){d.attrs=d.attrs||{};
var br=d.attrs,bt,S="linear",bp=".5 .5";d.attrs.gradient=bq;bq=(bq+aG)[bb](aF,function(bv,bw,i){S="radial";
if(bw&&i){bw=ae(bw);i=ae(i);a6(bw-0.5,2)+a6(i-0.5,2)>0.25&&(i=aj.sqrt(0.25-a6(bw-0.5,2))*((i>0.5)*2-1)+0.5);
bp=bw+az+i}return aG});bq=bq[F](/\s*\-\s*/);if(S=="linear"){var e=bq.shift();e=-ae(e);
if(isNaN(e)){return null}}var R=t(bq);if(!R){return null}d=d.shape||d.node;bt=d.getElementsByTagName(aS)[0]||aq(aS);
!bt.parentNode&&d.appendChild(bt);if(R[o]){bt.on=true;bt.method="none";bt.color=R[0].color;
bt.color2=R[R[o]-1].color;var bu=[];for(var E=0,bs=R[o];E<bs;E++){R[E].offset&&bu[f](R[E].offset+az+R[E].color)
}bt.colors&&(bt.colors.value=bu[o]?bu[aN]():"0% "+bt.color);if(S=="radial"){bt.type="gradientradial";
bt.focus="100%";bt.focussize=bp;bt.focusposition=bp}else{bt.type="gradient";bt.angle=(270-e)%360
}}return 1};aL=function(R,bp,d){var S=0,i=0,e=0,E=1;this[0]=R;this.id=aA._oid++;this.node=R;
R.raphael=this;this.X=0;this.Y=0;this.attrs={};this.Group=bp;this.paper=d;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};
!d.bottom&&(d.bottom=this);this.prev=d.top;d.top&&(d.top.next=this);d.top=this;this.next=null
};aL[bm].rotate=function(e,d,i){if(this.removed){return this}if(e==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][aN](az)
}return this._.rt.deg}e=(e+aG)[F](a);if(e[o]-1){d=ae(e[1]);i=ae(e[2])}e=ae(e[0]);
if(d!=null){this._.rt.deg=e}else{this._.rt.deg+=e}i==null&&(d=null);this._.rt.cx=d;
this._.rt.cy=i;this.setBox(this.attrs,d,i);this.Group.style.rotation=this._.rt.deg;
return this};aL[bm].setBox=function(R,S,E){if(this.removed){return this}var d=this.Group.style,bp=(this.shape&&this.shape.style)||this.node.style;
R=R||{};for(var bq in R){if(R[ab](bq)){this.attrs[bq]=R[bq]}}S=S||this._.rt.cx;E=E||this._.rt.cy;
var bt=this.attrs,bw,bv,bx,bs;switch(this.type){case"circle":bw=bt.cx-bt.r;bv=bt.cy-bt.r;
bx=bs=bt.r*2;break;case"ellipse":bw=bt.cx-bt.rx;bv=bt.cy-bt.ry;bx=bt.rx*2;bs=bt.ry*2;
break;case"image":bw=+bt.x;bv=+bt.y;bx=bt.width||0;bs=bt.height||0;break;case"text":this.textpath.v=["m",Y(bt.x),", ",Y(bt.y-2),"l",Y(bt.x)+1,", ",Y(bt.y-2)][aN](aG);
bw=bt.x-Y(this.W/2);bv=bt.y-this.H/2;bx=this.W;bs=this.H;break;case"rect":case"path":if(!this.attrs.path){bw=0;
bv=0;bx=this.paper.width;bs=this.paper.height}else{var br=ad(this.attrs.path);bw=br.x;
bv=br.y;bx=br.width;bs=br.height}break;default:bw=0;bv=0;bx=this.paper.width;bs=this.paper.height;
break}S=(S==null)?bw+bx/2:S;E=(E==null)?bv+bs/2:E;var e=S-this.paper.width/2,bu=E-this.paper.height/2,by;
d.left!=(by=e+"px")&&(d.left=by);d.top!=(by=bu+"px")&&(d.top=by);this.X=p[ab](this.type)?-e:bw;
this.Y=p[ab](this.type)?-bu:bv;this.W=bx;this.H=bs;if(p[ab](this.type)){bp.left!=(by=-e*r+"px")&&(bp.left=by);
bp.top!=(by=-bu*r+"px")&&(bp.top=by)}else{if(this.type=="text"){bp.left!=(by=-e+"px")&&(bp.left=by);
bp.top!=(by=-bu+"px")&&(bp.top=by)}else{d.width!=(by=this.paper.width+"px")&&(d.width=by);
d.height!=(by=this.paper.height+"px")&&(d.height=by);bp.left!=(by=bw-e+"px")&&(bp.left=by);
bp.top!=(by=bv-bu+"px")&&(bp.top=by);bp.width!=(by=bx+"px")&&(bp.width=by);bp.height!=(by=bs+"px")&&(bp.height=by)
}}};aL[bm].hide=function(){!this.removed&&(this.Group.style.display="none");return this
};aL[bm].show=function(){!this.removed&&(this.Group.style.display="block");return this
};aL[bm].getBBox=function(){if(this.removed){return this}if(p[ab](this.type)){return ad(this.attrs.path)
}return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}};aL[bm].remove=function(){if(this.removed){return
}aw(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);
this.shape&&this.shape.parentNode.removeChild(this.shape);for(var d in this){delete this[d]
}this.removed=true};aL[bm].attr=function(e,bp){if(this.removed){return this}if(e==null){var R={};
for(var E in this.attrs){if(this.attrs[ab](E)){R[E]=this.attrs[E]}}this._.rt.deg&&(R.rotation=this.rotate());
(this._.sx!=1||this._.sy!=1)&&(R.scale=this.scale());R.gradient&&R.fill=="none"&&(R.fill=R.gradient)&&delete R.gradient;
return R}if(bp==null&&aA.is(e,aa)){if(e=="translation"){return x.call(this)}if(e=="rotation"){return this.rotate()
}if(e=="scale"){return this.scale()}if(e==aS&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient
}return this.attrs[e]}if(this.attrs&&bp==null&&aA.is(e,aV)){var S,d={};for(E=0,S=e[o];
E<S;E++){d[e[E]]=this.attr(e[E])}return d}var bq;if(bp!=null){bq={};bq[e]=bp}bp==null&&aA.is(e,"object")&&(bq=e);
if(bq){if(bq.text&&this.type=="text"){this.node.string=bq.text}ai(this,bq);if(bq.gradient&&(({circle:1,ellipse:1})[ab](this.type)||(bq.gradient+aG).charAt()!="r")){b(this,bq.gradient)
}(!p[ab](this.type)||this._.rt.deg)&&this.setBox(this.attrs)}return this};aL[bm].toFront=function(){!this.removed&&this.Group.parentNode[a5](this.Group);
this.paper.top!=this&&ag(this,this.paper);return this};aL[bm].toBack=function(){if(this.removed){return this
}if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);
m(this,this.paper)}return this};aL[bm].insertAfter=function(d){if(this.removed){return this
}if(d.Group.nextSibling){d.Group.parentNode.insertBefore(this.Group,d.Group.nextSibling)
}else{d.Group.parentNode[a5](this.Group)}G(this,d,this.paper);return this};aL[bm].insertBefore=function(d){if(this.removed){return this
}d.Group.parentNode.insertBefore(this.Group,d.Group);aD(this,d,this.paper);return this
};var bg=/ progid:\S+Blur\([^\)]+\)/g;aL[bm].blur=function(d){var e=this.node.style,i=e.filter;
i=i.replace(bg,"");if(+d!==0){this.attrs.blur=d;e.filter=i+aT+".Blur(pixelradius="+(+d||1.5)+")";
e.margin=Raphael.format("-{0}px 0 0 -{0}px",Math.round(+d||1.5))}else{e.filter=i;
e.margin=0;delete this.attrs.blur}};Z=function(e,d,bq,S){var R=aq("group"),bp=aq("oval"),i=bp.style;
R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
R.coordsize=aO;R.coordorigin=e.coordorigin;R[a5](bp);var E=new aL(bp,R,e);E.type="circle";
ai(E,{stroke:"#000",fill:"none"});E.attrs.cx=d;E.attrs.cy=bq;E.attrs.r=S;E.setBox({x:d-S,y:bq-S,width:S*2,height:S*2});
e.canvas[a5](R);return E};function al(d,R,e,i,E){if(E){return aA.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",d+E,R,e-E*2,E,-E,i-E*2,E*2-e,E*2-i)
}else{return aA.format("M{0},{1}l{2},0,0,{3},{4},0z",d,R,e,i,-e)}}aY=function(e,bp,R,bq,i,d){var br=al(bp,R,bq,i,d),E=e.path(br),S=E.attrs;
E.X=S.x=bp;E.Y=S.y=R;E.W=S.width=bq;E.H=S.height=i;S.r=d;S.path=br;E.type="rect";
return E};ar=function(d,br,bq,i,e){var R=aq("group"),E=aq("oval"),bp=E.style;R.style.cssText="position:absolute;left:0;top:0;width:"+d.width+"px;height:"+d.height+"px";
R.coordsize=aO;R.coordorigin=d.coordorigin;R[a5](E);var S=new aL(E,R,d);S.type="ellipse";
ai(S,{stroke:"#000"});S.attrs.cx=br;S.attrs.cy=bq;S.attrs.rx=i;S.attrs.ry=e;S.setBox({x:br-i,y:bq-e,width:i*2,height:e*2});
d.canvas[a5](R);return S};s=function(e,d,br,bq,bs,E){var R=aq("group"),i=aq("image"),bp=i.style;
R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
R.coordsize=aO;R.coordorigin=e.coordorigin;i.src=d;R[a5](i);var S=new aL(i,R,e);S.type="image";
S.attrs.src=d;S.attrs.x=br;S.attrs.y=bq;S.attrs.w=bs;S.attrs.h=E;S.setBox({x:br,y:bq,width:bs,height:E});
e.canvas[a5](R);return S};af=function(e,br,bq,bs){var R=aq("group"),E=aq("shape"),bp=E.style,bt=aq("path"),d=bt.style,i=aq("textpath");
R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";
R.coordsize=aO;R.coordorigin=e.coordorigin;bt.v=aA.format("m{0},{1}l{2},{1}",Y(br*10),Y(bq*10),Y(br*10)+1);
bt.textpathok=true;bp.width=e.width;bp.height=e.height;i.string=bs+aG;i.on=true;E[a5](i);
E[a5](bt);R[a5](E);var S=new aL(i,R,e);S.shape=E;S.textpath=bt;S.type="text";S.attrs.text=bs;
S.attrs.x=br;S.attrs.y=bq;S.attrs.w=1;S.attrs.h=1;ai(S,{font:l.font,stroke:"none",fill:"#000"});
S.setBox();e.canvas[a5](R);return S};bj=function(i,d){var e=this.canvas.style;i==+i&&(i+="px");
d==+d&&(d+="px");e.width=i;e.height=d;e.clip="rect(0 "+i+" "+d+" 0)";return this};
var aq;V.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!V.namespaces.rvml&&V.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
aq=function(d){return V.createElement("<rvml:"+d+' class="rvml">')}}catch(ao){aq=function(d){return V.createElement("<"+d+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
}}B=function(){var i=aB[bk](0,arguments),d=i.container,br=i.height,bs,e=i.width,bq=i.x,bp=i.y;
if(!d){throw new Error("VML container not found.")}var R=new bh,S=R.canvas=V.createElement("div"),E=S.style;
bq=bq||0;bp=bp||0;e=e||512;br=br||342;e==+e&&(e+="px");br==+br&&(br+="px");R.width=1000;
R.height=1000;R.coordsize=r*1000+az+r*1000;R.coordorigin="0 0";R.span=V.createElement("span");
R.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
S[a5](R.span);E.cssText=aA.format("width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,br);
if(d==1){V.body[a5](S);E.left=bq+"px";E.top=bp+"px";E.position="absolute"}else{if(d.firstChild){d.insertBefore(S,d.firstChild)
}else{d[a5](S)}}a0.call(R,R,aA.fn);return R};bh[bm].clear=function(){this.canvas.innerHTML=aG;
this.span=V.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
this.canvas[a5](this.span);this.bottom=this.top=null};bh[bm].remove=function(){this.canvas.parentNode.removeChild(this.canvas);
for(var d in this){this[d]=w(d)}return true}}if((/^Apple|^Google/).test(aH.navigator.vendor)&&(!(aH.navigator.userAgent.indexOf("Version/4.0")+1)||aH.navigator.platform.slice(0,2)=="iP")){bh[bm].safari=function(){var d=this.rect(-99,-99,this.width+99,this.height+99);
aH.setTimeout(function(){d.remove()})}}else{bh[bm].safari=function(){}}var K=function(){this.returnValue=false
},be=function(){return this.originalEvent.preventDefault()},aR=function(){this.cancelBubble=true
},av=function(){return this.originalEvent.stopPropagation()},an=(function(){if(V.addEventListener){return function(S,E,i,e){var d=P&&ba[E]?ba[E]:E;
var R=function(bs){if(P&&ba[ab](E)){for(var bq=0,br=bs.targetTouches&&bs.targetTouches.length;
bq<br;bq++){if(bs.targetTouches[bq].target==S){var bp=bs;bs=bs.targetTouches[bq];
bs.originalEvent=bp;bs.preventDefault=be;bs.stopPropagation=av;break}}}return i.call(e,bs)
};S.addEventListener(d,R,false);return function(){S.removeEventListener(d,R,false);
return true}}}else{if(V.attachEvent){return function(S,E,i,e){var R=function(bp){bp=bp||aH.event;
bp.preventDefault=bp.preventDefault||K;bp.stopPropagation=bp.stopPropagation||aR;
return i.call(e,bp)};S.attachEvent("on"+E,R);var d=function(){S.detachEvent("on"+E,R);
return true};return d}}}})();for(var ak=M[o];ak--;){(function(d){aA[d]=aL[bm][d]=function(e){if(aA.is(e,"function")){this.events=this.events||[];
this.events.push({name:d,f:e,unbind:an(this.shape||this.node||V,d,e,this)})}return this
};aA["un"+d]=aL[bm]["un"+d]=function(E){var i=this.events,e=i[o];while(e--){if(i[e].name==d&&i[e].f==E){i[e].unbind();
i.splice(e,1);!i.length&&delete this.events;return this}}return this}})(M[ak])}aL[bm].hover=function(e,d){return this.mouseover(e).mouseout(d)
};aL[bm].unhover=function(e,d){return this.unmouseover(e).unmouseout(d)};aL[bm].drag=function(i,S,R){this._drag={};
var E=this.mousedown(function(bp){(bp.originalEvent?bp.originalEvent:bp).preventDefault();
this._drag.x=bp.clientX;this._drag.y=bp.clientY;this._drag.id=bp.identifier;S&&S.call(this,bp.clientX,bp.clientY);
Raphael.mousemove(e).mouseup(d)}),e=function(br){var bp=br.clientX,bt=br.clientY;
if(P){var bq=br.touches.length,bs;while(bq--){bs=br.touches[bq];if(bs.identifier==E._drag.id){bp=bs.clientX;
bt=bs.clientY;(br.originalEvent?br.originalEvent:br).preventDefault();break}}}else{br.preventDefault()
}i&&i.call(E,bp-E._drag.x,bt-E._drag.y,bp,bt)},d=function(){E._drag={};Raphael.unmousemove(e).unmouseup(d);
R&&R.call(E)};return this};bh[bm].circle=function(d,i,e){return Z(this,d||0,i||0,e||0)
};bh[bm].rect=function(d,R,e,i,E){return aY(this,d||0,R||0,e||0,i||0,E||0)};bh[bm].ellipse=function(d,E,i,e){return ar(this,d||0,E||0,i||0,e||0)
};bh[bm].path=function(d){d&&!aA.is(d,aa)&&!aA.is(d[0],aV)&&(d+=aG);return u(aA.format[bk](aA,arguments),this)
};bh[bm].image=function(E,d,R,e,i){return s(this,E||"about:blank",d||0,R||0,e||0,i||0)
};bh[bm].text=function(d,i,e){return af(this,d||0,i||0,e||aG)};bh[bm].set=function(d){arguments[o]>1&&(d=Array[bm].splice.call(arguments,0,arguments[o]));
return new ac(d)};bh[bm].setSize=bj;bh[bm].top=bh[bm].bottom=null;bh[bm].raphael=aA;
function z(){return this.x+az+this.y}aL[bm].resetScale=function(){if(this.removed){return this
}this._.sx=1;this._.sy=1;this.attrs.scale="1 1"};aL[bm].scale=function(bv,bu,E,e){if(this.removed){return this
}if(bv==null&&bu==null){return{x:this._.sx,y:this._.sy,toString:z}}bu=bu||bv;!+bu&&(bu=bv);
var bz,bx,by,bw,bL=this.attrs;if(bv!=0){var bt=this.getBBox(),bq=bt.x+bt.width/2,R=bt.y+bt.height/2,bK=bv/this._.sx,bJ=bu/this._.sy;
E=(+E||E==0)?E:bq;e=(+e||e==0)?e:R;var bs=~~(bv/aj.abs(bv)),bp=~~(bu/aj.abs(bu)),bC=this.node.style,bN=E+(bq-E)*bK,bM=e+(R-e)*bJ;
switch(this.type){case"rect":case"image":var br=bL.width*bs*bK,bB=bL.height*bp*bJ;
this.attr({height:bB,r:bL.r*a3(bs*bK,bp*bJ),width:br,x:bN-br/2,y:bM-bB/2});break;
case"circle":case"ellipse":this.attr({rx:bL.rx*bs*bK,ry:bL.ry*bp*bJ,r:bL.r*a3(bs*bK,bp*bJ),cx:bN,cy:bM});
break;case"text":this.attr({x:bN,y:bM});break;case"path":var bE=am(bL.path),bF=true;
for(var bH=0,bA=bE[o];bH<bA;bH++){var bD=bE[bH],S=a8.call(bD[0]);if(S=="M"&&bF){continue
}else{bF=false}if(S=="A"){bD[bE[bH][o]-2]*=bK;bD[bE[bH][o]-1]*=bJ;bD[1]*=bs*bK;bD[2]*=bp*bJ;
bD[5]=+!(bs+bp?!+bD[5]:+bD[5])}else{if(S=="H"){for(var bG=1,bI=bD[o];bG<bI;bG++){bD[bG]*=bK
}}else{if(S=="V"){for(bG=1,bI=bD[o];bG<bI;bG++){bD[bG]*=bJ}}else{for(bG=1,bI=bD[o];
bG<bI;bG++){bD[bG]*=(bG%2)?bK:bJ}}}}}var d=ad(bE);bz=bN-d.x-d.width/2;bx=bM-d.y-d.height/2;
bE[0][1]+=bz;bE[0][2]+=bx;this.attr({path:bE});break}if(this.type in {text:1,image:1}&&(bs!=1||bp!=1)){if(this.transformations){this.transformations[2]="scale("[bf](bs,",",bp,")");
this.node[A]("transform",this.transformations[aN](az));bz=(bs==-1)?-bL.x-(br||0):bL.x;
bx=(bp==-1)?-bL.y-(bB||0):bL.y;this.attr({x:bz,y:bx});bL.fx=bs-1;bL.fy=bp-1}else{this.node.filterMatrix=aT+".Matrix(M11="[bf](bs,", M12=0, M21=0, M22=",bp,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");
bC.filter=(this.node.filterMatrix||aG)+(this.node.filterOpacity||aG)}}else{if(this.transformations){this.transformations[2]=aG;
this.node[A]("transform",this.transformations[aN](az));bL.fx=0;bL.fy=0}else{this.node.filterMatrix=aG;
bC.filter=(this.node.filterMatrix||aG)+(this.node.filterOpacity||aG)}}bL.scale=[bv,bu,E,e][aN](az);
this._.sx=bv;this._.sy=bu}return this};aL[bm].clone=function(){if(this.removed){return null
}var d=this.attr();delete d.scale;delete d.translation;return this.paper[this.type]().attr(d)
};var g=at(function(E,d,bq,bp,bw,bv,bu,bt,R){var bs=0,S;for(var br=0;br<1.001;br+=0.001){var e=aA.findDotsAtSegment(E,d,bq,bp,bw,bv,bu,bt,br);
br&&(bs+=a6(a6(S.x-e.x,2)+a6(S.y-e.y,2),0.5));if(bs>=R){return e}S=e}}),aQ=function(d,e){return function(by,S,bp){by=O(by);
var bu,bt,E,bq,R="",bx={},bv,bs=0;for(var br=0,bw=by.length;br<bw;br++){E=by[br];
if(E[0]=="M"){bu=+E[1];bt=+E[2]}else{bq=q(bu,bt,E[1],E[2],E[3],E[4],E[5],E[6]);if(bs+bq>S){if(e&&!bx.start){bv=g(bu,bt,E[1],E[2],E[3],E[4],E[5],E[6],S-bs);
R+=["C",bv.start.x,bv.start.y,bv.m.x,bv.m.y,bv.x,bv.y];if(bp){return R}bx.start=R;
R=["M",bv.x,bv.y+"C",bv.n.x,bv.n.y,bv.end.x,bv.end.y,E[5],E[6]][aN]();bs+=bq;bu=+E[5];
bt=+E[6];continue}if(!d&&!e){bv=g(bu,bt,E[1],E[2],E[3],E[4],E[5],E[6],S-bs);return{x:bv.x,y:bv.y,alpha:bv.alpha}
}}bs+=bq;bu=+E[5];bt=+E[6]}R+=E}bx.end=R;bv=d?bs:e?bx:aA.findDotsAtSegment(bu,bt,E[1],E[2],E[3],E[4],E[5],E[6],1);
bv.alpha&&(bv={x:bv.x,y:bv.y,alpha:bv.alpha});return bv}},q=at(function(E,d,bp,S,bv,bu,bt,bs){var R={x:0,y:0},br=0;
for(var bq=0;bq<1.01;bq+=0.01){var e=X(E,d,bp,S,bv,bu,bt,bs,bq);bq&&(br+=a6(a6(R.x-e.x,2)+a6(R.y-e.y,2),0.5));
R=e}return br});var aC=aQ(1),I=aQ(),T=aQ(0,1);aL[bm].getTotalLength=function(){if(this.type!="path"){return
}if(this.node.getTotalLength){return this.node.getTotalLength()}return aC(this.attrs.path)
};aL[bm].getPointAtLength=function(d){if(this.type!="path"){return}return I(this.attrs.path,d)
};aL[bm].getSubpath=function(i,e){if(this.type!="path"){return}if(aj.abs(this.getTotalLength()-e)<0.000001){return T(this.attrs.path,i).end
}var d=T(this.attrs.path,e,1);return i?T(d,i).end:d};aA.easing_formulas={linear:function(d){return d
},"<":function(d){return a6(d,3)},">":function(d){return a6(d-1,3)+1},"<>":function(d){d=d*2;
if(d<1){return a6(d,3)/2}d-=2;return(a6(d,3)+2)/2},backIn:function(e){var d=1.70158;
return e*e*((d+1)*e-d)},backOut:function(e){e=e-1;var d=1.70158;return e*e*((d+1)*e+d)+1
},elastic:function(i){if(i==0||i==1){return i}var e=0.3,d=e/4;return a6(2,-10*i)*aj.sin((i-d)*(2*aj.PI)/e)+1
},bounce:function(E){var e=7.5625,i=2.75,d;if(E<(1/i)){d=e*E*E}else{if(E<(2/i)){E-=(1.5/i);
d=e*E*E+0.75}else{if(E<(2.5/i)){E-=(2.25/i);d=e*E*E+0.9375}else{E-=(2.625/i);d=e*E*E+0.984375
}}}return d}};var Q={length:0},bd=function(){var br=+new Date;for(var bD in Q){if(bD!="length"&&Q[ab](bD)){var bI=Q[bD];
if(bI.stop||bI.el.removed){delete Q[bD];Q[o]--;continue}var bp=br-bI.start,bA=bI.ms,bz=bI.easing,bE=bI.from,bw=bI.diff,E=bI.to,bv=bI.t,by=bI.prev||0,bq=bI.el,R=bI.callback,bx={},d;
if(bp<bA){var S=aA.easing_formulas[bz]?aA.easing_formulas[bz](bp/bA):bp/bA;for(var bB in bE){if(bE[ab](bB)){switch(ah[bB]){case"along":d=S*bA*bw[bB];
E.back&&(d=E.len-d);var bC=I(E[bB],d);bq.translate(bw.sx-bw.x||0,bw.sy-bw.y||0);bw.x=bC.x;
bw.y=bC.y;bq.translate(bC.x-bw.sx,bC.y-bw.sy);E.rot&&bq.rotate(bw.r+bC.alpha,bC.x,bC.y);
break;case ax:d=+bE[bB]+S*bA*bw[bB];break;case"colour":d="rgb("+[H(Y(bE[bB].r+S*bA*bw[bB].r)),H(Y(bE[bB].g+S*bA*bw[bB].g)),H(Y(bE[bB].b+S*bA*bw[bB].b))][aN](",")+")";
break;case"path":d=[];for(var bG=0,bu=bE[bB][o];bG<bu;bG++){d[bG]=[bE[bB][bG][0]];
for(var bF=1,bH=bE[bB][bG][o];bF<bH;bF++){d[bG][bF]=+bE[bB][bG][bF]+S*bA*bw[bB][bG][bF]
}d[bG]=d[bG][aN](az)}d=d[aN](az);break;case"csv":switch(bB){case"translation":var bt=bw[bB][0]*(bp-by),bs=bw[bB][1]*(bp-by);
bv.x+=bt;bv.y+=bs;d=bt+az+bs;break;case"rotation":d=+bE[bB][0]+S*bA*bw[bB][0];bE[bB][1]&&(d+=","+bE[bB][1]+","+bE[bB][2]);
break;case"scale":d=[+bE[bB][0]+S*bA*bw[bB][0],+bE[bB][1]+S*bA*bw[bB][1],(2 in E[bB]?E[bB][2]:aG),(3 in E[bB]?E[bB][3]:aG)][aN](az);
break;case"clip-rect":d=[];bG=4;while(bG--){d[bG]=+bE[bB][bG]+S*bA*bw[bB][bG]}break
}break}bx[bB]=d}}bq.attr(bx);bq._run&&bq._run.call(bq)}else{if(E.along){bC=I(E.along,E.len*!E.back);
bq.translate(bw.sx-(bw.x||0)+bC.x-bw.sx,bw.sy-(bw.y||0)+bC.y-bw.sy);E.rot&&bq.rotate(bw.r+bC.alpha,bC.x,bC.y)
}(bv.x||bv.y)&&bq.translate(-bv.x,-bv.y);E.scale&&(E.scale+=aG);bq.attr(E);delete Q[bD];
Q[o]--;bq.in_animation=null;aA.is(R,"function")&&R.call(bq)}bI.prev=bp}}aA.svg&&bq&&bq.paper&&bq.paper.safari();
Q[o]&&aH.setTimeout(bd)},H=function(d){return h(a3(d,255),0)},x=function(d,i){if(d==null){return{x:this._.tx,y:this._.ty,toString:z}
}this._.tx+=+d;this._.ty+=+i;switch(this.type){case"circle":case"ellipse":this.attr({cx:+d+this.attrs.cx,cy:+i+this.attrs.cy});
break;case"rect":case"image":case"text":this.attr({x:+d+this.attrs.x,y:+i+this.attrs.y});
break;case"path":var e=am(this.attrs.path);e[0][1]+=+d;e[0][2]+=+i;this.attr({path:e});
break}return this};aL[bm].animateWith=function(e,i,d,R,E){Q[e.id]&&(i.start=Q[e.id].start);
return this.animate(i,d,R,E)};aL[bm].animateAlong=aM();aL[bm].animateAlongBack=aM(1);
function aM(d){return function(E,i,e,S){var R={back:d};aA.is(e,"function")?(S=e):(R.rot=e);
E&&E.constructor==aL&&(E=E.attrs.path);E&&(R.along=E);return this.animate(R,i,S)}
}aL[bm].onAnimation=function(d){this._run=d||0;return this};aL[bm].animate=function(bD,bu,bt,E){if(aA.is(bt,"function")||!bt){E=bt||null
}var by={},e={},br={};for(var bv in bD){if(bD[ab](bv)){if(ah[ab](bv)){by[bv]=this.attr(bv);
(by[bv]==null)&&(by[bv]=l[bv]);e[bv]=bD[bv];switch(ah[bv]){case"along":var bB=aC(bD[bv]),bw=I(bD[bv],bB*!!bD.back),R=this.getBBox();
br[bv]=bB/bu;br.tx=R.x;br.ty=R.y;br.sx=bw.x;br.sy=bw.y;e.rot=bD.rot;e.back=bD.back;
e.len=bB;bD.rot&&(br.r=ae(this.rotate())||0);break;case ax:br[bv]=(e[bv]-by[bv])/bu;
break;case"colour":by[bv]=aA.getRGB(by[bv]);var bx=aA.getRGB(e[bv]);br[bv]={r:(bx.r-by[bv].r)/bu,g:(bx.g-by[bv].g)/bu,b:(bx.b-by[bv].b)/bu};
break;case"path":var S=O(by[bv],e[bv]);by[bv]=S[0];var bs=S[1];br[bv]=[];for(var bA=0,bq=by[bv][o];
bA<bq;bA++){br[bv][bA]=[0];for(var bz=1,bC=by[bv][bA][o];bz<bC;bz++){br[bv][bA][bz]=(bs[bA][bz]-by[bv][bA][bz])/bu
}}break;case"csv":var d=(bD[bv]+aG)[F](a),bp=(by[bv]+aG)[F](a);switch(bv){case"translation":by[bv]=[0,0];
br[bv]=[d[0]/bu,d[1]/bu];break;case"rotation":by[bv]=(bp[1]==d[1]&&bp[2]==d[2])?bp:[0,d[1],d[2]];
br[bv]=[(d[0]-by[bv][0])/bu,0,0];break;case"scale":bD[bv]=d;by[bv]=(by[bv]+aG)[F](a);
br[bv]=[(d[0]-by[bv][0])/bu,(d[1]-by[bv][1])/bu,0,0];break;case"clip-rect":by[bv]=(by[bv]+aG)[F](a);
br[bv]=[];bA=4;while(bA--){br[bv][bA]=(d[bA]-by[bv][bA])/bu}break}e[bv]=d}}}}this.stop();
this.in_animation=1;Q[this.id]={start:bD.start||+new Date,ms:bu,easing:bt,from:by,diff:br,to:e,el:this,callback:E,t:{x:0,y:0}};
++Q[o]==1&&bd();return this};aL[bm].stop=function(){Q[this.id]&&Q[o]--;delete Q[this.id];
return this};aL[bm].translate=function(d,e){return this.attr({translation:d+" "+e})
};aL[bm][aP]=function(){return"Rapha\xebl\u2019s object"};aA.ae=Q;var ac=function(d){this.items=[];
this[o]=0;this.type="set";if(d){for(var e=0,E=d[o];e<E;e++){if(d[e]&&(d[e].constructor==aL||d[e].constructor==ac)){this[this.items[o]]=this.items[this.items[o]]=d[e];
this[o]++}}}};ac[bm][f]=function(){var R,d;for(var e=0,E=arguments[o];e<E;e++){R=arguments[e];
if(R&&(R.constructor==aL||R.constructor==ac)){d=this.items[o];this[d]=this.items[d]=R;
this[o]++}}return this};ac[bm].pop=function(){delete this[this[o]--];return this.items.pop()
};for(var D in aL[bm]){if(aL[bm][ab](D)){ac[bm][D]=(function(d){return function(){for(var e=0,E=this.items[o];
e<E;e++){this.items[e][d][bk](this.items[e],arguments)}return this}})(D)}}ac[bm].attr=function(e,bp){if(e&&aA.is(e,aV)&&aA.is(e[0],"object")){for(var d=0,S=e[o];
d<S;d++){this.items[d].attr(e[d])}}else{for(var E=0,R=this.items[o];E<R;E++){this.items[E].attr(e,bp)
}}return this};ac[bm].animate=function(e,d,bp,br){(aA.is(bp,"function")||!bp)&&(br=bp||null);
var S=this.items[o],E=S,bs,bq=this,R;br&&(R=function(){!--S&&br.call(bq)});bp=aA.is(bp,aa)?bp:R;
bs=this.items[--E].animate(e,d,bp,R);while(E--){this.items[E].animateWith(bs,e,d,bp,R)
}return this};ac[bm].insertAfter=function(e){var d=this.items[o];while(d--){this.items[d].insertAfter(e)
}return this};ac[bm].getBBox=function(){var d=[],bp=[],e=[],R=[];for(var E=this.items[o];
E--;){var S=this.items[E].getBBox();d[f](S.x);bp[f](S.y);e[f](S.x+S.width);R[f](S.y+S.height)
}d=a3[bk](0,d);bp=a3[bk](0,bp);return{x:d,y:bp,width:h[bk](0,e)-d,height:h[bk](0,R)-bp}
};ac[bm].clone=function(E){E=new ac;for(var d=0,e=this.items[o];d<e;d++){E[f](this.items[d].clone())
}return E};aA.registerFont=function(e){if(!e.face){return e}this.fonts=this.fonts||{};
var E={w:e.w,face:{},glyphs:{}},i=e.face["font-family"];for(var bp in e.face){if(e.face[ab](bp)){E.face[bp]=e.face[bp]
}}if(this.fonts[i]){this.fonts[i][f](E)}else{this.fonts[i]=[E]}if(!e.svg){E.face["units-per-em"]=N(e.face["units-per-em"],10);
for(var R in e.glyphs){if(e.glyphs[ab](R)){var S=e.glyphs[R];E.glyphs[R]={w:S.w,k:{},d:S.d&&"M"+S.d[bb](/[mlcxtrv]/g,function(bq){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[bq]||"M"
})+"z"};if(S.k){for(var d in S.k){if(S[ab](d)){E.glyphs[R].k[d]=S.k[d]}}}}}}return e
};bh[bm].getFont=function(br,bs,e,R){R=R||"normal";e=e||"normal";bs=+bs||{normal:400,bold:700,lighter:300,bolder:800}[bs]||400;
if(!aA.fonts){return}var S=aA.fonts[br];if(!S){var E=new RegExp("(^|\\s)"+br[bb](/[^\w\d\s+!~.:_-]/g,aG)+"(\\s|$)","i");
for(var d in aA.fonts){if(aA.fonts[ab](d)){if(E.test(d)){S=aA.fonts[d];break}}}}var bp;
if(S){for(var bq=0,bt=S[o];bq<bt;bq++){bp=S[bq];if(bp.face["font-weight"]==bs&&(bp.face["font-style"]==e||!bp.face["font-style"])&&bp.face["font-stretch"]==R){break
}}}return bp};bh[bm].print=function(R,E,d,bq,br,bA){bA=bA||"middle";var bw=this.set(),bz=(d+aG)[F](aG),bx=0,bt=aG,bB;
aA.is(bq,d)&&(bq=this.getFont(bq));if(bq){bB=(br||16)/bq.face["units-per-em"];var e=bq.face.bbox.split(a),bp=+e[0],bs=+e[1]+(bA=="baseline"?e[3]-e[1]+(+bq.face.descent):(e[3]-e[1])/2);
for(var bv=0,S=bz[o];bv<S;bv++){var bu=bv&&bq.glyphs[bz[bv-1]]||{},by=bq.glyphs[bz[bv]];
bx+=bv?(bu.w||bq.w)+(bu.k&&bu.k[bz[bv]]||0):0;by&&by.d&&bw[f](this.path(by.d).attr({fill:"#000",stroke:"none",translation:[bx,0]}))
}bw.scale(bB,bB,bp,bs).translate(R-bp,E-bs)}return bw};var a7=/\{(\d+)\}/g;aA.format=function(e,i){var d=aA.is(i,aV)?[0][bf](i):arguments;
e&&aA.is(e,aa)&&d[o]-1&&(e=e[bb](a7,function(R,E){return d[++E]==null?aG:d[E]}));
return e||aG};aA.ninja=function(){n.was?(Raphael=n.is):delete Raphael;return aA};
aA.el=aL[bm];return aA})();if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("raphael_views/raphael")
};