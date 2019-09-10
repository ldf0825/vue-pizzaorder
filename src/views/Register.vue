<template>
  <div class="register">
    <div class="logo">
      <img src="../assets/blueY.png" alt />
    </div>
    <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
      <label>邮箱</label>
      <input v-model="newUser.email" type="email" name="email" :error="errors.email" class="box" />
      <label>密码</label>
      <input
        v-model="newUser.password"
        type="password"
        name="password"
        :error="errors.password"
        class="box"
      />
      <label>确认密码</label>
      <input
        v-model="newUser.confirmPassword"
        type="password"
        name="confirmPassword"
        :error="errors.confirmPassword"
        class="box"
      />
      <input type="submit" class="btn btn-info btn-block mt-4" />
    </form>
  </div>
</template>

<script>
import { maxHeaderSize } from "http";
export default {
  name: "register",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
        console.log(this.newUser);
      this.$axios
        .post(
          "https://wd4565587092snmqvb.wilddogio.com/ldfusers.json",
          this.newUser
        )
        .then(res => {
          console.log(this.newUser);
          console.log(res.data);
          this.errors = {};
          this.$router.push("/login");
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    }
  }
};
</script>


<style scoped>
.register {
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
