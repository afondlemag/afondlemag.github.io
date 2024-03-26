<script lang="ts">
  import { fade } from "svelte/transition";
  import { currentTab } from "./tabsStore.ts";
  export let key: string;
</script>

{#if $currentTab === key}
  <div class="item" transition:fade>
    <slot />
  </div>
{/if}

<style>
  .item {
    grid-column: 1 /-1;
    grid-row: 1 /-1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
    padding-block: var(--space-xs);
  }
</style>
