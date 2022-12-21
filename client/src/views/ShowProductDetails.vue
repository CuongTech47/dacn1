<template>
  <div v-for="product in products" :key="product.id">
    <div v-if="product.id == this.$route.params.id">
      <div class="product-details">
        <div class="col-sm-5">
          <div class="view-product">
            <img
              :src="`http://localhost:1337${product.attributes.product_image.data.attributes.url}`"
              alt=""
            />
            <h1>ZOOM</h1>
          </div>
          <div id="similar-product" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
              <div class="item active">
                <!-- <a href=""><img src="/assets/images/home/girl3.jpg" alt="" /></a>
              <a href=""><img src="{{URL::to('public/frontend/images/similar2.jpg')}}" alt=""></a>
										  <a href=""><img src="{{URL::to('public/frontend/images/similar3.jpg')}}" alt=""></a> -->
              </div>
            </div>
            <!-- Controls -->
            <a
              class="left item-control"
              href="#similar-product"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="right item-control"
              href="#similar-product"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="product-information">
            <!--/product-information-->
            <img
              src="images/product-details/new.jpg"
              class="newarrival"
              alt=""
            />
            <h2>{{ product.attributes.product_name }}</h2>
            <p>Mã ID: {{ product.id }}</p>
            <img src="images/product-details/rating.png" alt="" />

      
              <span>
                <span>{{ product.attributes.product_price }}</span>
              </span>
               <!-- <label>Số lượng:</label>
               <InputNumber :max="10" :min="1" v-model="product_quantity" /> -->
               <Button type="primary" @click="addToCart(product)">Thêm giỏ hàng</Button>
               <!-- <h1>{{cart.length}} in cart</h1> -->
              
              
             
                  <!-- <input
                    name="product_quantity"
                    type="number"
                    min="1"
                    value="1"
                    id="product_quantity"
                  /> -->
                  
                   
                  
            

           
            <!-- <form v-on:submit.prevent="saveCard">
              <input
                  type="hidden"
                  :value="`${product.id}`"
                  class="cart_product_id_{{$value->product_id}}"
                /> -->

              <!-- <input type="hidden" value="{{$value->product_name}}" class="cart_product_name_{{$value->product_id}}">

                                            <input type="hidden" value="{{$value->product_image}}" class="cart_product_image_{{$value->product_id}}">

                                            <input type="hidden" value="{{$value->product_quantity}}" class="cart_product_quantity_{{$value->product_id}}">

                                            <input type="hidden" value="{{$value->product_price}}" class="cart_product_price_{{$value->product_id}}">

              <span>
                <span>{{ product.attributes.product_price }}</span>

                <label>Số lượng:</label>
                <input
                  name="product_quantity"
                  type="number"
                  min="1"
                  value="1"
                  id="product_quantity"
                />
                <input id="id" name="id" type="hidden" />
              </span>
              <input
                type="button"
                value="Thêm giỏ hàng"
                class="btn btn-primary btn-sm add-to-cart"
              />
            </form> -->

            <p><b>Tình trạng:</b> Còn hàng</p>
            <p><b>Điều kiện:</b> Mơi 100%</p>
            <p><b>Số lượng kho còn:</b> {{}}</p>
            <p>
              <b>Thuong Hieu:</b>
              {{ product.attributes.category.data.attributes.category_name }}
            </p>
            <p>
              <b>Danh mục:</b>
              {{ product.attributes.brand.data.attributes.brand_name }}
            </p>
            <a href=""
              ><img
                src="images/product-details/share.png"
                class="share img-responsive"
                alt=""
            /></a>
          </div>
          <!--/product-information-->
        </div>
      </div>
      <div class="category-tab shop-details-tab">
        <div class="col-sm-12">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#details" data-toggle="tab">Mô tả</a>
            </li>
            <li>
              <a href="#companyprofile" data-toggle="tab">Chi tiết sản phẩm</a>
            </li>

            <li><a href="#reviews" data-toggle="tab">Đánh giá</a></li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade active in" id="details">
            <p>{{ product.attributes.product_desc }}</p>
          </div>

          <div class="tab-pane fade" id="companyprofile">
            <p>{{ product.attributes.product_content }}</p>
          </div>

          <div class="tab-pane fade" id="reviews">
            <div class="col-sm-12">
              <ul>
                <li>
                  <a href=""><i class="fa fa-user"></i>EUGEN</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-clock-o"></i>12:41 PM</a>
                </li>
                <li>
                  <a href=""><i class="fa fa-calendar-o"></i>31 DEC 2014</a>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p><b>Write Your Review</b></p>

              <form action="#">
                <span>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                </span>
                <textarea name=""></textarea>
                <b>Rating: </b>
                <img src="images/product-details/rating.png" alt="" />
                <button type="button" class="btn btn-default pull-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RecommendedItem :productCatId="product.attributes.category.data.id" />
    </div>
  </div>

  <!--/product-details-->

  <!--/recommended_items-->
  <ul class="pagination pagination-sm m-t-none m-b-none"></ul>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import CategoryTab from "../components/CategoryTab.vue";
import RecommendedItem from "../components/RecommendedItem.vue";
export default {
  name: "ShowProductDetails.vue",

  components: {
    CategoryTab,
    RecommendedItem,
  },
  data() {
    return {

    }
  },
  // data() {
  //   return {
  //     data: {
       
  //     },
  //     products: [],
  //     cart: []
  //   };
  // },
  // methods: {
  //   addItemToCard(product) {
  //     this.cart.push(product)
  //   }
  // },
  // async created() {
  //   const res = await axios.get(
  //     "http://localhost:1337/api/products?populate=*"
  //   );
  //   console.log(res.data.data);
  //   if (res.status == 200) {
  //     this.products = res.data.data;
  //   } else {
  //     this.swr();
  //   }
  // },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    
    ...mapActions((["getProducts" , "addToCart"])),
    
  },
  mounted() {
    this.getProducts()
  }
};
</script>
