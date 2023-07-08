<script setup lang="ts">
// const counter: Ref<number> = useState('counter', () => 500)
// const drawer = false
// const group:boolean = null
</script>

<template>
  <!-- <v-btn fix top right><nuxt-link to="/">Home</nuxt-link></v-btn> -->
  <header>
    <div class="header-contents">
      <div class="logotype">LOGO<span class="red"></span></div>
      <!--The hamburger appears, when the screen resolution becomes 760px-->
      <nav>
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          <li><a class="menu__item" href="#"><span class="red">Home</span></a></li>
          <li><a class="menu__item" href="#">Services</a></li>
          <li><a class="menu__item" href="#">Portfolio</a></li>
          <li><a class="menu__item" href="#">About</a></li>
          <li><a class="menu__item" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@mixin burgerSpan {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #ffffff;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4em;
  background: #2d303a;
  border-bottom: 2px solid #3c4356;
  width: 100%;
}

.header {
  &-contents {
    width: 600px;
    margin: 0 auto;
    display: flex;
  }
}

.logotype {
  font-family: sans-serif;
  font-size: 24px;
  color: #ffffff;
  margin: 0 auto;
}

nav {
  display: flex;
  align-items: center;
  display: inline;
}

.menu__box {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-direction: column;
    position: fixed;
    visibility: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 15em;
    margin: -600px 0 0 0;
    padding: 0.6em 0;
    text-align: center;
    background-color: #2d303a;
    box-shadow: 1px 0 6px rgba(0, 0, 0, .2);
    z-index: 1;
    transition-duration: 0.5s;
}

.red {color: #f06c64;}

.menu__item {
  display: flex;
  flex-direction: column;
  padding: 0 1em 0 1.9em;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  padding: 12px 24px;
  color: #ffffff;
  font-size: 18px;
  transition-duration: 0.5s;
  &:hover {background-color: #4f5464;}
}

#menu__toggle {
  opacity: 0;
  display: none;
  &:checked ~ .menu__btn > span {
    transform: rotate(45deg);
    }

  &:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
    background: #f06c64;
  }

    &:checked ~ .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
      background: #f06c64;
  }

    &:checked ~ .menu__box {
      visibility: visible;
      left: 0;
      margin: 0;
  }

}

.menu__btn {
  transition-duration: 0.25s;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 2px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 2;
  span {
    @include burgerSpan;
    &::before {
      @include burgerSpan;
      content: '';
      top: -8px;
      transition-duration: 0.25s;
    }

    &::after {
      @include burgerSpan;
      content: '';
      top: 8px;
      transition-duration: 0.25s;
    }
  }
}
</style>