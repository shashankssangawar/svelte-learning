<!-- JS --->
<script>
  import { sidebarStore } from "@/stores/bread-crumb-header";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  import * as InputGroup from "$lib/components/ui/input-group/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { AI_AGENTS } from "@/constants/ai-agents.js";
  import {
    RefreshCw,
    Paperclip,
    Image,
    Send,
    SearchIcon,
    ArrowUpIcon,
    InfoIcon,
    PlusIcon,
    CheckIcon,
    User,
    Mail,
    MessageSquare,
    Settings,
  } from "@lucide/svelte";

  onMount(() => {
    sidebarStore.setHeader("Home");
  });

  let input = "";
  let charCount = 0;

  function handleInputChange(e) {
    input = e.target.value;
    charCount = input.length;
  }

  const prompts = [
    {
      icon: User,
      title: "Write a to-do list for a",
      subtitle: "personal project or task",
    },
    {
      icon: Mail,
      title: "Generate an email to reply",
      subtitle: "to a job offer",
    },
    {
      icon: MessageSquare,
      title: "Summarize this article or",
      subtitle: "text for me in one paragraph",
    },
    {
      icon: Settings,
      title: "How does AI work in a",
      subtitle: "technical capacity",
    },
  ];

  const agentOptions = ["Auto", ...AI_AGENTS.map((a) => a.name), "Manual"];
  let selectedAgent = "Auto";
</script>

<!-- Home -->
<main class="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
  <div class="w-full max-w-5xl">
    <!-- Header -->
    <div class="mb-16 text-center">
      <h1 class="text-6xl font-bold mb-2">
        Hi there, <span class="text-shimmer">John</span>
      </h1>

      <h2 class="text-6xl font-bold pb-4 text-shimmer">
        What would you like to know?
      </h2>

      <p class="text-sm text-muted-foreground mt-2">
        Use one of the most common prompts below or use your own to begin
      </p>
    </div>

    <!-- Prompt Cards -->
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 mt-8 opacity-80"
    >
      {#each prompts as prompt}
        <button
          class="bg-card/80 rounded-lg p-4 text-left hover:bg-card transition-colors border shadow-sm cursor-pointer"
        >
          <div class="flex flex-col h-full">
            <prompt.icon class="w-5 h-5 mb-3" />
            <div class="text-sm font-medium leading-tight">
              {prompt.title}
            </div>
            <div class="text-sm text-muted-foreground mt-1">
              {prompt.subtitle}
            </div>
          </div>
        </button>
      {/each}
    </div>

    <!-- Refresh Button -->
    <div class="flex mb-12">
      <button
        class="flex items-start gap-2 text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors"
      >
        <RefreshCw class="w-4 h-4" />
        Refresh Prompts
      </button>
    </div>

    <!-- Input Box -->
    <InputGroup.Root>
      <InputGroup.Textarea placeholder="Ask, Search or Chat..." />
      <InputGroup.Addon align="block-end">
        <!-- Attach File -->
        <label class="cursor-pointer">
          <input
            type="file"
            class="hidden"
            on:change={(e) => console.log("Attachment:", e.target.files)}
          />
          <InputGroup.Button variant="outline" class="rounded-full">
            <PlusIcon />
            Add Attachment
          </InputGroup.Button>
        </label>

        <!-- Agent Dropdown -->
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <InputGroup.Button {...props} variant="ghost" class="rounded-xl">
                {selectedAgent}
              </InputGroup.Button>
            {/snippet}
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            side="top"
            align="start"
            class="[--radius:0.95rem]"
          >
            {#each agentOptions as option}
              <DropdownMenu.Item on:click={() => (selectedAgent = option)}>
                {option}
              </DropdownMenu.Item>
            {/each}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <InputGroup.Text class="ml-auto">52% used</InputGroup.Text>
        <Separator orientation="vertical" class="h-4" />

        <InputGroup.Button
          variant="default"
          class="rounded-full"
          size="icon-xs"
        >
          <ArrowUpIcon />
          <span class="sr-only">Send</span>
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup.Root>
  </div>
</main>
