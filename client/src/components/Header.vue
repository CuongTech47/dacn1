<template>
  <header id="header">
    <div class="header_top">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"><i class="fa fa-phone"></i> +14141414</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-envelope"></i> info@domain.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <!-- <li><a href="#"><i class="fa fa-linkedin"></i></a></li> -->
                <!-- <li><a href="#"><i class="fa fa-dribbble"></i></a></li> -->
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-middle">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <a href=""><img src="/assets/images/home/logo.png" alt="" /></a>
            </div>
            <!-- <div class="btn-group pull-right">
            <div class="btn-group">
              <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                USA
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Canada</a></li>
                <li><a href="#">UK</a></li>
              </ul>
            </div>
            
            <div class="btn-group">
              <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                DOLLAR
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#">Canadian Dollar</a></li>
                <li><a href="#">Pound</a></li>
              </ul>
            </div>
          </div> -->
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <Dropdown>
                    <a href="#"><i class="fa fa-user"></i> Account</a>
                  </Dropdown>
                  
                </li>
                <li>
                  <Dropdown>
                    <a href="#"><i class="fa fa-star"></i> Wishlist</a>
                  </Dropdown>
                 
                </li>
                <li>
                  <Dropdown><a href="#"><i class="fa fa-crosshairs"></i> Checkout</a></Dropdown>
                </li>
                  <CartItem/>
                <li>
                  <Dropdown>
                    <a href="http://localhost:1337/api/connect/auth0"><i class="fa fa-lock"></i> Login</a>
                  </Dropdown>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <!-- <div class="mainmenu pull-left">
            <ul class="nav navbar-nav collapse navbar-collapse">
              <li><a href="#" class="active">Home</a></li>
              <li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                  <ul role="menu" class="sub-menu">
                                      <li><a href="#">Products</a></li>
                  <li><a href="#">Product Details</a></li> 
                  <li><a href="#">Checkout</a></li> 
                  <li><a href="#">Cart</a></li> 
                  <li><a href="#">Login</a></li> 
                                  </ul>
                              </li> 
              <li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
                                  <ul role="menu" class="sub-menu">
                                      <li><a href="#">Blog List</a></li>
                  <li><a href="#">Blog Single</a></li>
                                  </ul>
                              </li> 
              <li><a href="#">404</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div> -->
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  
</template>
<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem.vue';
    export default {
      name : 'Header',
      components : {
        CartItem
      },
      
        
    }
</script>