<template>
    <Form class="signup-form" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="用户名" prop="userName">
            <Input  v-model="formCustom.userName"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input type="password" v-model="formCustom.password"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            const validatePassCheck = (rule, value, callback) => {
                if (value && value !== this.formCustom.password) {
                    callback(new Error('两次输入的密码不一致！'));
                } else {
                    callback();
                }
            };
            return {
                formCustom: {
                    userName: '',
                    password: '',
                    passwdCheck: '',
                },
                ruleCustom: {
                    password: [
                        
                        { required: true, message: '请输入密码', trigger: 'blur'},
                    ],
                    passwdCheck: [
                        { required: true, message: '请再次输入密码', trigger: 'blur'},
                        { validator: validatePassCheck, trigger: 'blur' },
                        
                    ],
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>


<style lang="less" scoped>
    .signup-form{
        width: 50%;
        margin: auto;
        padding: 20px;
    }
</style>
