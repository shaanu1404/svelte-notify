<script>
  import store from "./notification-store";
  import Notification from "./Notification.svelte";

  export let position = "bottom-right";
  $: transitionType = position === "bottom-right" ? "fade" : "fly";
</script>

<style>
  .notifications {
    position: absolute;
  }
  .bottom-right {
    bottom: 20px;
    right: 20px;
  }
  .top-right {
    top: 20px;
    right: 20px;
  }
</style>

<div class="notifications {position}">
  {#each $store as notification (notification._id)}
    <Notification
      nid={notification._id}
      text={notification.text}
      title={notification.title}
      type={notification.type}
      {transitionType} />
  {/each}
</div>
