"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6035],{2289:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=s(5893),r=s(1151);const c={},t="\u70b9\u4eaeLED(BLINK)",l={id:"DShanMCU-Mio/ESP-IDF/chapter4-2",title:"\u70b9\u4eaeLED(BLINK)",description:"\u4ece\u8fd9\u91cc\u5f00\u59cb\u76f4\u5230\u540e\u9762\u7684\u793a\u4f8b\u8bb2\u89e3\uff0c\u4e0d\u518d\u91cd\u590d\u6f14\u793a\u600e\u4e48\u5728\u5404\u4e2a\u5e73\u53f0\u4e0a\u6253\u5f00\u6211\u4eec\u7684\u9879\u76ee\u5de5\u7a0b\u8fdb\u884c\u64cd\u4f5c\u3002\u5982\u679c\u4f60\u8fd8\u662f\u4e0d\u592a\u6e05\u695a\u6b65\u9aa4\uff0c\u8bf7\u56de\u5934\u67e5\u770b\u524d\u9762\u4e24\u7ae0\u7684\u5185\u5bb9\u518d\u7ee7\u7eed\u9605\u8bfb\u3002",source:"@site/docs/DShanMCU-Mio/ESP-IDF/chapter4-2.md",sourceDirName:"DShanMCU-Mio/ESP-IDF",slug:"/DShanMCU-Mio/ESP-IDF/chapter4-2",permalink:"/en/DShanMCU-Mio/ESP-IDF/chapter4-2",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/esp32-Doc/tree/main/docs/DShanMCU-Mio/ESP-IDF/chapter4-2.md",tags:[],version:"current",frontMatter:{},sidebar:"boardquickstartSidebar",previous:{title:"\u8fd0\u884c\u7b2c\u4e00\u4e2a\u7a0b\u5e8f(Hello world!)",permalink:"/en/DShanMCU-Mio/ESP-IDF/chapter4-1"},next:{title:"FC\u6e38\u620f\u673a\u624b\u67c4",permalink:"/en/DShanMCU-Mio/ESP-IDF/chapter5-1"}},o={},d=[{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:2},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:2},{value:"\u6253\u5f00\u9879\u76ee\u5de5\u7a0b",id:"\u6253\u5f00\u9879\u76ee\u5de5\u7a0b",level:2},{value:"\u8fd0\u884c\u73b0\u8c61",id:"\u8fd0\u884c\u73b0\u8c61",level:2},{value:"\u5173\u952e\u4ee3\u7801\u89e3\u8bfb",id:"\u5173\u952e\u4ee3\u7801\u89e3\u8bfb",level:2},{value:"\u4fee\u6539\u9ed8\u8ba4\u4f7f\u7528\u7684LED\u5f15\u811a",id:"\u4fee\u6539\u9ed8\u8ba4\u4f7f\u7528\u7684led\u5f15\u811a",level:2}];function h(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u70b9\u4eaeledblink",children:"\u70b9\u4eaeLED(BLINK)"}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u8fd9\u91cc\u5f00\u59cb\u76f4\u5230\u540e\u9762\u7684\u793a\u4f8b\u8bb2\u89e3\uff0c\u4e0d\u518d\u91cd\u590d\u6f14\u793a\u600e\u4e48\u5728\u5404\u4e2a\u5e73\u53f0\u4e0a\u6253\u5f00\u6211\u4eec\u7684\u9879\u76ee\u5de5\u7a0b\u8fdb\u884c\u64cd\u4f5c\u3002\u5982\u679c\u4f60\u8fd8\u662f\u4e0d\u592a\u6e05\u695a\u6b65\u9aa4\uff0c\u8bf7\u56de\u5934\u67e5\u770b\u524d\u9762\u4e24\u7ae0\u7684\u5185\u5bb9\u518d\u7ee7\u7eed\u9605\u8bfb\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u786c\u4ef6\u51c6\u5907",children:"\u786c\u4ef6\u51c6\u5907"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53d1\u5149\u4e8c\u6781\u7ba1(LED\u706f)  * 1"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"ESP32-S3\u6709 45 \u4e2a\u53ef\u7f16\u7a0b GPIO \u7ba1\u811a\uff0c\u9664\u4e86\u4e00\u4e9b\u5177\u6709\u7279\u6b8a\u7528\u9014\u7684GPIO\u5916\uff0c\u5927\u90e8\u5206GPIO\u90fd\u53ef\u4ee5\u590d\u7528\u3002\nDShanMCU-Mio\u6ca1\u6709\u677f\u8f7dLED\u706f\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5c06LED\u706f\u7684\u6b63\u6781(\u8f83\u957f\u7684\u90a3\u6839\u5f15\u811a)\u63a5\u5728\u677f\u5b50\u4e0a\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u662f GPIO48 \uff0c\u8d1f\u6781(\u8f83\u77ed\u7684\u90a3\u6839\u5f15\u811a)\u63a5\u5728\u677f\u5b50\u7684 GND \u5f15\u811a\u4e0a\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8f6f\u4ef6\u51c6\u5907",children:"\u8f6f\u4ef6\u51c6\u5907"}),"\n",(0,i.jsxs)(e.p,{children:["\u672c\u6b21\u5b9e\u9a8c\u7684\u9879\u76ee\u4ee3\u7801\u4f4d\u4e8e\uff1a ",(0,i.jsx)(e.code,{children:"DShanMCU-Mio_ESP-IDF_Data/02_examples/esp-idf-learn/01_base/02_blink"})," \u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff0c\u4e0d\u8981\u5c06\u9879\u76ee\u4ee3\u7801\u79fb\u52a8\u5230\u5176\u4ed6\u5730\u65b9\uff0c\u5426\u5219\u540e\u7eed\u53ef\u80fd\u4f1a\u51fa\u73b0\u7f16\u8bd1\u62a5\u9519\u7684\u95ee\u9898\u3002\u540e\u7eed\u5b9e\u9a8c\u4e5f\u8bf7\u4fdd\u6301\u539f\u6709\u7684\u76ee\u5f55\u7ed3\u6784\u8fdb\u884c\u5b66\u4e60\uff0c\u4e0d\u8981\u79fb\u52a8\u9879\u76ee\u4ee3\u7801\u7684\u4f4d\u7f6e\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6253\u5f00\u9879\u76ee\u5de5\u7a0b",children:"\u6253\u5f00\u9879\u76ee\u5de5\u7a0b"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u5bf9ESP-IDF\u4e0d\u592a\u719f\u6089\u8bf7\u6309\u7167\u4e0a\u4e00\u7ae0\u8282\u6240\u6f14\u793a\u7684\u64cd\u4f5c\u6b65\u9aa4\uff0c\u901a\u8fc7 vscode \u6253\u5f00\u8fdb\u884c\u7f16\u8f91\u3001\u7f16\u8bd1\u3001\u70e7\u5199\u7b49\u64cd\u4f5c\u3002\u6709\u57fa\u7840\u7684\u901a\u8fc7\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u7ec8\u7aef\u63a7\u5236\u53f0\u6253\u5f00\u8fdb\u884c\u64cd\u4f5c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd0\u884c\u73b0\u8c61",children:"\u8fd0\u884c\u73b0\u8c61"}),"\n",(0,i.jsx)(e.p,{children:"\u76f4\u63a5\u70b9\u51fb\u7f16\u8bd1\u5373\u53ef\uff0c\u70e7\u5199\u5230\u5f00\u53d1\u677f\u4e4b\u540e\u3002\u6253\u5f00 vscode \u4e2d\u7684\u4e32\u53e3\u63a7\u5236\u53f0\uff08\u6216\u4f7f\u7528\u5176\u4ed6\u4e32\u53e3\u5de5\u5177\uff1a\u6ce2\u7279\u7387 115200\uff09\u5373\u53ef\u770b\u5230\u6709\u8f93\u51fa\u4fe1\u606f\u3002\u5982\u679c\u5df2\u7ecf\u63a5\u4e0aLED\u706f\uff0c\u90a3\u4e48\u80fd\u770b\u5230 LED \u706f\u5728\u95ea\u70c1\uff0c\u5e76\u4e14\u548c\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u72b6\u6001\u4fe1\u606f\u4e00\u6837\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u952e\u4ee3\u7801\u89e3\u8bfb",children:"\u5173\u952e\u4ee3\u7801\u89e3\u8bfb"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'// \u5c06 gpio \u91cd\u7f6e\u4e3a\u9ed8\u8ba4\u72b6\u6001\uff08\u9009\u62e9 gpio \u529f\u80fd\uff0c\u542f\u7528\u4e0a\u62c9\u5e76\u7981\u7528\u8f93\u5165\u548c\u8f93\u51fa\uff09\u3002\n// \u8fd9\u4e2a\u51fd\u6570\u8fd8\u4f1a\u5c06\u6b64\u5f15\u811a\u7684 IOMUX \u914d\u7f6e\u4e3a GPIO \u529f\u80fd\uff0c\u5e76\u65ad\u5f00\u901a\u8fc7 GPIO \u77e9\u9635\u914d\u7f6e\u7684\u4efb\u4f55\u5176\u4ed6\u5916\u8bbe\u8f93\u51fa\u3002\ngpio_reset_pin(BLINK_GPIO);\n\n// \u914d\u7f6eGPIO\u7684\u65b9\u5411\uff0c\u5982output_only,input_only,output_and_input\ngpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);\n\n// \u8bbe\u7f6e GPIO \u7684\u8f93\u51fa\u7535\u5e73\u3002\ngpio_set_level(BLINK_GPIO, s_led_state);\n\n// \u5ef6\u65f6 CONFIG_BLINK_PERIOD \u6beb\u79d2\u3002\n// \u6bd4\u5982 vTaskDelay(100 / portTICK_PERIOD_MS); \u662f\u5ef6\u65f6100ms\u3002\nvTaskDelay(CONFIG_BLINK_PERIOD / portTICK_PERIOD_MS);\n\n// \u548cprintf\u51fd\u6570\u4e00\u6837\uff0c\u8f93\u51fa\u65e5\u5fd7\u4fe1\u606f\u3002\nESP_LOGI(TAG, "Turning the LED %s!", s_led_state == true ? "ON" : "OFF");\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5728ESP-IDF\u4e2d\u4e00\u822c\u6211\u4eec\u4f7f\u7528 ESP_LOGx \u8f93\u51fa\u65e5\u5fd7\u4fe1\u606f\uff0c\u65e5\u5fd7\u6253\u5370\u7b49\u7ea7\u6709\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ESP_LOGE -\u9519\u8bef\uff08\u6700\u4f4e\uff09"}),"\n",(0,i.jsx)(e.li,{children:"ESP_LOGW - \u8b66\u544a"}),"\n",(0,i.jsx)(e.li,{children:"ESP_LOGI -\u4fe1\u606f"}),"\n",(0,i.jsx)(e.li,{children:"ESP_LOGD -\u8c03\u8bd5"}),"\n",(0,i.jsx)(e.li,{children:"ESP_LOGV -\u8be6\u7ec6\uff08\u6700\u9ad8\uff09"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4e3a\u4ec0\u4e48\u4e0d\u7528 printf \u6253\u5370\u65e5\u5fd7\u4fe1\u606f\uff1fESP-IDF\u57fa\u4e8e freeRTOS\uff0c\u800cFreeRTOS\u662f\u4e00\u4e2a\u62a2\u5360\u5f0f\u7684\u5b9e\u65f6\u591a\u4efb\u52a1\u7cfb\u7edf\uff0c\u62a2\u5360\u5c31\u610f\u5473\u7740\u4efb\u52a1\u4e4b\u95f4\u6709\u4f18\u5148\u7ea7\uff0c\u9ad8\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u53ef\u4ee5\u6253\u65ad\u4f4e\u4f18\u5148\u7ea7\u7684\u4efb\u52a1\u3002\u56e0\u4e3a printf \u662f\u4e00\u4e2a\u4e0d\u53ef\u91cd\u5165\u51fd\u6570\uff0c\u800c\u5728\u4e2d\u65ad\u4e2d\u8981\u907f\u514d\u8c03\u7528\u4e0d\u53ef\u91cd\u5165\u51fd\u6570(\u5728freeRTOS\u591a\u4efb\u52a1\u4e2d\u4e5f\u662f\u4e00\u6837)\u3002",(0,i.jsx)("br",{}),"\u533a\u5206\u4e00\u4e2a\u51fd\u6570\u662f\u5426\u53ef\u91cd\u5165\u5c31\u662f\u770b\u8fd9\u4e2a\u51fd\u6570\u80fd\u5426\u5728\u672a\u8fd4\u56de\u7684\u65f6\u5019\u518d\u6b21\u88ab\u8c03\u7528\u3002\u800c\u9020\u6210\u4e00\u4e2a\u51fd\u6570\u4e0d\u53ef\u91cd\u5165\u7684\u539f\u56e0\u5f80\u5f80\u662f\u4f7f\u7528\u4e86\u5168\u5c40\u53d8\u91cf\uff0c\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u672a\u8fd4\u56de\u518d\u6267\u884c\u4e00\u6b21\u4f1a\u5bfc\u81f4\u5bf9\u5168\u5c40\u53d8\u91cf\u7684\u64cd\u4f5c\u662f\u4e0d\u5b89\u5168\u7684\u3002\u5c31\u4f8b\u5982\u6211\u4eec\u5e38\u7528\u7684printf\u3001malloc\u3001free\u90fd\u662f\u4e0d\u53ef\u91cd\u5165\u7684\u51fd\u6570\uff0cprintf\u4f1a\u5f15\u7528\u5168\u5c40\u53d8\u91cfstdout\uff0cmalloc\uff0cfree\u4f1a\u5f15\u7528\u5168\u5c40\u7684\u5185\u5b58\u5206\u914d\u8868\uff0c\u5728\u591a\u7ebf\u7a0b\u7684\u73af\u5883\u4e0b\uff0c\u5982\u679c\u6ca1\u6709\u5f88\u597d\u7684\u5904\u7406\u6570\u636e\u4fdd\u62a4\u548c\u4e92\u65a5\u8bbf\u95ee\uff0c\u5c31\u4f1a\u53d1\u751f\u9519\u8bef\u3002\n",(0,i.jsx)("br",{}),"\u6240\u4ee5\u4f7f\u7528printf\u662f\u4e0d\u591f\u5b89\u5168\u7684\uff0c\u4e3a\u6b64ESP-IDF\u63d0\u4f9b\u4e86\u81ea\u5df1\u7684\u5b89\u5168\u63a5\u53e3 ",(0,i.jsx)(e.strong,{children:"ESP_LOGx"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4fee\u6539\u9ed8\u8ba4\u4f7f\u7528\u7684led\u5f15\u811a",children:"\u4fee\u6539\u9ed8\u8ba4\u4f7f\u7528\u7684LED\u5f15\u811a"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u60f3\u4fee\u6539\u9ed8\u8ba4\u4f7f\u7528\u7684LED\u5f15\u811a\u600e\u4e48\u529e\u5462\uff1f\u8fd9\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u4fee\u6539\u4e00\u4e0b BLINK_GPIO \u5b8f\u5373\u53ef\uff0c\u4f46\u662f BLINK_GPIO \u4f7f\u7528\u7684\u662f\u53e6\u4e00\u4e2a\u5b8f CONFIG_BLINK_GPIO \uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,i.jsx)(e.code,{children:"sdkconfig"})," \u6587\u4ef6\u4e2d\u627e\u5230\u8fd9\u4e2a\u5b8f\u5b9a\u3002\u662f\u4e0d\u662f\u4fee\u6539\u8fd9\u91cc\u7684\u5b8f\u5b9a\u4e49\u6307\u5b9a\u7684\u5f15\u811a\u7f16\u53f7\u5c31\u884c\u4e86\u5462\uff1f"]}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u662f\u4e0d\u884c\u7684\uff0c\u6211\u4eec\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539 ",(0,i.jsx)(e.code,{children:"sdkconfig"})," \u6587\u4ef6\u4e2d\u7684\u4efb\u4f55\u5185\u5bb9\uff0c\u56e0\u4e3a\u4f1a\u4e0d\u751f\u6548\uff0c\u70b9\u51fb\u7f16\u8bd1\u7684\u65f6\u5019\u4f60\u4f1a\u53d1\u73b0\u5b83\u53c8\u53d8\u56de\u539f\u6765\u7684\u72b6\u6001\u4e86\uff0c\u90a3\u4e48\u5230\u5e95\u5e94\u8be5\u662f\u5728\u54ea\u91cc\u4fee\u6539\u8fd9\u4e2a\u5b8f\u5462\uff1f"]}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u5b9e\u5f88\u7b80\u5355\uff0cesp-idf\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u914d\u7f6e\u65b9\u6cd5\uff0c\u90a3\u5c31\u662f\u4f7f\u7528 menuconfig \u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u6b65\u9aa4\u8bf7\u7ee7\u7eed\u770b\u4e0b\u9762\u7684\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u5728 vscode \u6253\u5f00\u7ec8\u7aef\u63a7\u5236\u53f0\uff1a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter4/DShanMCU-Mio_esp-idf_chapter4-2_images_001.jpg",alt:"DShanMCU-Mio_esp-idf_chapter4-2_images_001"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 ",(0,i.jsx)(e.code,{children:"idf.py menucofig"})," \uff0c\u7136\u540e\u6309\u56de\u8f66\u7b49\u5f85\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u4f1a\u51fa\u73b0\u4e00\u4e2amenuconfig\u914d\u7f6e\u754c\u9762\uff0c\u5728\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u952e\u76d8\u8fdb\u884c\u9009\u62e9\u3001\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter4/DShanMCU-Mio_esp-idf_chapter4-2_images_002.jpg",alt:"DShanMCU-Mio_esp-idf_chapter4-2_images_002"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter4/DShanMCU-Mio_esp-idf_chapter4-2_images_003.jpg",alt:"DShanMCU-Mio_esp-idf_chapter4-2_images_003"})}),"\n",(0,i.jsx)(e.p,{children:"esp-idf menuconfig \u57fa\u672c\u64cd\u4f5c\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6309\u952e\u76d8\u65b9\u5411\u952e\u7684\u56db\u4e2a\u6309\u94ae\u4e2d\u7684 ",(0,i.jsx)(e.strong,{children:"\u4e0a\u952e"})," \u548c ",(0,i.jsx)(e.strong,{children:"\u4e0b\u952e"})," \u4e0a\u4e0b\u5207\u6362\u5230\u4e0d\u540c\u7684\u9009\u9879\uff0c\u9ad8\u4eae\u90e8\u5206\u4f1a\u8df3\u8f6c\u5728\u4e0d\u540c\u7684\u9009\u9879\u4e0a\uff0c"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5f53\u79fb\u52a8\u5230\u672b\u5c3e\u5e26\u6709 ",(0,i.jsx)(e.code,{children:"---\x3e"})," \u7684\u9009\u9879\u65f6\uff0c\u6309\u65b9\u5411\u952e\u4e0a\u7684 ",(0,i.jsx)(e.strong,{children:"\u53f3\u952e"})," \u53ef\u4ee5\u8fdb\u5165\u5230\u5176\u4e2d\uff0c\u8fdb\u884c\u66f4\u591a\u7684\u914d\u7f6e\uff1b\u6309 ",(0,i.jsx)(e.strong,{children:"\u5de6\u952e"})," \u56de\u5230\u4e0a\u4e00\u9875\u9762"]}),"\n",(0,i.jsxs)(e.li,{children:["\u53cd\u4e4b\u9047\u5230\u6ca1\u6709 ",(0,i.jsx)(e.code,{children:"---\x3e"})," \u7684\u9009\u9879\uff0c\u770b\u60c5\u51b5\u800c\u5b9a\uff1a\u5982\u679c\u53ea\u80fd\u914d\u7f6e \u4f7f\u80fd \u6216 \u5931\u80fd(\u6700\u5de6\u8fb9\u7684\u7b26\u53f7\u662f ",(0,i.jsx)(e.code,{children:"[]"}),")\uff0c\u90a3\u4e48\u6309 ",(0,i.jsx)(e.strong,{children:"\u56de\u8f66\u952e(Enter)"})," \u6216 ",(0,i.jsx)(e.strong,{children:"\u7a7a\u683c\u952e(Space)"})," \u5373\u53ef\uff1b\u5982\u679c\u9700\u8981\u8f93\u5165\u5b57\u7b26\u6307\u5b9a(\u6700\u5de6\u8fb9\u7684\u7b26\u53f7\u662f ",(0,i.jsx)(e.code,{children:"()"}),")\uff0c\u90a3\u4e48\u9700\u8981\u5148\u6309 ",(0,i.jsx)(e.strong,{children:"?"})," (\u82f1\u6587\u8f93\u5165\u6a21\u5f0f\u4e0b)\u952e\uff0c\u67e5\u770b\u8f93\u5165\u683c\u5f0f\u8981\u6c42\u8bf4\u660e\uff0c\u9605\u8bfb\u4e86\u89e3\u8bf4\u660e\u4e4b\u540e\uff0c\u6309\u952e\u76d8\u7684 ",(0,i.jsx)(e.strong,{children:"q/Q"})," (\u82f1\u6587\u8f93\u5165\u6a21\u5f0f\u4e0b)\u952e\uff0c\u5173\u95ed\u9605\u8bfb\u9875\u9762\uff0c\u4e4b\u540e\u518d\u6309 ",(0,i.jsx)(e.strong,{children:"\u56de\u8f66\u952e(Enter)"})," \u6216 ",(0,i.jsx)(e.strong,{children:"\u7a7a\u683c\u952e(Space)"})," \u6253\u5f00\u8f93\u5165\u680f\u8fdb\u884c\u8f93\u5165\uff0c"]}),"\n",(0,i.jsxs)(e.li,{children:["\u6309 ",(0,i.jsx)(e.strong,{children:"q/Q"})," (\u82f1\u6587\u8f93\u5165\u6a21\u5f0f\u4e0b)\u952e \u9000\u51fa menuconfig\uff0c\u56de\u5230\u7ec8\u7aef\u63a7\u5236\u53f0\uff0c\u6ce8\u610f\u4fdd\u5b58\u8fdb\u884c\u7684\u4fee\u6539\uff0c\u5b8c\u5168\u63a8\u51fa\u524d\u4f1a\u6709\u63d0\u793a\u4f60\u662f\u5426\u4fdd\u5b58\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4e0b\u9762\u6211\u4eec\u5c1d\u8bd5\u4fee\u6539 LED \u706f\u7684\u9ed8\u8ba4\u5f15\u811a\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u53c2\u8003\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u6253\u5f00\u7ec8\u7aef\u63a7\u5236\u53f0\u3001\u8f93\u5165 idf.py menuconfig \u8fdb\u5165\u5230 menuconfig \u914d\u7f6e\u754c\u9762\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u6309 ",(0,i.jsx)(e.strong,{children:"\u4e0a\u952e"})," \u548c ",(0,i.jsx)(e.strong,{children:"\u4e0b\u952e"})," \u4e0a\u4e0b\u5207\u6362\u5230\u4e0d\u540c\u7684\u9009\u9879\uff0c\u627e\u5230\u5982\u4e0b\u56fe\u6240\u793a\u7684 ",(0,i.jsx)(e.code,{children:"Example Configuration  ---\x3e"})," \u9009\u9879\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter4/DShanMCU-Mio_esp-idf_chapter4-2_images_004.jpg",alt:"DShanMCU-Mio_esp-idf_chapter4-2_images_004"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["\u6309 ",(0,i.jsx)(e.strong,{children:"\u56de\u8f66\u952e(Enter)"})," \u6216 ",(0,i.jsx)(e.strong,{children:"\u7a7a\u683c\u952e(Space)"})," \u8fdb\u5165\u65b0\u9875\u9762\uff0c\u7ee7\u7eed\u627e\u5230 ",(0,i.jsx)(e.code,{children:"(48) Blink GPIO number"})," \u9009\u9879\uff0c\u7136\u540e\n\u6309  ",(0,i.jsx)(e.strong,{children:"?"})," (\u82f1\u6587\u8f93\u5165\u6a21\u5f0f\u4e0b)\u952e\u67e5\u770b\u8bf4\u660e\u4fe1\u606f\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter4/DShanMCU-Mio_esp-idf_chapter4-2_images_005.jpg",alt:"DShanMCU-Mio_esp-idf_chapter4-2_images_005"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6309 ",(0,i.jsx)(e.strong,{children:"q/Q"})," \u952e\u9000\u51fa\u8bf4\u660e\u754c\u9762\uff0c\u7136\u540e\u518d\u8be5\u9009\u9879\u4e0b\u6309 ",(0,i.jsx)(e.strong,{children:"\u56de\u8f66\u952e(Enter)"})," \u6216 ",(0,i.jsx)(e.strong,{children:"\u7a7a\u683c\u952e(Space)"})," \u6253\u5f00\u8f93\u5165\u6846\uff0c\u8f93\u5165\u4f60\u60f3\u8981\u914d\u7f6e\u7684\u5f15\u811a\u7f16\u53f7\u540e\u6309 ",(0,i.jsx)(e.strong,{children:"\u56de\u8f66\u952e(Enter)"})," \u5373\u53ef\uff1a"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6309 ",(0,i.jsx)(e.strong,{children:"q/Q"})," (\u82f1\u6587\u8f93\u5165\u6a21\u5f0f\u4e0b)\u952e \u9000\u51fa menuconfig\uff0c\u56de\u5230\u7ec8\u7aef\u63a7\u5236\u53f0\uff0c\u6ce8\u610f\u4fdd\u5b58\u8fdb\u884c\u7684\u4fee\u6539\uff0c\u5b8c\u5168\u63a8\u51fa\u524d\u4f1a\u6709\u63d0\u793a\u4f60\u662f\u5426\u4fdd\u5b58\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://photos.100ask.net/esp32-docs/DShanMCU-Mio/ESP-IDF/chapter4/DShanMCU-Mio_esp-idf_chapter4-2_images_006.jpg",alt:"DShanMCU-Mio_esp-idf_chapter4-2_images_006"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e4b\u540e\u5c31\u53ef\u4ee5\u91cd\u65b0\u7f16\u8bd1\u3001\u70e7\u5199\u5230\u5f00\u53d1\u677f\uff0c\u7a0b\u5e8f\u4f1a\u6309\u7167\u521a\u914d\u7f6e\u7684\u4fee\u6539\u8fd0\u884c\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5176\u5b9e\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u6307\u5b9a\u6211\u4eec\u60f3\u4f7f\u7528\u7684 GPIO \u5f15\u811a\uff0c\u6bd4\u5982 ",(0,i.jsx)(e.code,{children:"#define BLINK_GPIO 18"})," \u914d\u7f6e\u9879\u5f88\u5c11\u7684\u65f6\u5019\u8fd9\u6837\u7684\u65b9\u6cd5\u662f\u6ca1\u6709\u95ee\u9898\uff0c\u5c31\u7b97\u662f\u8fd9\u6837\u4e00\u822c\u6211\u4eec\u4e5f\u4e0d\u4f1a\u8fd9\u4e48\u505a\u3002",(0,i.jsx)("br",{}),"menuconfig \u80fd\u4fbf\u6377\u7684\u5bf9\u5de5\u7a0b\u8fdb\u884c\u914d\u7f6e\uff0c\u800c\u4e0d\u9700\u8981\u4fee\u6539\u4ee3\u7801\uff0c\u5e76\u4e14\u5176\u4e2d\u8fd8\u80fd\u5bf9\u8be5\u914d\u7f6e\u8fdb\u884c\u8be6\u7ec6\u7684\u8bf4\u660e\uff0c\u5f53\u6211\u4eec\u7684\u914d\u7f6e\u9879\u975e\u5e38\u591a\u7684\u65f6\u5019\u8fd9\u5c31\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u5e76\u4e14\u4e0d\u53ef\u6216\u7f3a\u3002\u6240\u4ee5\u6700\u597d\u4ece\u4e00\u5f00\u59cb\u5c31\u517b\u6210\u4f7f\u7528 menucofig\u7684\u4e60\u60ef\uff01"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>t});var i=s(7294);const r={},c=i.createContext(r);function t(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);