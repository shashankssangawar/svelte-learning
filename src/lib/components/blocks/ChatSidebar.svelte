<script>
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { sidebarStore } from "@/stores/bread-crumb-header";
  import { onMount } from "svelte";
  import ModeToggle from "../ui/mode-toggle/ModeToggle.svelte";
  import Pricing from "./Pricing.svelte";
  import { authStore } from "@/stores/auth-stores";
  import Button from "../ui/button/button.svelte";
  import { INTERNAL_LINKS } from "@/constants/urls";

  let { children } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <Sidebar.Inset>
    <header
      class="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear px-4"
    >
      <div class="flex items-center gap-2">
        <Sidebar.Trigger class="-ml-1" />
        <Separator
          orientation="vertical"
          class="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Page>{$sidebarStore.header}</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
      <div class="flex items-center gap-2">
        <ModeToggle />
        <Pricing />
        <a href={INTERNAL_LINKS.PROFILE}>
          <Button variant="outline" size="icon">
            <Avatar.Root class="size-8 rounded-lg">
              <Avatar.Image
                src={$authStore.user.avatar}
                alt={$authStore.user.name}
                class="rounded-sm!"
              />
              <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
            </Avatar.Root>
          </Button>
        </a>
      </div>
    </header>
    {@render children()}
  </Sidebar.Inset>
</Sidebar.Provider>
