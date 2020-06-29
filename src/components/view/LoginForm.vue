<template>
    <div v-if="isShow">
        <el-card class="box-card">
            <div  class="text item">
                <div slot="header" class="clearfix">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="登陆" name="login">
                            <el-form  ref="loginForm" :rules="rules" :label-position="position" label-width="70px" :model="loginInfo">
                                <el-form-item prop="username" label="用户名">
                                    <el-input v-model="loginInfo.username"></el-input>
                                </el-form-item>
                                <el-form-item prop="password" label="密码">
                                    <el-input :show-password="showPassword" v-model="loginInfo.password"></el-input>
                                </el-form-item>
                                <el-button @click="login" style="margin-left: 60%" type="success" round>登陆</el-button>
                                <el-button @click="cancle" type="info" round>取消</el-button>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="注册" name="registry">
                            <el-form ref="registryForm" :rules="rules" :label-position="position" label-width="80px" :model="registryInfo">
                                <el-form-item prop="username" label="用户名">
                                    <el-input v-model="registryInfo.username"></el-input>
                                </el-form-item>
                                <el-form-item prop="password" label="密码">
                                    <el-input :show-password="showPassword" v-model="registryInfo.password"></el-input>
                                </el-form-item>
                                <el-form-item prop="email" label="邮箱">
                                    <el-input style="width: 220px" v-model="registryInfo.email"></el-input>
                                    <el-button @click="sendCaptcha(registryInfo.email)" style="margin-left: 20px" type="info">发送验证码</el-button>
                                </el-form-item>
                                <el-form-item prop="captcha" label="验证码">
                                    <el-input v-model="registryInfo.captcha"></el-input>
                                </el-form-item>
                                <el-button @click="registry" style="margin-left: 60%" type="success" round>注册</el-button>
                                <el-button @click="cancle" type="info" round>取消</el-button>
                            </el-form>
                        </el-tab-pane>
                        <!--<el-tab-pane label="忘记密码" name="reset">-->
                            <!--<el-form ref="resetForm" :rules="rules" :label-position="position" label-width="80px" :model="resetInfo">-->
                                <!--<el-form-item prop="username" label="用户名">-->
                                    <!--<el-input v-model="resetInfo.username"></el-input>-->
                                <!--</el-form-item>-->
                                <!--<el-form-item prop="email" label="邮箱">-->
                                    <!--<el-input style="width: 220px" v-model="resetInfo.email"></el-input>-->
                                    <!--<el-button @click="sendCaptcha(resetInfo.email)" style="margin-left: 20px" type="info">发送验证码</el-button>-->
                                <!--</el-form-item>-->
                                <!--<el-form-item prop="captcha" label="验证码">-->
                                    <!--<el-input v-model="resetInfo.captcha"></el-input>-->
                                <!--</el-form-item>-->
                                <!--<el-form-item prop="password" label="新密码">-->
                                    <!--<el-input :show-password="showPassword" v-model="resetInfo.password"></el-input>-->
                                <!--</el-form-item>-->
                                <!--<el-button @click="reset" style="margin-left: 60%" type="success" round>重置</el-button>-->
                                <!--<el-button @click="cancle" type="info" round>取消</el-button>-->
                            <!--</el-form>-->
                        <!--</el-tab-pane>-->
                    </el-tabs>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "LoginForm",
        data(){
            return {
                activeName:'login',
                position:'left',
                showPassword:true,
                reg:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                loginInfo:{
                    username:'',
                    password:'',
                },
                registryInfo:{
                    username:'',
                    password:'',
                    email:'',
                    captcha:''
                },
                resetInfo:{
                    username:'',
                    password:'',
                    email:'',
                    captcha:''
                },
                rules:{
                    username:[
                        { required:true,message: '请输入您的用户名', trigger: 'blur'},
                        { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
                    ],
                    password:[
                        { required:true,message: '请输入您的密码', trigger: 'blur'},
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                    ],
                    email:[
                        { required:true,message: '请输入您的邮箱', trigger: 'blur'}
                    ],
                    captcha:[
                        { required:true,message: '请输入您的验证码', trigger: 'blur'},
                        { min: 4, max: 4, message: '长度为 4 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        props:{
            isShow:Boolean
        },
        methods: {
            cancle() {
                this.$emit("cancle")
            },
            login() {
                this.$refs['loginForm'].validate(valid => {
                    if (valid) {
                        this.$http.get('/user/get',{
                            params:{
                                'username':this.loginInfo.username,
                                'password':this.loginInfo.password
                            }
                        }).then(res =>{
                            this.$message.info(res.data.msg)
                            console.log(res.data)
                            if (res.data.code == 'SUCCESS'){
                                sessionStorage.setItem("user",JSON.stringify(res.data.user))
                                this.$emit("loginSuccess")
                            }
                        })
                    } else {
                        this.$message.error('请输入正确的信息')
                    }
                })
            },
            registry() {
                this.$refs['registryForm'].validate(valid => {
                    if (valid) {
                        if (this.reg.test(this.registryInfo.email)) {
                            this.$http.put('/user', this.registryInfo).then(res => {
                                this.$message.info(res.data.msg)
                                if (res.data.code == 'SUCCESS') {
                                    this.activeName = 'login'
                                }
                            })
                        } else {
                            this.$message.error('请输入正确的邮箱地址')
                        }
                    } else {
                        this.$message.error('请输入正确的信息')
                    }
                })
            },
            reset() {
                this.$refs['resetForm'].validate(valid => {
                    if (valid) {
                        if (this.reg.test(this.resetInfo.email)) {
                            alert("yes")
                        } else {
                            this.$message.error('请输入正确的邮箱地址')
                        }
                    } else {
                        this.$message.error('请输入正确的信息')
                    }
                })
            },
            sendCaptcha(email) {
                if (this.reg.test(email)) {
                    this.$http.get('/user/captcha?email=' + email).then(res => {
                        this.openMsg()
                    })
                } else {
                    this.$message.error('请输入正确的邮箱地址')
                }
            },
            openMsg() {
                this.$notify({
                    title: '成功',
                    message: '验证码已发送，注意查看邮箱，有效期为 5 分钟，同时请注意邮箱是否正确',
                    type: 'success'
                });
            }
        }
    }
</script>

<style scoped>

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
