(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ccdf1546"],{2017:function(e,t,a){"use strict";var s=a("b12d"),r=a.n(s);r.a},"93cd":function(e,t,a){"use strict";var s=a("e6bd"),r=a.n(s);r.a},"9ed6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[a("el-form",{ref:"loginForm",staticClass:"login-form valid_form",attrs:{model:e.loginForm,rules:e.loginFormRules,"auto-complete":"on","label-position":"left"}},[a("div",{staticClass:"title-container"},[a("h3",{staticClass:"title"},[e._v("数字黄金管理平台")])]),e._v(" "),a("el-form-item",{attrs:{prop:"username"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),a("el-input",{ref:"username",attrs:{placeholder:"请输入用户名",name:"username",type:"text",tabindex:"1",autocomplete:"off"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),a("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"off"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),a("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[a("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),a("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)},r=[],o=(a("96cf"),a("1da1")),n=a("cf45"),i=(a("0b16"),a("4328")),d=a.n(i),l=(a("5f87"),{name:"Login",data:function(){return{loginForm:{username:"",password:""},loginFormRules:{username:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.m_valid_addForm("loginForm")){e.next=9;break}return t={username:this.loginForm.username,password:this.$md5(this.loginForm.password)},this.loading=!0,e.next=5,this.$http.post("".concat(n["a"].baseUrl,"/web/login"),d.a.stringify(t));case 5:a=e.sent,console.log(a),"0000"==a.data.code?(this.$store.commit("user/SET_ROLEID",a.data.data.sysRole.id),localStorage.setItem("pp_roleId",a.data.data.sysRole.id),this.$store.commit("user/SET_MERCHANT_CENTER_CODE",a.data.data.user.merchant_center_code),localStorage.setItem("pp_merchant_center_code",a.data.data.user.merchant_center_code),this.$store.commit("user/SET_USERID",a.data.data.user.id),localStorage.setItem("pp_userId",a.data.data.user.id),this.$store.commit("user/SET_PLATFORMID",a.data.data.user.platformid),localStorage.setItem("pp_platformid",a.data.data.user.platformid),console.log(localStorage.getItem("pp_platformid")),this.$store.commit("user/SET_REALNAME",a.data.data.user.real_name),localStorage.setItem("pp_real_name",a.data.data.user.real_name),this.loading=!1,this.$router.push({path:"/"})):(this.m_message(a.data.msg,"warning"),this.loading=!1);case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),m_valid_addForm:function(e){var t=!1;return this.$refs[e].validate((function(e){return e?(t=!0,!0):(t=!1,!1)})),t},m_message:function(e,t){this.$message({message:e,type:t})}}}),c=l,u=(a("2017"),a("93cd"),a("2877")),m=Object(u["a"])(c,s,r,!1,null,"c690f2a0",null);t["default"]=m.exports},b12d:function(e,t,a){},e6bd:function(e,t,a){}}]);