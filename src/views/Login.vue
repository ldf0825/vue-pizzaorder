<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/blueY.png" alt />
    </div>
    <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
      <label>邮箱</label>
      <input v-model="user.email" type="email" name="email" :error="errors.email" class="box" />
      <label>密码</label>
      <input
        v-model="user.password"
        type="password"
        name="password"
        :error="errors.password"
        class="box"
      />
      <input type="submit" class="btn btn-info btn-block mt-4" value="登录" />
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.user);
      this.$axios
        .get(
          "https://wd4565587092snmqvb.wilddogio.com/ldfusers.json",
          this.user
        )
        .then(res => {
          console.log(res.data);
          console.log(this.user);
          var loginstatus = false;
          for (var aaa in res.data) {
            if (
              this.user.email == res.data[aaa].email &&
              this.user.password == res.data[aaa].password
            ) {
              loginstatus = true;
              console.log("找到该用户");
              this.$router.push("/");
            } else {
              alert("请输入正确的用户名和密码！");
            }
          }
        });
    }
  }
};
</script>


<style scoped>
.login {
  max-width: 85%;
  /* height: 500px; */
  margin: 20px auto;
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 20px;
}
.logo {
  width: 100%;
  text-align: center;
}

input {
  width: 100%;
  padding: 6px 12px;
  border: 1px solid #d1cfcf;
  border-radius: 6px;
}
input:focus {
  outline: none;
  border: 2px solid rgb(138, 183, 250);
  border-radius: 6px;
}
input::-webkit-input-placeholder {
  color: rgb(228, 222, 222);
  font-size: 13px;
}
.submitBtn {
  width: 100%;
  color: #ffffff;
  background: rgb(33, 134, 33);
  border: none;
  border-radius: 6px;
  padding: 8px 0;
  margin-top: 20px;
}
</style>
