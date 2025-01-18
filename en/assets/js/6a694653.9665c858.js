"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1355],{2649:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>o,frontMatter:()=>h,metadata:()=>c,toc:()=>l});var t=s(5893),i=s(1151);const h={},r="\u3010\u63a8\u8350\u3011\u57fa\u4e8eLinux\u5e73\u53f0(Ubuntu)",c={id:"DShanMCU-Mio/ESP-IDF/chapter2-3",title:"\u3010\u63a8\u8350\u3011\u57fa\u4e8eLinux\u5e73\u53f0(Ubuntu)",description:"\u5728linux\u5e73\u53f0\u4e0a\u8fdb\u884c\u5f00\u53d1\u662f\u6211\u4eec\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u4e50\u946b\u5b98\u65b9\u4e5f\u662f\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u5f00\u53d1\u73af\u5883\u3002",source:"@site/docs/DShanMCU-Mio/ESP-IDF/chapter2-3.md",sourceDirName:"DShanMCU-Mio/ESP-IDF",slug:"/DShanMCU-Mio/ESP-IDF/chapter2-3",permalink:"/en/DShanMCU-Mio/ESP-IDF/chapter2-3",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/esp32-Doc/tree/main/docs/DShanMCU-Mio/ESP-IDF/chapter2-3.md",tags:[],version:"current",frontMatter:{},sidebar:"boardquickstartSidebar",previous:{title:"\u57fa\u4e8eWindows\u5e73\u53f0\u642d\u5efa\u5f00\u53d1\u73af\u5883",permalink:"/en/DShanMCU-Mio/ESP-IDF/chapter2-2"},next:{title:"\u57fa\u4e8eMacOS\u5e73\u53f0\u642d\u5efa\u5f00\u53d1\u73af\u5883",permalink:"/en/DShanMCU-Mio/ESP-IDF/chapter2-4"}},a={},l=[{value:"\u4e0b\u8f7d\u8d44\u6599",id:"\u4e0b\u8f7d\u8d44\u6599",level:2},{value:"\u89e3\u538b\u3001\u5b89\u88c5",id:"\u89e3\u538b\u5b89\u88c5",level:2},{value:"\u914d\u7f6e\u5e76\u6253\u5f00\u865a\u62df\u673a",id:"\u914d\u7f6e\u5e76\u6253\u5f00\u865a\u62df\u673a",level:2},{value:"\u767b\u5f55Ubuntu",id:"\u767b\u5f55ubuntu",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u63a8\u8350\u57fa\u4e8elinux\u5e73\u53f0ubuntu",children:"\u3010\u63a8\u8350\u3011\u57fa\u4e8eLinux\u5e73\u53f0(Ubuntu)"}),"\n",(0,t.jsx)(n.p,{children:"\u5728linux\u5e73\u53f0\u4e0a\u8fdb\u884c\u5f00\u53d1\u662f\u6211\u4eec\u63a8\u8350\u7684\u65b9\u5f0f\uff0c\u4e50\u946b\u5b98\u65b9\u4e5f\u662f\u63a8\u8350\u4f7f\u7528\u8fd9\u79cd\u5f00\u53d1\u73af\u5883\u3002"}),"\n",(0,t.jsx)(n.p,{children:"DshanMCU-ESP32\u865a\u62df\u673a\u73af\u5883\u914d\u7f6e\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ubuntu 22.04 \u7248\u672c"}),"\n",(0,t.jsxs)(n.li,{children:["\u5b89\u88c5\u4e86 esp-idfv4.4.2 (\u5df2\u4e3a\u6240\u6709\u652f\u6301\u7684\u76ee\u6807\u82af\u7247\u5b89\u88c5\u5de5\u5177) ",(0,t.jsx)(n.code,{children:"./install.sh all"})]}),"\n",(0,t.jsx)(n.li,{children:"\u5b89\u88c5\u9002\u914d\u4e86 vscode+esp-idf \u63d2\u4ef6"}),"\n",(0,t.jsx)(n.li,{children:"\u5b89\u88c5\u9002\u914d\u4e86 platformIO + esp32"}),"\n",(0,t.jsx)(n.li,{children:"\u5b89\u88c5\u9002\u914d\u4e86 Thonny\uff08\u4e3amicropython\u51c6\u5907\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u5b89\u88c5\u9002\u914d\u4e86 Arduino v2.0.1\uff08\u4e3aarduino\u51c6\u5907\uff09"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e0b\u8f7d\u8d44\u6599",children:"\u4e0b\u8f7d\u8d44\u6599"}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136\u5728linux\u5e73\u53f0\u4e0a\u8fdb\u884c\u5b66\u4e60\u5f00\u53d1\u7684\u95e8\u69db\u6bd4 windows \u9ad8\uff0c\u4f46\u662f\u6309\u7167\u6211\u4eec\u7684\u6559\u7a0b\u5b66\u4e60\u4f1a\u5e26\u4f60\u9010\u6b65\u719f\u6089\u6df1\u5165\u4e86\u89e3linux\u7684\u5404\u79cd\u7279\u6027\u548c\u73a9\u6cd5\uff0c\u6240\u4ee5\u8bf7\u5148\u5ffd\u7565\u90a3\u5ea7\u6a2a\u5728\u4f60\u9762\u524d\u65e0\u5f62\u5927\u5c71\u5427\uff01"}),"\n",(0,t.jsx)(n.p,{children:"linux\u5e73\u53f0\u7684\u5f00\u53d1\u73af\u5883\u642d\u5efa\u975e\u5e38\u7b80\u5355\uff0c\u56e0\u4e3a\u6211\u4eec\u5df2\u7ecf\u5236\u4f5c\u597d\u4e86\u4e00\u4e2a\u865a\u62df\u673a\u955c\u50cf\uff0c\u89e3\u538b\u5c31\u80fd\u76f4\u63a5\u7528\uff01"}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5\u6211\u4eec\u7684\u7b2c\u4e00\u6b65\u662f\u975e\u5e38\u7b80\u5355\u7684\uff0c\u9996\u5148\uff0c\u6211\u4eec\u5148\u4e0b\u8f7d\u597d\u6211\u4eec\u7684\u865a\u62df\u673a\u955c\u50cf\u8d44\u6599\uff0c\u4e0b\u9762\u8bf7\u9009\u62e9\u4f60\u559c\u6b22\u7684\u4e0b\u8f7d\u65b9\u5f0f\u8fdb\u884c\u4e0b\u8f7d\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u4e0b\u8f7d\u5e73\u53f0"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u4e0b\u8f7d\u94fe\u63a5"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u63d0\u53d6\u7801"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"https://pan.baidu.com/",children:"\u767e\u5ea6\u4e91\u76d8"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"https://pan.baidu.com/s/1S1Toy5RAakTHvYtKZuvcqA?pwd=root",children:"https://pan.baidu.com/s/1S1Toy5RAakTHvYtKZuvcqA?pwd=root"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"root"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"https://www.aliyundrive.com/",children:"\u963f\u91cc\u4e91\u76d8"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"https://www.aliyundrive.com/s/qdPb9cL364h",children:"https://www.aliyundrive.com/s/qdPb9cL364h"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"96jp"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["100ask_esp32_ubuntu_22.04_VM \u89e3\u538b\u540e\u5360\u636e\u7ea6 ",(0,t.jsx)(n.strong,{children:"26GB"})," \u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u89e3\u538b\u4e4b\u524d\u8bf7\u786e\u4fdd\u78c1\u76d8\u5bb9\u91cf\u5145\u8db3\uff01"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u538b\u5b89\u88c5",children:"\u89e3\u538b\u3001\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"\u8010\u5fc3\u7b49\u5f85\u4e0b\u8f7d\u5b8c\u6210\uff0c\u4e0b\u8f7d\u5b8c\u6210\u540e\u8fdb\u5165\u8d44\u6599\u76ee\u5f55\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u7535\u8111\u6ca1\u6709\u89e3\u538b\u7f29\u5de5\u5177\uff0c\u90a3\u4e48\u9700\u8981\u89e3\u538b\u5e76\u5b89\u88c5 ",(0,t.jsx)(n.strong,{children:"tools/BANDIZIP-SETUP-STD-X64.zip"})," \u6216\u8005\u524d\u5f80 bandizip \u7684\u5b98\u7f51\u83b7\u53d6\u66f4\u65b0\u7248\u672c\uff1a",(0,t.jsx)(n.a,{href:"https://www.bandisoft.com",children:"https://www.bandisoft.com"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u7535\u8111\u6ca1\u6709\u5b89\u88c5 VMware-workstation \u90a3\u4e48\u4e5f\u9700\u8981\u89e3\u538b\u5e76\u5b89\u88c5 ",(0,t.jsx)(n.strong,{children:"tools/VMware-workstation-full-16.2.3-19376536.zip"}),"\n\u6216\u8005\u524d\u5f80 VMware \u7684 ",(0,t.jsx)(n.a,{href:"https://www.vmware.com",children:"\u5b98\u7f51"})," \u83b7\u53d6\u66f4\u65b0\u7248\u672c\uff1a ",(0,t.jsx)(n.a,{href:"https://www.vmware.com",children:"https://www.vmware.com"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u5c06 100ask_esp32_ubuntu_22.04_VM \u76ee\u5f55\u4e2d\u7684\u6240\u6709\u538b\u7f29\u5305\u5168\u90e8\u4e0b\u8f7d\u597d\uff0c\u4e00\u4e2a\u4e5f\u4e0d\u80fd\u5c11\uff0c\u68c0\u67e5\u662f\u5426\u548c\u4e0b\u56fe\u4e00\u6837\uff01"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_037.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_037"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\uff0c\u9009\u4e2d\u540d\u4e3a 100ask_esp32_ubuntu_22.04_VM.zip \u7684\u538b\u7f29\u5305\uff0c\u53f3\u952e\u8fdb\u884c\u89e3\u538b\uff0c\u53ef\u4ee5\u9009\u62e9\u89e3\u538b\u5230\u5f53\u524d\u76ee\u5f55\uff0c\u4f46\u662f\u5efa\u8bae\u5c06\u5176\u89e3\u538b\u5230\u53ef\u4ee5\u4e13\u95e8\u5b58\u653e\u865a\u62df\u673a\u7684\u76ee\u5f55\uff0c\u56e0\u4e3a\u540e\u7eed\u8981\u7ecf\u5e38\u4f7f\u7528\u5e76\u4e14\u89e3\u538b\u51fa\u6765\u4e4b\u540e\u7ea6\u5360 31GB \u7684\u78c1\u76d8\u7a7a\u95f4\uff01"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_038.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_038"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u89e3\u538b\u65f6\u95f4\u5927\u6982\u9700\u8981 15~30 \u5206\u949f\u53ef\u80fd\u9700\u8981\u66f4\u957f\u7684\u65f6\u95f4\uff0c\u4e0d\u540c\u7684\u7535\u8111\u6027\u80fd\u7ed3\u679c\u4f1a\u4e0d\u4e00\u6837\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\u89e3\u538b\u5b8c\u6210\u4e4b\u540e\uff0c\u8fdb\u5165\u5230\u89e3\u538b\u51fa\u6765\u7684 ",(0,t.jsx)(n.code,{children:"100ask_esp32_ubuntu_22.04_VM"})," \u76ee\u5f55\uff0c\u5982\u679c\u524d\u9762\u5b89\u88c5\u4e86 ",(0,t.jsx)(n.code,{children:"VMware-workstation"})," \u90a3\u4e48\u5c06\u80fd\u770b\u5230 ",(0,t.jsx)(n.code,{children:"100ask_esp32_ubuntu_22.04_VM.vmx"})," \u662f\u80fd\u901a\u8fc7\u4f60\u7684\u7535\u8111\u6253\u5f00\u7684\uff0c\u6211\u4eec\u53cc\u51fb\u6253\u5f00\u5b83\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_039.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_039"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u89e3\u538b\u5b8c\u6210\u4e4b\u540e\uff0c\u5e76\u4e14\u786e\u8ba4 100ask_esp32_ubuntu_22.04_VM \u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\uff0c\u90a3\u4e48\u6b64\u65f6\u53ef\u4ee5\u5c06\u4e4b\u524d\u7684\u538b\u7f29\u5305\u5220\u9664\u4ee5\u8282\u7701\u78c1\u76d8\u7a7a\u95f4\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"\u4e4b\u540e\u6211\u4eec\u5c06\u4f1a\u8fdb\u5165\u5230 VMware-workstation \u7684\u7a0b\u5e8f\u754c\u9762\uff0c\u5e76\u4e14\u5c55\u793a\u6211\u4eec\u521a\u521a\u9009\u4e2d\u6253\u5f00\u7684\u865a\u62df\u673a\uff0c\u754c\u9762\u662f\u8fd9\u6837\u7684\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_040.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_040"})}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e\u5e76\u6253\u5f00\u865a\u62df\u673a",children:"\u914d\u7f6e\u5e76\u6253\u5f00\u865a\u62df\u673a"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u5148\u4e0d\u8981\u6025\u7740\u6253\u5f00\u865a\u62df\u673a\uff0c\u5148\u914d\u7f6e\u4e00\u4e0b\u6211\u4eec\u7684\u865a\u62df\u673a\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_041.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_041"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\u6211\u4eec\u70b9\u51fb ",(0,t.jsx)(n.code,{children:"\u5f00\u542f\u865a\u62df\u673a"})," \u6253\u5f00\u6211\u4eec\u7684\u865a\u62df\u673a\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_042.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_042"})}),"\n",(0,t.jsx)(n.h2,{id:"\u767b\u5f55ubuntu",children:"\u767b\u5f55Ubuntu"}),"\n",(0,t.jsxs)(n.p,{children:["\u7b49\u5f85\u767b\u5f55\u754c\u9762\u52a0\u8f7d\u51fa\u6765\uff0c\u70b9\u51fb\u7528\u6237 ",(0,t.jsx)(n.code,{children:"Ubuntu"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_043.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_043"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\u8f93\u5165\u767b\u5f55\u5bc6\u7801 ",(0,t.jsx)(n.code,{children:"123456"})," \u6309\u56de\u8f66\u5373\u53ef\u767b\u5f55\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_044.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_044"})}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\u6211\u4eec\u4f1a\u8fdb\u5165\u5230 ubuntu \u7684\u684c\u9762\uff0c\u4ee5\u540e\u4f7f\u7528\u8d77\u6765\u4f60\u4f1a\u53d1\u73b0\u5f88\u591a\u4ea4\u4e92\u64cd\u4f5c\u5176\u5b9e\u548c\u6211\u4eec\u719f\u6089\u7684 windows \u662f\u5dee\u4e0d\u591a\u7684\uff01"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter2/DShanMCU-Mio_esp-idf_chapter2-3_images_045.jpg",alt:"DShanMCU-Mio_esp-idf_chapter2-3_images_045"})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(7294);const i={},h=t.createContext(i);function r(e){const n=t.useContext(h);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(h.Provider,{value:n},e.children)}}}]);