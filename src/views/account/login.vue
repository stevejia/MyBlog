<template>
    <Card style="width:320px" class="login-container">
        <div style="text-align:center">
            <Form :label-width="80">
                <FormItem label="用户名" prop="userNameValidate">
                    <Input type="text" v-model="loginModel.userName"></Input>
                </FormItem>
                <FormItem label="密码" prop="passwdValidate">
                    <Input type="password" v-model="loginModel.password"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" class="button" @click="login()">登录</Button>
                </FormItem>
            </Form>
        </div>
    </Card>
</template>
<script>
import {http} from '@/libs/http'
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      }
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      loginModel: {
        userName: "",
        password: ""
      },
    //   ruleCustom: {
    //     userNameValidate: [{ validator: validateUserName, trigger: "blur" }],
    //     passwdValidate: [{ validator: validatePass, trigger: "blur" }]
    //   }
    };
  },
  mounted(){
    localStorage.removeItem("token");
  },
  methods: {
    login() {
      var currentRouter = this.$router.currentRoute;
      var redirect = currentRouter.query.redirect || '/sjblog/article/recommend';
      let loginInfo = {
        name: this.loginModel.userName,
        password: this.loginModel.password
      };
      http.post('/user/login', loginInfo, false).then(res=>{
        let token = res.token;
        localStorage.setItem('token', token);
        this.$router.push({
          path: redirect
        });
      });


      
      
      //   this.$refs[name].validate(valid => {
      //     if(!valid){
      //         return ;
      //     }
      //     //TODO:: login
      //   });
      //暂时不做Validate
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  margin: auto;
  vertical-align: middle;
  min-width: 400px;
  width: 25vw !important;
  margin-top: 20vh;
}
</style>
