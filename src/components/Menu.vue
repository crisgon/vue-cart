<template>
  <header class="header">
    <nav class="nav">
      <table>
        <ul class="nav-links">
          <li class="link">
            <router-link to="/">All Products</router-link>
          </li>
          <li class="link">
            <router-link to="/smartphones">Smartphones</router-link>
          </li>
          <li class="link">
            <router-link to="/notebooks">Notebooks</router-link>
          </li>
        </ul>
      </table>
    </nav>
    <slot></slot>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
  .header {
    width: 100%;
    height: 70px;
    background-color: #333333;
    box-sizing: border-box;
    padding: .5em;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .nav {
    width: 600px;
  }

  .nav-links {
    width: 100%;
    display: flex;
    justify-content: flex-start;

  }


  .link {
    list-style: none;
    padding: 0 2em;
  }

  .link a {
    color: #fff;
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {

    .header{
      width: 100%;
      height: 130px;
      padding: 0em;
      display: flex;
      margin-top: -20px;
    }

    .nav-links {
      width: 100%;
      display: flex;
      position: inline-block;
      top: 10px;
      right: 0px;
    }

    .link {
      list-style: none;
      padding: 0 2.44em;
    }

    .cart {
      position: absolute;
      top: 125px;
      right: 50px;
    }

    .btn-popup {
      position: absolute;
      top: 40px;
      right: 185px;
      align-items: center;
      justify-content: center;
    }
  }

</style>
