(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={val:""},n.handleChange=n.handleChange.bind(o(n)),n.handleSubmit=n.handleSubmit.bind(o(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("h1",{style:{marginTop:"50px"}},"Top Secret Admin Panel"),r.a.createElement("div",{style:{width:"600px"}},"Checking ",r.a.createElement("code",null,"/admin")," is generally a good idea (but I hope you did not dirbust for this)! Unfortunately, there isn't going to be any admin-y stuff here, but have a poke around a bit more and you might find a flag!",r.a.createElement("form",{style:{marginTop:"120px",opacity:"0"},onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"flag",onChange:this.handleChange})))))},i.handleChange=function(e){this.setState({val:e.target.value})},i.handleSubmit=function(e){e.preventDefault();var t=this.state.val;'x-grcup"6%OZ\bDi\vJhPfMPEYRh\\MW]'==function(e,t){for(var n=Math.max(e.length,t.length),a="",r=0;r<n;r++)a+=String.fromCharCode(e.charCodeAt(r)^t.charCodeAt(r));return a}(t,"5d41402abc4b2a76b9719d911017c592 ")?alert("Good job that is correct, the flag is indeed "+t):alert("nope, sorry!")},a}(r.a.Component);t.default=i}}]);
//# sourceMappingURL=component---src-pages-admin-js-bf20c38afa1ae05aebd2.js.map