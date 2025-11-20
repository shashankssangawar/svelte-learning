<script>
  import { onMount } from "svelte";
  import { sidebarStore } from "@/stores/bread-crumb-header";
  import { authStore } from "@/stores/auth-stores";
  import { writable } from "svelte/store";
  import * as InputGroup from "$lib/components/ui/input-group/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { AI_AGENTS } from "@/constants/ai-agents.js";
  import {
    RefreshCw,
    Paperclip,
    Send,
    ArrowUpIcon,
    InfoIcon,
    PlusIcon,
    CheckIcon,
    User,
    Mail,
    MessageSquare,
    Settings,
    Sparkles,
  } from "@lucide/svelte";

  onMount(() => {
    sidebarStore.setHeader("Home");
  });

  // Reactive input
  let input = "";
  let charCount = 0;
  function handleInputChange(e) {
    input = e.target.value;
    charCount = input.length;
  }

  // Prompts
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

  // Agent selection — using writable store for full reactivity
  const agentOptions = [{ name: "Auto", avatar: null }, ...AI_AGENTS];

  const selectedAgent = writable({ name: "Auto", avatar: null });

  // File handling
  function handleFileChange(e) {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log("Attached files:", Array.from(files));
      // You can store files, show preview, upload, etc.
    }
  }
</script>

<!-- Home Page -->
<main class="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
  <div class="w-full max-w-5xl">
    <!-- Header -->
    <div class="mb-16 text-center">
      <h1 class="md:text-6xl text-4xl font-bold mb-2">
        Hi there, <span class="text-shimmer">{$authStore?.user?.name}</span>
      </h1>
      <h2 class="md:flex hidden text-6xl font-bold pb-4 text-shimmer">
        What would you like to know?
      </h2>
      <p class="md:text-sm text-xs text-muted-foreground mt-2">
        Use one of the most common prompts below or use your own to begin
      </p>
    </div>

    <!-- Prompt Cards -->
    <div
      class="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4 mt-8 opacity-80"
    >
      {#each prompts as prompt}
        <button
          class="bg-card/80 rounded-lg p-4 text-left hover:bg-card transition-colors border shadow-sm cursor-pointer"
          on:click={() => (input = `${prompt.title} ${prompt.subtitle}`)}
        >
          <div class="flex flex-col h-full">
            <svelte:component
              this={prompt.icon}
              class="w-5 h-5 mb-3 text-muted-foreground"
            />
            <div class="text-sm font-medium leading-tight">{prompt.title}</div>
            <div class="text-sm text-muted-foreground mt-1">
              {prompt.subtitle}
            </div>
          </div>
        </button>
      {/each}
    </div>

    <!-- Refresh Prompts -->
    <div class="flex mb-12">
      <button
        class="flex items-center gap-2 text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors"
      >
        <RefreshCw class="w-4 h-4" />
        Refresh Prompts
      </button>
    </div>

    <!-- Input Box -->
    <InputGroup.Root>
      <InputGroup.Textarea
        placeholder="Ask, Search or Chat..."
        bind:value={input}
        on:input={handleInputChange}
      />

      <InputGroup.Addon align="block-end">
        <!-- Attach File Button (NOW WORKS!) -->
        <label for="file-upload" class="cursor-pointer">
          <InputGroup.Button variant="outline" class="rounded-full">
            <Paperclip class="w-4 h-4" />
            Attach
          </InputGroup.Button>
        </label>

        <!-- Hidden file input -->
        <input
          id="file-upload"
          type="file"
          class="sr-only"
          multiple
          accept="image/*,.pdf,.doc,.docx,.txt"
          on:change={handleFileChange}
        />

        <!-- Agent Dropdown (NOW UPDATES VISUALLY!) -->
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <InputGroup.Button
                {...props}
                variant="ghost"
                class="rounded-xl gap-2"
              >
                {#if $selectedAgent?.avatar}
                  <img
                    src={$selectedAgent.avatar}
                    alt={$selectedAgent.name}
                    class="w-5 h-5 rounded-full"
                  />
                {:else}
                  <Sparkles class="w-4 h-4" />
                {/if}
                {$selectedAgent.name}
              </InputGroup.Button>
            {/snippet}
          </DropdownMenu.Trigger>

          <DropdownMenu.Content
            side="top"
            align="start"
            class="[--radius:0.95rem]"
          >
            {#each agentOptions as option}
              <DropdownMenu.Item
                on:click={() => selectedAgent.set(option)}
                class="flex items-center gap-3"
              >
                {#if option?.avatar}
                  <img
                    src={option.avatar}
                    alt={option.name}
                    class="w-5 h-5 rounded-full"
                  />
                {:else}
                  <Sparkles class="w-4 h-4" />
                {/if}
                <span>{option.name}</span>
                {#if $selectedAgent.name === option.name}
                  <CheckIcon class="w-4 h-4 ml-auto" />
                {/if}
              </DropdownMenu.Item>
            {/each}
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        <!-- Usage Indicator -->
        <InputGroup.Text class="ml-auto text-xs">52% used</InputGroup.Text>

        <Separator orientation="vertical" class="h-6 mx-2" />

        <!-- Send Button -->
        <InputGroup.Button
          variant="default"
          class="rounded-full"
          size="icon"
          disabled={!input.trim()}
        >
          <ArrowUpIcon class="w-5 h-5" />
          <span class="sr-only">Send</span>
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup.Root>
  </div>
</main>

<style>
  /* Optional: better visually hidden class if not using Tailwind's sr-only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
