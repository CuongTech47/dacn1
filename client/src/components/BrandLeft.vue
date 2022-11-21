<template>
  <div class="brands_products">
    <h2>thương hiệu sản phẩm</h2>
    <div class="brands-name">
      <ul class="nav nav-pills nav-stacked" v-for="(brand, i) in brands" :key="i">
        <li>
          <a href="#"> {{brand.attributes.brand_name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      
      brands: []
    };
  },
  async created() {
    const res = await axios.get("http://localhost:1337/api/brands");
    console.log(res.data.data)
    if (res.status == 200) {
      this.brands = res.data.data;
    } else {
      this.swr();
    }
  },
};
</script>
