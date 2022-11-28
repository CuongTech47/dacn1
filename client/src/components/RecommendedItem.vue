<template>
  <div class="recommended_items">
    <!--recommended_items-->
    <h2 class="title text-center">Sản phẩm liên quan</h2>

    <div
      id="recommended-item-carousel"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="item active">
          <div v-for="(product, i) in products" :key="i">
            <div v-if="product.attributes.category.data.id == productCatId & product.id != this.$route.params.id">
              <div class="col-sm-4">
                <div class="product-image-wrapper">
                  <div class="single-products">
                    <div class="productinfo text-center product-related">
                      <img
                        :src="`http://localhost:1337${product.attributes.product_image.data.attributes.url}`"
                        alt=""
                      />
                      <h2>{{ product.attributes.product_price }}</h2>
                      <p>{{ product.attributes.product_name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--/recommended_items-->
</template>
<script>
import axios from "axios";
export default {
  name: "RecommendedItem.vue",
  props: {
    productCatId: Number,
  },
  data() {
    return {
      data: {},
      products: [],
    };
  },
  // methods: {},
  async created() {
    const res = await axios.get(
      "http://localhost:1337/api/products?populate=*"
    );
    console.log(res.data.data);
    if (res.status == 200) {
      this.products = res.data.data;
    } else {
      this.swr();
    }
  },
};
</script>
