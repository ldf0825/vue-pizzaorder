<template>
  <div class="container">
    <nav class="navbar">
      <ul class="f-left">
        <router-link class="moveimg" to="/">
          <img src="../assets/icon.png" alt />
        </router-link>
        <router-link class="a move" style="color:black" to="/register">PIZZA点餐系统</router-link>
      </ul>
      <ul class="f-left">
        <router-link class="a" to="/">主页</router-link>
        <router-link class="a" to="/menu">菜单</router-link>
        <router-link class="a" to="/manage">管理</router-link>
        <router-link class="a" to="/about">关于我们</router-link>
      </ul>
      <ul class="f-right">
        <router-link class="a" to="/login">登录</router-link>
        <router-link class="a" to="/register">注册</router-link>
      </ul>
      <div class="clear"></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>


<style scoped>
.a {
  text-decoration: none;
}
img {
  width: 25px;
  height: 25px;
}
.container {
  height: 70px;
  max-width: 960px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: rgba(203, 210, 211, 0.3);
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
ul {
  padding: 0 20px;
}
ul a {
  padding: 0.25rem;
  color: darkgray;
}
.f-left {
  float: left;
}
.f-right {
  float: right;
}
.clear {
  clear: both;
}
</style>
