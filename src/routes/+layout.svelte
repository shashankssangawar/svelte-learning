<script>
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import ChatSidebar from "@/components/blocks/ChatSidebar.svelte";
  import { ModeWatcher } from "mode-watcher";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<ChatSidebar>
  {@render children()}
</ChatSidebar>
