<template>
  <div class="category-tab shop-details-tab">
    <div v-for="(product, i) in products" :key="i">
      <div v-if="product.id == this.$route.params.id">
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
            <p>{{product.attributes.product_desc}}</p>
          </div>

          <div class="tab-pane fade" id="companyprofile">
            <p>{{product.attributes.product_content}}</p>
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
    </div>
  </div>
  <!--/category-tab-->
</template>
<script>
import axios from "axios";
export default {
  name: "CategoryTab",

  data() {
    return {
      products: [],
    };
  },
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
