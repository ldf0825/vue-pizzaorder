<template>
  <div class="container">
    <div class="row">
      <div class="col card">
        <div class="card-header">点餐文档</div>
        <div class="card-body">
          <h4 class="card-title">点餐文档</h4>
          <p class="card-text">1842622614@qq.com</p>
        </div>
      </div>
      <div class="col card">
        <div class="card-header">快递信息</div>
        <div class="card-body">
          <h4 class="card-title">快递信息</h4>
          <p class="card-text">1842622614@qq.com</p>
        </div>
      </div>
      <div class="col card last">
        <div class="card-header">历史订单</div>
        <div class="card-body">
          <h4 class="card-title">历史订单</h4>
          <p class="card-text">1842622614@qq.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 960px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
}
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.col {
  position: relative;
  width: 30%;
  float: left;
  min-height: 1px;
  margin-right: 2.68rem;
  margin-bottom: 1rem;
}
.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.last {
  margin-right: 0;
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}
.card-title {
  margin-bottom: 0.75rem;
}
h4 {
  font-size: 1.5rem;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 0;
}
</style>