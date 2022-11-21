<template>
    <Header />
    <Slider />
    <section>
      <div class="container">
       
        <div class="row">
          <div class="col-sm-3">
            <h1>Brand Product</h1>
            <CategoryLeft />
            <BrandLeft />
            <div class="shipping text-center">
              <img src="assets/images/home/shipping.jpg" alt="" />
              
            </div>
          </div>
  
          <ProductList/>
        </div>
      </div>
    </section>
    <Footer />
    <router-view/>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import Slider from "../components/Slider.vue";
  import Footer from "../components/Footer.vue";
  import CategoryLeft from "../components/CategoryLeft.vue";
  import BrandLeft from "../components/BrandLeft.vue";
  // import ShowCategory from "../components/ShowCategory.vue";
  import ProductList from "../components/ProductList.vue";
  export default {
    name: "Home",
    components: {
      Header,
      Slider,
      CategoryLeft,
      BrandLeft,
      Footer,
      ProductList
    },
    setup() {},
    methods: {},
  };
  </script>
  
  <style lang="less" scoped></style>
  