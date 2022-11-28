<template>
  
      <div class="features_items">
        <div v-for="(brand, i) in brands" :key="i">
          <div v-if="brand.id == this.$route.params.id">
            <h2 class="title text-center">{{brand.attributes.brand_name}}</h2>
            <BrandProductCard />
          </div>
        </div>
      </div>
  
</template>

<script>
import BrandProductCard from "../components/BrandProductCard.vue";
import axios from "axios";
export default {
  name: "ShowBrandProduct",
  components: {
    BrandProductCard
  },

  data() {
    return {
      brands : []
    }
   
  },
  async created() {
  const res = await axios.get("http://localhost:1337/api/brands");
  console.log(res.data.data);
  console.log(this.$route.params)
  if (res.status == 200) {
    this.brands = res.data.data;
  } else {
    this.swr();
  }
},
  
};
</script>

<style lang="less" scoped></style>
