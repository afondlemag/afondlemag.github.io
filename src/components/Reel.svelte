<script lang="ts">
  import Button from "./Button.svelte";

  const scrollOffset = 32;

  let wrapperElement: HTMLDivElement;

  $: reel = wrapperElement?.querySelector("div");
  $: items = wrapperElement?.querySelectorAll<HTMLDivElement>(".item");

  const slideToLeft = () => {
    if (!reel || !items) return;

    const target = [...items].find((current, index) => {
      const next = items[index + 1];
      if (!next || !reel || !isElementVisible(next, reel)) return false;

      return !isElementVisible(current, reel);
    });
    if (!target) return;
    const { left: targetLeft, width: targetWidth } =
      target.getBoundingClientRect();
    reel.scrollTo({
      left: targetLeft + reel.scrollLeft - scrollOffset,
      behavior: "smooth",
    });
  };
  const slideToRight = () => {
    if (!reel || !items) return;

    const { width: wrapperWidth } = reel.getBoundingClientRect();

    const target = [...items].find((current, index) => {
      const previous = items[index - 1];
      if (!previous || !reel || !isElementVisible(previous, reel)) return false;

      return !isElementVisible(current, reel);
    });
    if (!target) return;
    const { left: targetLeft, width: targetWidth } =
      target.getBoundingClientRect();
    const targetRight = targetLeft + targetWidth;
    reel.scrollTo({
      left: targetRight - wrapperWidth + reel.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };
  const isElementVisible = (element: HTMLElement, wrapper: HTMLElement) => {
    const { left: wrapperLeft, width: wrapperWidth } =
      wrapper.getBoundingClientRect();
    const wrapperRight = wrapperLeft + wrapperWidth;
    const { left, width } = element.getBoundingClientRect();
    return left > wrapperLeft && left + width < wrapperRight;
  };
</script>

<div class="wrapper" bind:this={wrapperElement}>
  <slot />
</div>

<div class="controls">
  <Button buttonType="button" rounded on:click={slideToLeft}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      width="1em"
      height="1em"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  </Button>
  <Button buttonType="button" rounded on:click={slideToRight}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      width="1em"
      height="1em"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  </Button>
</div>

<style>
  .wrapper :global(.reel) {
    display: flex;
    overflow-x: auto;
    gap: var(--space-xl);
    align-items: center;
    padding-inline: var(--space-s);
    padding-block: var(--space-s);
    @media (width > 40rem) {
      padding-inline: var(--space-l);
      padding-inline-start: var(--space-3xl);
    }
  }
  .wrapper :global(.reel > *) {
    flex-shrink: 0;
    inline-size: clamp(14rem, 80%, 20rem);
  }
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-l);
    font-size: var(--step-1);
    padding-block: var(--space-m);
  }
</style>
