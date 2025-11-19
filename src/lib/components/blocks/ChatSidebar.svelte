<script>
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { sidebarStore } from "@/stores/bread-crumb-header";
  import { onMount } from "svelte";
  import ModeToggle from "../ui/mode-toggle/ModeToggle.svelte";

  let { children } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <Sidebar.Inset>
    <header
      class="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear"
    >
      <div class="flex items-center gap-2 px-4">
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
      <ModeToggle />
    </header>
    {@render children()}
  </Sidebar.Inset>
</Sidebar.Provider>
