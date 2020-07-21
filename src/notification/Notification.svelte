<script>
  import { fade, fly } from "svelte/transition";
  import { remove } from "./index";
  import { elasticOut } from "svelte/easing";

  export let nid;
  export let text = "";
  export let title;
  export let type;
  export let transitionType = "fly";

  function customTransition(
    node,
    { duration = 400, x = 0, y = 0, opacity = 0 }
  ) {
    return {
      duration,
      css: (t, u) => {
        // t = 0 to 1, u = (1 - t)
        if (transitionType === "fly")
          return `
          transform: translate(${x * (1 - t)}px,${y * (1 - t)}px); 
          opacity: ${t};
        `;
        else
          return `
          opacity: ${t};
        `;
      }
    };
  }
</script>

<style>
  .notification {
    max-width: 300px;
    padding: 16px;
    padding-right: 0;
    margin: 10px 0;
    text-transform: capitalize;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 0.3);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
  }

  .notification.default {
    background: rgb(194, 194, 194);
    color: black;
    border: 1px solid rgb(150, 150, 150);
    border-left: 4px solid rgb(150, 150, 150);
  }

  .notification.danger {
    background: rgb(255, 72, 72);
    border: 1px solid rgb(235, 15, 15);
    border-left: 4px solid rgb(235, 15, 15);
    color: white;
  }

  .notification.success {
    background: rgb(23, 153, 12);
    border: 1px solid rgb(15, 116, 6);
    border-left: 4px solid rgb(15, 116, 6);
    color: white;
  }

  .notification.warning {
    background: rgb(255, 144, 69);
    border: 1px solid rgb(238, 103, 12);
    border-left: 4px solid rgb(238, 103, 12);
    color: white;
  }

  .notification.info {
    background: rgb(69, 150, 255);
    border: 1px solid rgb(8, 97, 214);
    border-left: 4px solid rgb(8, 97, 214);
    color: white;
  }
  .notification .notification__content {
    padding-right: 16px;
  }
  .notification .notification__content--title {
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 5px;
  }
  .notification .notification__content--text {
    font-size: 0.9rem;
    margin: 0;
    word-wrap: break-word;
    overflow: hidden;
  }

  .notification .notification__close {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    text-align: right;
    text-transform: uppercase;
    padding: 0 6px;
    border-left: 1px solid rgba(0, 0, 0, 0.199);
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  .notification.info .notification__close,
  .notification.danger .notification__close,
  .notification.warning .notification__close,
  .notification.success .notification__close {
    color: white;
    border-left-color: rgba(255, 255, 255, 0.438);
  }
  .notification .notification__close span {
    cursor: pointer;
  }
</style>

<div
  class="notification {type || 'default'}"
  transition:customTransition={{ x: 50, duration: 200 }}>
  <div class="notification__content">
    {#if title}
      <h1 class="notification__content--title">{title}</h1>
    {/if}
    <p class="notification__content--text">{text}</p>
  </div>
  <div class="notification__close">
    <span on:click={() => remove(nid)}>&times;</span>
  </div>
</div>
