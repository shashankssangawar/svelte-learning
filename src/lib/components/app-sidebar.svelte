<script module>
  import {
    SquareTerminal as SquareTerminalIcon,
    Bot as BotIcon,
    BookOpen as BookOpenIcon,
    Settings2 as Settings2Icon,
    Frame as FrameIcon,
    ChartPie as ChartPieIcon,
    Map as MapIcon,
  } from "@lucide/svelte";
  import AudioWaveformIcon from "@lucide/svelte/icons/audio-waveform";
  import CommandIcon from "@lucide/svelte/icons/command";
  import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";

  // This is sample data.
  const data = {
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEndIcon,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveformIcon,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: CommandIcon,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "New Chat",
        url: "#",
        icon: SquareTerminalIcon,
        isActive: true,
      },
      {
        title: "Chats History",
        url: "#",
        icon: SquareTerminalIcon,
        items: [
          {
            title: "Chat with Assistant",
            description: "General Q&A and brainstorming",
            url: "#",
          },
          {
            title: "UI Brainstorm",
            description: "Layout ideas and component structure",
            url: "#",
          },
          {
            title: "Database Schema Help",
            description: "Discussed normalization and schema tweaks",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: BotIcon,
        items: [
          { title: "Genesis", url: "#" },
          { title: "Explorer", url: "#" },
          { title: "Quantum", url: "#" },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpenIcon,
        items: [
          { title: "Introduction", url: "#" },
          { title: "Get Started", url: "#" },
          { title: "Tutorials", url: "#" },
          { title: "Changelog", url: "#" },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2Icon,
        items: [
          { title: "General", url: "#" },
          { title: "Team", url: "#" },
          { title: "Billing", url: "#" },
          { title: "Limits", url: "#" },
        ],
      },
    ],
  };
</script>

<script>
  import NavMain from "./nav-main.svelte";
  import NavProjects from "./nav-projects.svelte";
  import NavUser from "./nav-user.svelte";
  import TeamSwitcher from "./team-switcher.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { authStore } from "@/stores/auth-stores";
  let { ref = $bindable(null), collapsible = "icon", ...restProps } = $props();
</script>

<Sidebar.Root {collapsible} {...restProps}>
  <Sidebar.Header>
    <TeamSwitcher teams={data.teams} />
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMain items={data.navMain} />
  </Sidebar.Content>
  <Sidebar.Footer>
    <NavUser user={$authStore.user} />
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
