<template>
        <div class="features_items">
          <div v-for="(category, i) in categories" :key="i">
            <div v-if="category.id == this.$route.params.id">
              <h2 class="title text-center">{{category.attributes.category_name}}</h2>
              <CategoryProductCard/>
            </div>
          </div>
        </div>
   
  </template>
  
  <script>
  import CategoryProductCard from "../components/CategoryProductCard.vue";
  import axios from "axios";
  export default {
    name: "ShowCategoryProduct",
    components: {
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
  