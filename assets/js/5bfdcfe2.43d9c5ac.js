"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1833],{9721:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>c});var i=s(5893),r=s(1151);const d={},h="ESP32-S3\u5f00\u53d1\u5e73\u53f0",t={id:"DShanMCU-Mio/Arduino/chapter1-2",title:"ESP32-S3\u5f00\u53d1\u5e73\u53f0",description:"\u4e3a\u4e86\u8ba9\u5e7f\u5927\u7535\u5b50\u7231\u597d\u8005\u66f4\u597d\u66f4\u65b9\u4fbf\u5730\u5b66\u4e60 EPS32 \u5f00\u53d1\uff0c\u767e\u95ee\u7f51 DShan MCU \u56e2\u961f\u6253\u9020\u4e86\u4e00\u7cfb\u5217\u9ad8\u6027\u4ef7\u6bd4\u5730\u5b66\u4e60\u5957\u4ef6\u548c\u5468\u8fb9\u6a21\u5757\uff0c\u652f\u6301\u5728Arduino\u3001ESP-IDF\u3001MicroPython\u5e73\u53f0\u4e0a\u5b66\u4e60\u548c\u5f00\u53d1ESP32\u3002\u6211\u4eec\u7684\u5f00\u53d1\u5e73\u53f0\u91c7\u7528\u6700\u5c0f\u7248+\u5e95\u677f\u7684\u8bbe\u8ba1\u5f62\u5f0f\uff0c\u4fdd\u7559\u4e86\u5b98\u65b9\u539f\u6c41\u539f\u5473\u7684\u517c\u5bb9\u6027\u7684\u540c\u65f6\u53ef\u4ee5\u8ba9\u5b66\u4e60\u3001\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u597d\u5730\u52a8\u624b\u64cd\u4f5c\u786c\u4ef6\u3001\u8fdb\u884c\u66f4\u591a\u5730\u62d3\u5c55\u6027\u5b9e\u9a8c\uff1b\u751a\u81f3\u878d\u5408\u5230\u81ea\u5df1\u7684\u9879\u76ee\u4e2d\uff0c\u62ff\u53bb\u53c2\u52a0\u6bd4\u8d5b\u7b49\u7528\u9014\u3002",source:"@site/docs/DShanMCU-Mio/Arduino/chapter1-2.md",sourceDirName:"DShanMCU-Mio/Arduino",slug:"/DShanMCU-Mio/Arduino/chapter1-2",permalink:"/DShanMCU-Mio/Arduino/chapter1-2",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/esp32-Doc/tree/main/docs/DShanMCU-Mio/Arduino/chapter1-2.md",tags:[],version:"current",frontMatter:{},sidebar:"boardquickstartSidebar",previous:{title:"ESP32\u7b80\u4ecb",permalink:"/DShanMCU-Mio/Arduino/chapter1-1"},next:{title:"Arduino\u7b80\u4ecb",permalink:"/DShanMCU-Mio/Arduino/chapter1-3"}},l={},c=[{value:"DShanMCU-Mio(\u6faa)\u5f00\u53d1\u677f",id:"dshanmcu-mio\u6faa\u5f00\u53d1\u677f",level:2},{value:"DShanMCU-Mio(\u6faa)\u529f\u80fd\u53c2\u6570\u8868",id:"dshanmcu-mio\u6faa\u529f\u80fd\u53c2\u6570\u8868",level:2},{value:"DShanMCU-Mio(\u6faa)\u5f00\u53d1\u5957\u4ef6",id:"dshanmcu-mio\u6faa\u5f00\u53d1\u5957\u4ef6",level:2},{value:"100ASK_ESP32-S3\u57fa\u7840\u5e95\u677f",id:"100ask_esp32-s3\u57fa\u7840\u5e95\u677f",level:2},{value:"\u914d\u5957\u6a21\u5757",id:"\u914d\u5957\u6a21\u5757",level:2},{value:"\u62d3\u5c55\u914d\u4ef6",id:"\u62d3\u5c55\u914d\u4ef6",level:2}];function x(n){const e={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"esp32-s3\u5f00\u53d1\u5e73\u53f0",children:"ESP32-S3\u5f00\u53d1\u5e73\u53f0"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u8ba9\u5e7f\u5927\u7535\u5b50\u7231\u597d\u8005\u66f4\u597d\u66f4\u65b9\u4fbf\u5730\u5b66\u4e60 EPS32 \u5f00\u53d1\uff0c\u767e\u95ee\u7f51 DShan MCU \u56e2\u961f\u6253\u9020\u4e86\u4e00\u7cfb\u5217\u9ad8\u6027\u4ef7\u6bd4\u5730\u5b66\u4e60\u5957\u4ef6\u548c\u5468\u8fb9\u6a21\u5757\uff0c\u652f\u6301\u5728Arduino\u3001ESP-IDF\u3001MicroPython\u5e73\u53f0\u4e0a\u5b66\u4e60\u548c\u5f00\u53d1ESP32\u3002\u6211\u4eec\u7684\u5f00\u53d1\u5e73\u53f0\u91c7\u7528\u6700\u5c0f\u7248+\u5e95\u677f\u7684\u8bbe\u8ba1\u5f62\u5f0f\uff0c\u4fdd\u7559\u4e86\u5b98\u65b9\u539f\u6c41\u539f\u5473\u7684\u517c\u5bb9\u6027\u7684\u540c\u65f6\u53ef\u4ee5\u8ba9\u5b66\u4e60\u3001\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u597d\u5730\u52a8\u624b\u64cd\u4f5c\u786c\u4ef6\u3001\u8fdb\u884c\u66f4\u591a\u5730\u62d3\u5c55\u6027\u5b9e\u9a8c\uff1b\u751a\u81f3\u878d\u5408\u5230\u81ea\u5df1\u7684\u9879\u76ee\u4e2d\uff0c\u62ff\u53bb\u53c2\u52a0\u6bd4\u8d5b\u7b49\u7528\u9014\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u767e\u95ee\u7f51 DShan MCU \u7cfb\u5217\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u5386\u7a0b\u3001\u6587\u6863\u548c\u6559\u7a0b\uff0c\u57fa\u4e8e\u6211\u4eec\u7684\u5e73\u53f0\u80fd\u786e\u4fdd\u6240\u6709\u7684\u4ee3\u7801\u7a0b\u5e8f\u5f00\u7bb1\u5373\u7528\uff0c\u751a\u81f3\u53ef\u4ee5\u5c06\u6211\u4eec\u6587\u6863\u4e2d\u7684\u793a\u4f8b\u548c\u5b9e\u9a8c\u5e94\u7528\u5728\u81ea\u5df1\u7684\u4ea7\u54c1\u7814\u53d1\u3001\u9879\u76ee\u5f00\u53d1\u6216\u8005\u6bd4\u8d5b\u4e2d\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u767e\u95ee\u7f51 DShan MCU \u7cfb\u5217\u8d44\u6e90\u3001\u8d44\u6599\u4f1a\u4fdd\u6301\u6d3b\u8dc3\u66f4\u65b0\u72b6\u6001\uff0c\u5982\u679c\u4f60\u5728\u5b66\u4e60\u65f6\u9047\u5230\u4efb\u4f55\u76f8\u5173\u7684\u95ee\u9898\u53ef\u4ee5\u5728\u6211\u4eec\u7684 ",(0,i.jsx)(e.a,{href:"https://forums.100ask.net/",children:"\u4ea4\u6d41\u793e\u533a"})," \u63d0\u95ee\uff0c\u4f1a\u6709\u4e13\u4e1a\u7684\u8001\u5e08\u6216\u8005\u70ed\u5fc3\u7684\u540c\u5b66\u4e00\u8d77\u5e2e\u4f60\u89e3\u51b3\u95ee\u9898\uff01"]}),"\n",(0,i.jsx)(e.h2,{id:"dshanmcu-mio\u6faa\u5f00\u53d1\u677f",children:"DShanMCU-Mio(\u6faa)\u5f00\u53d1\u677f"}),"\n",(0,i.jsx)(e.p,{children:"DShanMCU-Mio(\u6faa) \u5f00\u53d1\u677f\u7531\u767e\u95ee\u7f51 DShan MCU \u56e2\u961f\u8bbe\u8ba1\u7814\u53d1\uff0c\u6709\u4ee5\u4e0b\u4e3b\u8981\u7279\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6709\u6587\u6863\u6559\u7a0b\u5728\uff1aArduino \u5e73\u53f0\u5b66\u4e60\u3001\u5f00\u53d1"}),"\n",(0,i.jsx)(e.li,{children:"\u6709\u6587\u6863\u6559\u7a0b\u5728\uff1aESP-IDF \u5e73\u53f0\u5b66\u4e60\u3001\u5f00\u53d1"}),"\n",(0,i.jsx)(e.li,{children:"\u6709\u6587\u6863\u6559\u7a0b\u5728\uff1aMicroPython \u5e73\u53f0\u5b66\u4e60\u3001\u5f00\u53d1"}),"\n",(0,i.jsx)(e.li,{children:"\u5b58\u50a8\u8d44\u6e90\u62c9\u6ee1\uff1a\u9ad8\u8fbe\u652f\u6301 8MB \u7684 PSRAM \u548c 128MB \u7684 FLASH"}),"\n",(0,i.jsx)(e.li,{children:"\u81ea\u52a8\u4e0b\u8f7d\u7535\u8def"}),"\n",(0,i.jsx)(e.li,{children:"USB OTG \u63a5\u53e3"}),"\n",(0,i.jsx)(e.li,{children:"\u5168IO\u5f15\u51fa"}),"\n",(0,i.jsx)(e.li,{children:"\u6309\u952e\u548cLED\u6392\u5217\u6574\u9f50\uff0c\u4e1d\u5370\u6e05\u6670\u67e5\u770b\u65b9\u4fbf"}),"\n",(0,i.jsx)(e.li,{children:"\u53ef\u7528\u6765\u5b66\u4e60AI (MicroPython)"}),"\n",(0,i.jsx)(e.li,{children:"\u652f\u6301\u767e\u95ee\u7f51\u58a8\u6c34\u5c4f\u548c\u5f69\u5c4f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter1/DShanMCU-Mio_Arduino_chapter1-2_images_001.jpg",alt:"DShanMCU-Mio(\u6faa)"})}),"\n",(0,i.jsx)(e.p,{children:"DShanMCU-Mio(\u6faa)\u5f15\u811a\u56fe\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/Arduino/chapter1/DShanMCU-Mio_Arduino_chapter1-2_images_002.jpg",alt:"DShanMCU-Mio(\u6faa)\u5f15\u811a\u56fe"})}),"\n",(0,i.jsxs)(e.p,{children:["\u70b9\u51fb\u6b64\u8fde\u63a5\u83b7\u53d6 DShanMCU-Mio(\u6faa)\u5f15\u811a\u56fe \u7684\u8d85\u6e05\u539f\u56fe\uff1a",(0,i.jsx)(e.a,{href:"https://forums.100ask.net/uploads/short-url/3O4SU8IJlfLQBi0vGaKCXECPAtB.zip",children:"https://forums.100ask.net/uploads/short-url/3O4SU8IJlfLQBi0vGaKCXECPAtB.zip"})]}),"\n",(0,i.jsx)(e.h2,{id:"dshanmcu-mio\u6faa\u529f\u80fd\u53c2\u6570\u8868",children:"DShanMCU-Mio(\u6faa)\u529f\u80fd\u53c2\u6570\u8868"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u529f\u80fd"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u4e3b\u63a7"}),(0,i.jsx)(e.td,{children:"ESP32-S3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u5185\u5b58"}),(0,i.jsx)(e.td,{children:"512KBytes + 2M-8MBytes PSARM(\u9009\u914d) \u6807\u914d 512KB+8MB"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"FLASH"}),(0,i.jsx)(e.td,{children:"8M-128MBytes (\u9009\u914d) \u6807\u914d 16MB"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"KEY"}),(0,i.jsx)(e.td,{children:"\u8fde\u63a5\u5230\u5f15\u811a0"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"I2C"}),(0,i.jsx)(e.td,{children:"\u652f\u6301\u4efb\u610fIO"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"UART"}),(0,i.jsx)(e.td,{children:"\u652f\u6301\u4efb\u610fIO"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"PWM"}),(0,i.jsx)(e.td,{children:"\u652f\u6301\u4efb\u610fIO"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u53ccUSB"}),(0,i.jsxs)(e.td,{children:["1. USAR: \u677f\u8f7d USB\u8f6cTTL ",(0,i.jsx)("br",{})," 2.USB\uff1aUSB OTG"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"5V"}),(0,i.jsx)(e.td,{children:"USB\u4f9b\u7535\u8f93\u5165\u3001\u5bf9\u5916\u4f9b\u7535\u8f93\u51fa"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3.3V"}),(0,i.jsx)(e.td,{children:"3.3V\u8f93\u51fa\uff0c\u6700\u5927\u7535\u6d41 600mA"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u58a8\u6c34\u5c4f"}),(0,i.jsx)(e.td,{children:"\u652f\u6301\u5c40\u5237\u3001\u5feb\u5237\uff0c\u63d0\u4f9bLVGL\u5f00\u53d1\u6559\u7a0b\u3001\u793a\u4f8b"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"SPI\u5f69\u5c4f"}),(0,i.jsx)(e.td,{children:"SPI\u63a5\u53e3\uff0c\u63d0\u4f9bLVGL\u5f00\u53d1\u6559\u7a0b\u3001\u793a\u4f8b"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"dshanmcu-mio\u6faa\u5f00\u53d1\u5957\u4ef6",children:"DShanMCU-Mio(\u6faa)\u5f00\u53d1\u5957\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"\u3010\u56fe\u3011 DShanMCU-Mio(\u6faa)\u5f15\u811a\u56fe\uff08\u58a8\u6c34\u5c4f\uff09"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u914d\u7f6e"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u6838\u5fc3\u677f"}),(0,i.jsx)(e.td,{children:"DShanMCU-Mio(\u6faa)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u5e95\u677f"}),(0,i.jsx)(e.td,{children:"100ASK_ESP32-S3_Base-Board"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u663e\u793a\u5c4f"}),(0,i.jsx)(e.td,{children:"3.52\u5bf8SPI\u63a5\u53e3\u9ed1\u767d\u4e24\u8272\u58a8\u6c34\u5c4f"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"\u3010\u56fe\u3011 DShanMCU-Mio(\u6faa)\u5f15\u811a\u56fe\uff08SPI\u5f69\u5c4f\uff09"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u914d\u7f6e"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u6838\u5fc3\u677f"}),(0,i.jsx)(e.td,{children:"DShanMCU-Mio(\u6faa)"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u5e95\u677f"}),(0,i.jsx)(e.td,{children:"100ASK_ESP32-S3_Base-Board"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u663e\u793a\u5c4f"}),(0,i.jsx)(e.td,{children:"3.5\u5bf8SPI\u63a5\u53e3TFT\u5f69\u5c4f"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"100ask_esp32-s3\u57fa\u7840\u5e95\u677f",children:"100ASK_ESP32-S3\u57fa\u7840\u5e95\u677f"}),"\n",(0,i.jsx)(e.p,{children:"100ASK_ESP32-S3_Base-Board \u662f\u767e\u95ee\u7f51 DShan MCU \u56e2\u961f\u9488\u5bf9 DShanMCU-Mio(\u6faa) \u5728\u591a\u5f00\u53d1\u5e73\u53f0\u4e0a\u5b66\u4e60\u5f00\u53d1\u800c\u91cf\u8eab\u5b9a\u5236\u7684\u5e95\u677f\u3002\u53ef\u4ee5\u7528\u4e8e\u5728 Arduino\u3001ESP-IDF\u3001MicroPython\u5e73\u53f0\u4e0a\u8fdb\u884c\u5b66\u4e60\u3001\u5f00\u53d1\uff0c\u901a\u8fc7100ASK_ESP32-S3_Base-Board\u80fd\u8ba9\u6211\u4eec\u80fd\u5b66\u4e60\u66f4\u591a\u7684\u5185\u5bb9\u505a\u66f4\u591a\u5730\u5b9e\u9a8c\uff1b\u540c\u65f6\u5f3a\u5927\u7684\u62d3\u5c55\u6027\uff0c\u80fd\u8ba9\u4f7f\u7528\u8005\u80fd\u505a\u66f4\u591a\u7684DIY\u3002\u4e0b\u9762\u662f100ASK_ESP32-S3_Base-Board\u7684\u529f\u80fd\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u3010\u56fe\u3011 100ASK_ESP32-S3_Base-Board\u529f\u80fd\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u63a5\u53e3"}),(0,i.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2.54mm\u6392\u9488 \u5f15\u51fa"}),(0,i.jsx)(e.td,{children:"\u53ef\u7f16\u7a0b\u7684GPIO\u5f15\u811a"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u58a8\u6c34\u5c4f\u63a5\u53e3"}),(0,i.jsx)(e.td,{children:"\u63a5\u58a8\u6c34\u5c4f"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"TFT\u5c4f\u63a5\u53e3"}),(0,i.jsx)(e.td,{children:"\u63a5TFT\u5c4f\u5e55"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"TFT\u5c4f\u89e6\u6478\u63a5\u53e3"}),(0,i.jsx)(e.td,{children:"\u63a5TFT\u5c4f\u5e55\u89e6\u6478"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u5957\u6a21\u5757",children:"\u914d\u5957\u6a21\u5757"}),"\n",(0,i.jsx)(e.p,{children:"TODO"}),"\n",(0,i.jsx)(e.h2,{id:"\u62d3\u5c55\u914d\u4ef6",children:"\u62d3\u5c55\u914d\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"3.52\u5bf8SPI\u63a5\u53e3\u65e0\u89e6\u6478\u9ed1\u767d\u4e24\u8272\u652f\u6301\u5feb\u5237\u5c40\u5237\u58a8\u6c34\u5c4f"}),"\n",(0,i.jsx)(e.p,{children:"3.5\u5bf8SPI\u63a5\u53e3\u7535\u963b\u89e6\u6478\u5f69\u5c4f"})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>t,a:()=>h});var i=s(7294);const r={},d=i.createContext(r);function h(n){const e=i.useContext(d);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:h(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);