<!-- <template>
     
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img src="assets/images/home/product1.jpg" alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>Add to cart</a
                    >
                  </div>
                  <div class="product-overlay">
                    <div class="overlay-content">
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" class="btn btn-default add-to-cart"
                        ><i class="fa fa-shopping-cart"></i>Add to cart</a
                      >
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li>
                      <a href="#"
                        ><i class="fa fa-plus-square"></i>Add to wishlist</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-plus-square"></i>Add to compare</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
         
</template> -->

<template>
  <Tabs type="card" :draggable="true" @on-drag-drop="handleDragDrop">
    <TabPane
      v-for="(category, index) in categories"
      :key="index"
      :label="category.attributes.category_name"
      >
      <CategoryCard :msg="category.id"/>
    </TabPane>
  </Tabs>
</template>
<script>
import axios from "axios";
import CategoryCard from "./CategoryProductCard.vue"
export default {
  name: "ShowCategory",
  components : {
        CategoryCard
    },
  data() {
    return {
      categories: [],
      
      // tabList: [
      //   {
      //     label: "标签一",

      //   },
      //   {
      //     label: "标签二",

      //   },
      //   {
      //     label: "标签三",

      //   },
      //   {
      //     label: "标签四",
      //     name: "name4",
      //   },
      //   {
      //     label: "标签五",

      //   },
      // ],
    };
  },
  methods: {
    handleDragDrop(name, newName, a, b, names) {
      // names 为调整后的 name 集合
      this.categories.splice(
        b,
        1,
        ...this.categories.splice(a, 1, this.categories[b])
      );
    },
  },
  async created() {
    const res = await axios.get("http://localhost:1337/api/categories");
    console.log(res.data.data);
    if (res.status == 200) {
      this.categories = res.data.data;
    } else {
      this.swr();
    }
  },
};
</script>
