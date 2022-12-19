<template>
  <div class="all-menu">
    <div class="main-menu">
      <div class="main-menu_container">
        <div @mouseover="showHovered_quickStart = true" @mouseleave="showHovered_quickStart = false" class="menu-items">
          <a href="/guide/introduction.html">
            Test
          </a>
        </div>
      </div>
      <div class="main-menu_container">
        <div @mouseover="showHovered_develop = true" @mouseleave="showHovered_develop = false" class="menu-items">
          <a href="/guide/develop/smart-contracts/contracts.html">
            Develop
          </a>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHovered_quickStart: false,
        showHovered_develop: false,
        showHovered_validate: false,
        showHovered_pigeonRelayer: false,
        showHovered_forum: false,
        showHovered_discord: false,
        showHovered_github: false,
      }
    }
  }
</script>
