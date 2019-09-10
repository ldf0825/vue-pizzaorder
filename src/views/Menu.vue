<template>
  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <AddMenu />
        </div>
        <div class="col-sm-12 col-md-4">
          <ShopCar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddMenu from "../components/AddMenu";
import ShopCar from "../components/Shopcar";
export default {
  components: { AddMenu, ShopCar }
};
</script>

<style lang="scss" scoped>
</style>
