<template>
    <div class="left-sidebar">
            <h2>danh mục sản phẩm</h2>
            <div class="panel-group category-products" id="accordian">
              <div class="panel panel-default" v-for="category in categories" :key="category.id">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link :to="`/danh-muc-san-pham/${category.id}`">{{category.attributes.category_name}}</router-link>
                    <!-- <router-link to="{name :'danh-muc-san-pham' , params : {{id : 2}}">{{category.attributes.category_name}}</router-link> -->
                </h4>
                </div>
              </div>
              
              
              
            </div>

            

            
           
          </div>
          
</template>
<script>

import axios from "axios";
export default {
  data() {
    return {
      categories: []
    };
  },
  async created() {
    const res = await axios.get("http://localhost:1337/api/categories");
    console.log(res.data.data)
    if (res.status == 200) {
      this.categories = res.data.data;
    } else {
      this.swr();
    }
  },
};
</script>