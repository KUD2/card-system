(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-53b5d333"],{"23fc":function(e,t,i){"use strict";var n=i("ff42"),a=i.n(n);a.a},dc3f:function(e,t,i){"use strict";var n,a,r,o,s,l,c,d,u;i.r(t),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"login-container"},[i("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form,rules:e.formRules,"label-position":"left","label-width":"0px"},nativeOn:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[i("h3",{staticClass:"title"},[e._v("后台登录")]),i("el-form-item",{attrs:{prop:"email"}},[i("el-input",{attrs:{type:"email",placeholder:"邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),i("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.form.remember,callback:function(t){e.$set(e.form,"remember",t)},expression:"form.remember"}},[e._v("记住密码")]),i("el-form-item",{staticStyle:{width:"100%"}},[i("div",{attrs:{id:"embed-captcha"}}),i("button",{staticStyle:{display:"none"},attrs:{id:"bind-geetest"},on:{click:function(t){return t.preventDefault(),e.handleLoginSubmit(t)}}}),i("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.loading||e.geetestLoading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v(e._s(e.geetestLoading?"加载中":"登录")+"\n      ")])],1)],1)],1)},a=[],r=i("7618"),o=i("7ded"),s=i("1157"),l=i.n(s),c={data:function(){return{loading:!1,vcode:window.config&&window.config.vcode?window.config.vcode:{},geetestLoading:!1,capture:null,validate:!1,form:{email:this.$route.query.email,password:"",remember:!0},formRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:function(e,t,i){/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(t.trim())?i():i(Error("请输入正确的邮箱"))}}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){this.verticalCenter(),window.addEventListener("resize",this.verticalCenter),this.vcode.geetest&&1==+this.vcode.login?!1!==this.vcode.geetest.gt?(this.renderGeeCaptcha(this.vcode.geetest),this.vcode.geetest.gt=!1):this.handleReInitCapture():this.renderGeeCaptcha(null)},destroyed:function(){window.removeEventListener("resize",this.verticalCenter)},methods:{verticalCenter:function(){var e=l()(this.$refs.form.$el);e.css({position:"absolute",left:(l()(window).width()-e.outerWidth())/2,top:(l()(window).height()-e.outerHeight())/2.5})},handleReset2:function(){this.$refs.form.resetFields()},handleLogin:function(){if(!this.capture)return this.$alert("页面正在加载，请稍后");this.$refs.form.validate((function(e){if(!e)return!1;l()("#bind-geetest").click()}))},handleLoginSubmit:function(){var e,t=this;if(!this.validate)return this.$alert("请先完成验证");this.loading=!0,e=Object.assign({},this.form),"object"===Object(r.a)(this.validate)&&(e.gt_c=this.validate.geetest_challenge,e.gt_v=this.validate.geetest_validate,e.gt_s=this.validate.geetest_seccode),this.$store.dispatch("Login",e).then((function(e){t.$store.dispatch("GenerateRoutes",e).then((function(){t.$router.addRoutes(t.$store.getters.addRouters),t.loading=!1,t.$route.query.to?t.$router.push({path:t.$route.query.to}):t.$router.push({path:"/admin/"})}))})).catch((function(){t.vcode.geetest&&1===t.vcode.login&&t.handleReInitCapture()})).finally((function(){t.loading=!1}))},handleReInitCapture:function(){var e=this;this.geetestLoading=!0,this.validate=!1,Object(o.c)().then((function(t){var i=t.data;i.geetest?"geetest"===i.driver?e.renderGeeCaptcha(i.geetest):e.renderGeeCaptcha(null):e.vcode.geetest&&1===e.vcode.login?e.$alert("获取验证码失败，请刷新页面重试","获取验证码失败"):e.geetestLoading=!0})).catch((function(){e.$alert("获取验证码失败，请刷新页面重试","获取验证码失败")}))},renderGeeCaptcha:function(e){var t=this;if(e){this.geetestLoading=!0,l()("#embed-captcha").html("");try{window.initGeetest({gt:e.gt,challenge:e.challenge,product:"popup",offline:!e.success},(function(e){e.onReady((function(){t.geetestLoading=!1})),e.onError((function(){t.$alert("页面超时，请刷新页面重试","提示").then((function(){location.reload(!0)}))})),e.onSuccess((function(){t.validate=e.getValidate()})),e.appendTo("#embed-captcha"),e.bindOn&&e.bindOn("#bind-geetest"),t.capture=e}))}catch(e){this.$alert("登录验证码初始化失败:"+e)}}else this.capture={verify:!1},this.geetestLoading=!1,this.validate=!0}}},i("23fc"),d=i("2877"),u=Object(d.a)(c,n,a,!1,null,"2f01d24e",null),t.default=u.exports},ff42:function(e,t,i){}}]);