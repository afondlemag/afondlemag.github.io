<script lang="ts">
  import { fade } from "svelte/transition";
  import { slide } from "../../lib/svelte/transitions/slide";

  let isOpen = false;

  const handleClick = () => {
    isOpen = !isOpen;
    if (isOpen) document?.body.style.setProperty("overflow", "hidden");
    else document?.body.style.removeProperty("overflow");
  };
</script>

{#key isOpen}
  <button
    on:click={handleClick}
    class="text-shadow open"
    aria-expanded={isOpen}
    transition:fade
  >
    {#if !isOpen}
      MENU
    {:else}
      FERMER
    {/if}
  </button>
{/key}

{#if isOpen}
  <div
    class="content"
    in:slide={{ direction: "right" }}
    out:slide={{ direction: "right", delay: 200 }}
    aria-expanded="true"
  >
    <slot />
  </div>
{/if}

<style>
  button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    height: 100%;
    background: var(--color-green-1);
    font-weight: 500;
    z-index: 999999;
  }

  .content {
    position: fixed;
    inset: 0;
    z-index: 9999;
  }
</style>
