<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li class="link">
          <a href="#">All Products</a>
        </li>
        <li class="link">
          <a href="#">Notebooks</a>
        </li>
        <li class="link">
          <a href="#">Smartphones</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style>
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
</style>
