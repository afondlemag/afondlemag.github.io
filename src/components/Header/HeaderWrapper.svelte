<script lang="ts">
  import { linear } from "svelte/easing";
  import { tweened } from "svelte/motion";

  let scrollY = 0;
  let lastScrollY = 0;
  let translateY = tweened(0, { duration: 300, easing: linear });
  $: {
    if (scrollY > lastScrollY) $translateY = 1;
    else $translateY = 0;
    lastScrollY = scrollY;
  }
</script>

<svelte:window bind:scrollY />
<header style="--_translate:{$translateY}">
  <slot />
</header>

<style>
  header {
    position: sticky;
    top: calc(-1.3 * var(--_translate) * var(--space-2xl));
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-blue-1);
    color: var(--color-white);
    height: var(--space-2xl);
    padding-inline: var(--space-l);
    padding-block: var(--space-3xs);
    z-index: 10;
    @media (width < 60rem) {
      justify-content: center;
    }
  }
</style>
