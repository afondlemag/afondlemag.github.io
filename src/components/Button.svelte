<script lang="ts">
  export let href: string | undefined = undefined;
  export let buttonType: "button" | "submit" | "reset" | undefined = undefined;
  export let targetBlank = false;
  export let rounded = false;
</script>

{#if href}
  <a {href} target={targetBlank ? "_blank" : "_parent"} class:rounded>
    <slot />
    <span aria-hidden="true">
      <slot />
    </span>
  </a>
{:else}
  <button type={buttonType} on:click class:rounded>
    <slot />
    <span aria-hidden="true">
      <slot />
    </span>
  </button>
{/if}

<style>
  a,
  button {
    background: var(--color-white);
    color: var(--color-black);
    font-weight: 500;
    display: inline-block;
    border: none;
    outline: 2px solid currentColor;
    padding-inline: var(--space-xs);
    padding-block: var(--space-4xs);
    border-radius: 999rem;
    position: relative;
    & > span {
      color: var(--color-white);
      background: var(--color-black);
      position: absolute;
      inset: 0;
      padding-inline: var(--space-xs);
      padding-block: var(--space-4xs);
      clip-path: circle(0%);
      transition: clip-path 0.5s ease-in-out;
      text-align: center;
      border-radius: 999rem;
      outline: 1px solid var(--color-black);
    }
    &:where(:hover, :focus-visible) {
      /* border-color: transparent; */
      & > span {
        clip-path: circle(110%);
      }
    }
  }
  .rounded {
    padding: var(--space-3xs);
    & > span {
      padding: var(--space-3xs);
    }
  }
</style>
