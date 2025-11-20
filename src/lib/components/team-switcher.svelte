<script>
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { useSidebar } from "$lib/components/ui/sidebar/index.js";
  import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
  import PlusIcon from "@lucide/svelte/icons/plus";
  import Logo from "./blocks/Logo.svelte";
  import { INTERNAL_LINKS } from "@/constants/urls";

  // This should be `Component` after @lucide/svelte updates types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let { teams } = $props();
  const sidebar = useSidebar();

  let activeTeam = $state(teams[0]);
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Sidebar.MenuButton
            {...props}
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-transparent!"
          >
            <a href={INTERNAL_LINKS.HOME}>
              <div
                class="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 p-1 items-center justify-center rounded-lg"
              >
                <Logo class="size-4" />
              </div>
            </a>
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
