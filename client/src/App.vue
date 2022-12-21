<template>
  <Header/>
  <Slider/>
  
  <!-- <Home/> -->
  <section>
      <div class="container">
       
        <div class="row">
          <div class="col-sm-3">
            <CategoryLeft />
            <BrandLeft />
            <div class="shipping text-center">
              <img src="/assets/images/home/shipping.jpg" alt="" />
            </div>
          </div>
          <div class="col-sm-9 padding-right">
            <router-view/>
          </div>
          
        </div>
      </div>
    </section>
  
  <Footer/>
 
</template>

<script>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import Footer from './components/Footer.vue'
import CategoryLeft from './components/CategoryLeft.vue'
import BrandLeft from './components/BrandLeft.vue'
export default {
  name: 'App',
  components :{
    Header,
    Slider,
    Footer,
    CategoryLeft,
    BrandLeft
    
  }
}
</script>