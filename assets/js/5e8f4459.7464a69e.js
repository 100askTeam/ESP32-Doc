"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4597],{5385:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(5893),r=n(1151);const s={},i="\u5f02\u5e38\u5904\u7406",c={id:"DShanMCU-Mio/MicroPython/chapter3-10",title:"\u5f02\u5e38\u5904\u7406",description:"Python\u652f\u6301\u5f02\u5e38\u5904\u7406\uff0c\u5373\u4f7f\u7528\u201ctry\u201d\u5c1d\u8bd5\u53bb\u6267\u884c\u6307\u5b9a\u4ee3\u7801\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\uff0c\u5219\u8df3\u5230\u201cexcept\u201d\u90e8\u5206\u6267\u884c\u5f02\u5e38\u5904\u7406\uff0c\u5426\u5219\u6267\u884c\u201celse\u201d\u90e8\u5206\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\uff0c\u5982\u679c\u4ee3\u7801\u53d1\u751f\u9519\u8bef\uff0c\u4e0d\u7528\u9000\u51fa\uff0c\u53ea\u9700\u8981\u8df3\u5230\u5f02\u5e38\u90e8\u5206\u5904\u7406\u5373\u53ef\uff0c\u7a0b\u5e8f\u4e0d\u4f1a\u5d29\u6e83\u3002",source:"@site/docs/DShanMCU-Mio/MicroPython/chapter3-10.md",sourceDirName:"DShanMCU-Mio/MicroPython",slug:"/DShanMCU-Mio/MicroPython/chapter3-10",permalink:"/DShanMCU-Mio/MicroPython/chapter3-10",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/esp32-Doc/tree/main/docs/DShanMCU-Mio/MicroPython/chapter3-10.md",tags:[],version:"current",frontMatter:{},sidebar:"boardquickstartSidebar",previous:{title:"\u524d\u8a00",permalink:"/DShanMCU-Mio/MicroPython/chapter3-1"},next:{title:"\u6ce8\u91ca",permalink:"/DShanMCU-Mio/MicroPython/chapter3-2"}},a={},l=[];function h(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"\u5f02\u5e38\u5904\u7406",children:"\u5f02\u5e38\u5904\u7406"}),"\n",(0,o.jsx)(e.p,{children:"Python\u652f\u6301\u5f02\u5e38\u5904\u7406\uff0c\u5373\u4f7f\u7528\u201ctry\u201d\u5c1d\u8bd5\u53bb\u6267\u884c\u6307\u5b9a\u4ee3\u7801\uff0c\u5982\u679c\u53d1\u751f\u9519\u8bef\uff0c\u5219\u8df3\u5230\u201cexcept\u201d\u90e8\u5206\u6267\u884c\u5f02\u5e38\u5904\u7406\uff0c\u5426\u5219\u6267\u884c\u201celse\u201d\u90e8\u5206\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\uff0c\u5982\u679c\u4ee3\u7801\u53d1\u751f\u9519\u8bef\uff0c\u4e0d\u7528\u9000\u51fa\uff0c\u53ea\u9700\u8981\u8df3\u5230\u5f02\u5e38\u90e8\u5206\u5904\u7406\u5373\u53ef\uff0c\u7a0b\u5e8f\u4e0d\u4f1a\u5d29\u6e83\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u4e0b\u4ee3\u7801\u6bb5\u6240\u793a\uff0cTF\u5361\u4e2d\u6709\u201chello.txt\u201d\u6587\u4ef6\uff0c\u6ca1\u6709\u201ctest.txt\u201d\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u5f02\u5e38\u5904\u7406\u673a\u5236\uff0c\u5728\u201copen\u201d\u6587\u4ef6\u5931\u8d25\u65f6\uff0c\u7a0b\u5e8f\u5c31\u4f1a\u5d29\u6e83\u9000\u51fa\uff0c\u540e\u9762\u4ee3\u7801\u5c31\u4e0d\u4f1a\u88ab\u6267\u884c\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'# \u5f02\u5e38\u5904\u7406\u793a\u4f8b\uff08exp19.py\uff09\n\ntry: # \u5c1d\u8bd5\u6253\u5f00hello.txt\n    f = open("hello.txt", "r")\nexcept : # \u9519\u8bef\u8fdb\u5165\u5f02\u5e38\u5904\u7406\n    print("Cannot find hello.txt file") \nelse:\n    print("hello.txt already exists.")\n    f.close()\n\ntry: # \u5c1d\u8bd5\u6253\u5f00test.txt\n    f = open("test.txt", "r")\nexcept : # \u9519\u8bef\u8fdb\u5165\u5f02\u5e38\u5904\u7406\n    print("Cannot find test.txt file.")\nelse:\n    print("test.txt already exists.")\n    f.close()\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u6267\u884c\u7ed3\u679c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-shell",children:"hello.txt already exists.\nCannot find test.txt file.\n"})})]})}function p(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(h,{...t})}):h(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);