<template>
  <li>
    <Dropdown>
      <router-link to="/cart">
        <i class="fa fa-shopping-cart"></i> Cart
        <Space size="large">
          <Badge :count="totalQty" />
        </Space>
      </router-link>

      <template #list>
        <DropdownMenu>
          
            <DropdownItem style="width: 400px">
              <p>{{totalQty}} san pham</p>

              <div v-for="product in cart" :key="product.id">
                <Card :bordered="false" dis-hover style="width: 370px">
                  <Row>
                    <Col span="8">
                      <Image :src="`http://localhost:1337${product.attributes.product_image.data.attributes.url}`" :fit="cover" width="100px" height="100px" :alt="cover" />
                    </Col>
                    <Col span="14" >
                      <h4>{{product.attributes.product_name}}</h4>
                      <h4>{{product.attributes.product_price}}</h4>
                      <h4>{{product.qty}}</h4>
                    </Col>
                    <Col span="2">
                      <Button :size="buttonSize" type="text" icon="md-close" @click="removeProduct(product.id)"></Button>
                
                    </Col>
                  </Row>
                  <!-- <div style="text-align:center">
                <img style="width: 40px" src="https://dev-file.iviewui.com/stJXDnKhL5qEBD0dHSDDTKbdnptK6mV5/large">
                <p>A high quality UI Toolkit based on Vue.js</p>
            </div> -->
                </Card>
              </div>
            </DropdownItem>
         
        </DropdownMenu>
      </template>
    </Dropdown>
  </li>
</template>
<script>
import { DropdownItem, Modal } from "view-ui-plus";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CartItem",
  data() {
    return {
      // modal2: false,
      url: "https://file.iviewui.com/images/image-demo-11.jpg",
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
  methods: {
    handleOpen() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    ...mapActions(["addQty", "reduceQty", "removeProduct"]),
  },
  components: { DropdownItem, Modal },
};
</script>
