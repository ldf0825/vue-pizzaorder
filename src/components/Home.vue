<template>
  <div class="container">
    <div class="home">
      <div class="background">
        <h1>欢迎大家品尝pizza！</h1>
        <h2>这里有你非常喜欢的pizza！</h2>
        <a href="http://localhost:8081/menu">
          <button class="btn btn-success">Let's order!</button>
        </a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Footer
  }
};
</script>


<style scoped>
.container {
  max-width: 1080px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.home {
  background: url(../assets/pizza.jpg);
  height: 85vh;
  padding: 10%;
  text-align: center;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
h1,
h2 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  margin: 6%;
  text-align: center;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
}
.btn-success :hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
}
.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  text-align: center;
}
</style>
