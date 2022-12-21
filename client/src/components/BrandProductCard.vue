<template>
    <div v-for="(product, i) in products" :key="i">
      <div v-if="product.attributes.brand.data.id == this.$route.params.id"  >
          <router-link :to="`/chi-tiet-san-pham/${product.id}`">
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    
                    <img :src="`http://localhost:1337${product.attributes.product_image.data.attributes.url}`" alt="" />
                    <h2>{{(product.attributes.product_price)}} VND</h2>
                    <p>{{product.attributes.product_name}}</p>
                    <a href="#" class="btn btn-default add-to-cart"
                      ><i class="fa fa-shopping-cart"></i>Thêm giỏ hàng</a
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
          </router-link>
           
        </div>
            
    </div>
            
 
         
</template>
<script>
import axios from "axios";
export default {
  name: 'BrandProductCard',
  // props: {
  //   braID: Number
  // },
  data(){
    return {
        products: []
    }
  },
  async created() {
    const res = await axios.get("http://localhost:1337/api/products?populate=*");
    console.log(res.data.data)
    if (res.status == 200) {
      this.products = res.data.data;
    } else {
      this.swr();
    }
  },

  
}
</script>