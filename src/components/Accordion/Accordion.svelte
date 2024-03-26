<script lang="ts">
  import { currentAccordion } from "./accordionStore.ts";
  import { slide } from "svelte/transition";

  export let first = false;
  export let key: number;
  $: isOpen = $currentAccordion === key;

  const handleClick = () => {
    if (isOpen) $currentAccordion = null;
    else $currentAccordion = key;
  };
</script>

<div class="accordion" class:first class:isOpen>
  <button aria-expanded={isOpen} on:click={handleClick}
    ><slot name="head" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      stroke="currentColor"
      width="1em"
      height="1em"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15"
        style="--_rotate:{isOpen ? 90 : 0}"
      />
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15" />
    </svg>
  </button>
  {#if isOpen}
    <div class="content" transition:slide><slot /></div>
  {/if}
</div>

<style>
  .accordion {
    border-block-end: 1px solid var(--color-black);
    &.first {
      border-block-start: 1px solid var(--color-black);
    }
    &.isOpen {
      padding-block-end: var(--space-m);
    }
  }
  .content {
    max-width: 66ch;
  }
  button {
    background: transparent;
    border: none;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding-block: var(--space-xs);
    padding-inline: 0;
    & svg {
      font-size: var(--step-1);
    }
    & path {
      transform: rotate(calc(1deg * var(--_rotate)));
      transform-origin: center;
      transition: transform 0.3s;
    }
  }
</style>
