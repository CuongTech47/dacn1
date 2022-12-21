<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li class="active">Shopping Cart</li>
        </ol>
      </div>
      <div class="table-responsive cart_info">
        <table class="table table-condensed">
          <thead>
            <tr class="cart_menu">
              <td class="image">Hinh Anh</td>
              <td class="description">Ten San Pham</td>
              <td class="price">Gia</td>
              <td class="quantity">So Luong</td>
              <td class="total">Tong</td>
              <td></td>
            </tr>
          </thead>
          <tbody v-for="product in cart" :key="product.id">
           
                <tr>
                    <td class="cart_product">
                      <a href=""><img :src="`http://localhost:1337${product.attributes.product_image.data.attributes.url}`" width="50" alt="" /></a>
                    </td>
                    <td class="cart_description">
                      <h4><a href="">{{product.attributes.product_name}}</a></h4>
                      <p>Web ID: {{product.id}} </p>
                    </td>
                    <td class="cart_price">
                      <p>{{ product.attributes.product_price.toLocaleString('vi-VN', {currency: 'VND', style: 'currency'})}}</p>
                    </td>
                    <td class="cart_quantity">
                      <div class="cart_quantity_button">
                        
                        <a class="cart_quantity_down" @click="reduceQty(product.id)"> - </a>
                        <input
                          class="cart_quantity_input"
                          type="text"
                          name="quantity"
                          :value="product.qty"
                          autocomplete="off"
                          size="2"
                        />
                        <!-- <InputNumber   size="small" :max="10" :min="1" v-model="product.qty" /> -->
                        <a class="cart_quantity_up" @click="addQty(product.id)"> + </a>
                        <!-- <Button type="primary" icon="ios-skip-forward"></Button> -->
                      </div>
                    </td>
                    <td class="cart_total">
                      <p class="cart_total_price">{{product.attributes.product_price * product.qty}}</p>
                    </td>
                    <td class="cart_delete">
                      <a class="cart_quantity_delete" @click="removeProduct(product.id)"
                        ><i class="fa fa-times"></i
                      ></a>
                    </td>
                  </tr>
            
                
            
            
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section id="do_action">
    <div class="container">
        <!-- <div class="heading">
            <h3>What would you like to do next?</h3>
            <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
        </div> -->
        <div class="row">
            <!-- <div class="col-sm-6">
                <div class="chose_area">
                    <ul class="user_option">
                        <li>
                            <input type="checkbox">
                            <label>Use Coupon Code</label>
                        </li>
                        <li>
                            <input type="checkbox">
                            <label>Use Gift Voucher</label>
                        </li>
                        <li>
                            <input type="checkbox">
                            <label>Estimate Shipping & Taxes</label>
                        </li>
                    </ul>
                    <ul class="user_info">
                        <li class="single_field">
                            <label>Country:</label>
                            <select>
                                <option>United States</option>
                                <option>Bangladesh</option>
                                <option>UK</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>Ucrane</option>
                                <option>Canada</option>
                                <option>Dubai</option>
                            </select>
                            
                        </li>
                        <li class="single_field">
                            <label>Region / State:</label>
                            <select>
                                <option>Select</option>
                                <option>Dhaka</option>
                                <option>London</option>
                                <option>Dillih</option>
                                <option>Lahore</option>
                                <option>Alaska</option>
                                <option>Canada</option>
                                <option>Dubai</option>
                            </select>
                        
                        </li>
                        <li class="single_field zip-field">
                            <label>Zip Code:</label>
                            <input type="text">
                        </li>
                    </ul>
                    <a class="btn btn-default update" href="">Get Quotes</a>
                    <a class="btn btn-default check_out" href="">Continue</a>
                </div>
            </div> -->
            <div class="col-sm-6">
                <div class="total_area">
                    <ul>
                        <li>Tạm tính <span>{{totalPrice}}</span></li>
                        <li>Thue <span>$2</span></li>
                        <li>Phí giao hàng <span>Free</span></li>
                        <li>Tổng <span>{{totalPrice}}</span></li>
                    </ul>
                        <a class="btn btn-default update" href="">Update</a>
                        <a class="btn btn-default check_out" href="">Check Out</a>
                </div>
            </div>
        </div>
    </div>
</section><!--/#do_action-->
  <!--/#cart_items-->
</template>
<script>
import { mapGetters ,mapActions } from 'vuex';
export default {
  name: "ShowCart",
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(["cart"]),
    totalPrice() {
        console.log(this.cart)
        return this.cart.reduce((a , b) => a+b.qty * b.attributes.product_price, 0)
        
        
    }
  },
  methods: {
    
    ...mapActions(["addQty", "reduceQty", "removeProduct"]),
  },
};
</script>
