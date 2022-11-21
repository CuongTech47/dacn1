<template>
    <div class="col-sm-9 padding-right">
        <div class="features_items">
          <div v-for="(category, i) in categories" :key="i">
            <div v-if="category.id == this.$route.params.id">
              <h2 class="title text-center">{{category.attributes.category_name}}</h2>
              <CategoryProductCard :catID="category.id"/>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import Slider from "../components/Slider.vue";
  import Footer from "../components/Footer.vue";
  import CategoryLeft from "../components/CategoryLeft.vue";
  import BrandLeft from "../components/BrandLeft.vue"
  import CategoryProductCard from "../components/CategoryProductCard.vue";
  // import ShowCategory from "../components/ShowCategory.vue";
  import ProductList from "../components/ProductList.vue";
  import axios from "axios";
  export default {
    name: "Home",
    components: {
      Header,
      Slider,
      CategoryLeft,
      BrandLeft,
      Footer,
      ProductList,
      CategoryProductCard
    },

    data() {
      return {
        categories : []
      }
     
    },
    async created() {
    const res = await axios.get("http://localhost:1337/api/categories");
    console.log(res.data.data);
    console.log(this.$route.params)
    if (res.status == 200) {
      this.categories = res.data.data;
    } else {
      this.swr();
    }
  },
    
  };
  </script>
  
  <style lang="less" scoped></style>
  