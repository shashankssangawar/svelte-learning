<script>
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { Card } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { authStore } from "@/stores/auth-stores";
  import { transactionsStore } from "@/stores/user-transactions";
  import CardHeader from "@/components/ui/card/card-header.svelte";
  import CardTitle from "@/components/ui/card/card-title.svelte";
  import CardContent from "@/components/ui/card/card-content.svelte";
  import Table from "@/components/ui/table/table.svelte";
  import TableHeader from "@/components/ui/table/table-header.svelte";
  import TableRow from "@/components/ui/table/table-row.svelte";
  import TableHead from "@/components/ui/table/table-head.svelte";
  import TableBody from "@/components/ui/table/table-body.svelte";
  import TableCell from "@/components/ui/table/table-cell.svelte";
</script>

<div
  class="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 grid-rows-3 gap-6 p-6 md:max-h-[80dvh] overflow-y-hidden"
>
  <!-- Left Panel -->
  <div class="grid gap-6 h-full!">
    <!-- Profile Card -->
    <Card class="h-full!">
      <CardHeader>
        <CardTitle class="text-lg font-semibold pb-4 border-b"
          >Profile</CardTitle
        >
      </CardHeader>
      <CardContent>
        <div class="flex items-center gap-4">
          <Avatar.Root class="size-20 rounded-lg">
            <Avatar.Image
              src={$authStore.user.avatar}
              alt={$authStore.user.name}
            />
            <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
          </Avatar.Root>

          <div>
            <p class="font-medium text-2xl">{$authStore.user.name}</p>
            <p class="text-sm text-muted-foreground">{$authStore.user.email}</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Subscription Card -->
    <Card class="p-6 bg-card border border-border rounded-xl h-full">
      <h2 class="text-lg font-semibold mb-4">Subscription</h2>

      <div class="space-y-2 text-sm">
        <p class="flex justify-between">
          <span class="text-muted-foreground">Status</span>
          <span>{$authStore.user.subscription.status}</span>
        </p>

        <p class="flex justify-between">
          <span class="text-muted-foreground">Current Plan</span>
          <span>{$authStore.user.subscription.plan}</span>
        </p>
      </div>

      <Button class="mt-4 w-full">Manage Billing</Button>
    </Card>
  </div>

  <!-- Right Panel -->
  <Card
    class="md:row-span-2 p-6 bg-card border border-border rounded-xl flex flex-col max-h-[500px]"
  >
    <h2 class="text-lg font-semibold mb-4">Transaction History</h2>

    <div class="overflow-y-auto max-h-[400px] pr-2">
      <Table>
        <TableHeader>
          <TableRow class="!">
            <TableHead class="font-semibold text-left py-2">Type</TableHead>
            <TableHead class="font-semibold text-left py-2"
              >Description</TableHead
            >
            <TableHead class="font-semibold text-left py-2">Date</TableHead>
            <TableHead class="font-semibold text-left py-2">Coins</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {#each $transactionsStore as t}
            <TableRow class="border-b border-border/50">
              <TableCell class="py-2">{t.type}</TableCell>
              <TableCell class="py-2">{t.desc}</TableCell>
              <TableCell class="py-2">{t.date}</TableCell>

              <TableCell
                class="py-2 font-medium
                {t.coins > 0 ? 'text-green-500' : 'text-red-500'}"
              >
                {t.coins > 0 ? `+${t.coins}` : t.coins}
              </TableCell>
            </TableRow>
          {/each}
        </TableBody>
      </Table>
    </div>
  </Card>
</div>
