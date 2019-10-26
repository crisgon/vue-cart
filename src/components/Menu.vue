<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/">
            <div class="navigateTo">AllProducts</div>
          </router-link>
        </li>
        <li class="link">
          <router-link to="/smartphones">
            <div class="navigateTo">Smartphones</div>
          </router-link>
        </li>
        <li class="link">
          <router-link to="/notebooks">
            <div class="navigateTo">Notebooks</div>
          </router-link>
        </li>
      </ul>
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

  .navigateTo{
    padding: 5px;  
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .router-link-exact-active .navigateTo{
    background-color: #818181;
    border: 1px solid #827f7f;
  }

  .navigateTo:hover{
    border: 1px solid #6d6d6d;
  }
</style>
