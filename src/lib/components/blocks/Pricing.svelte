<script>
  import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  import { Card } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { BadgeDollarSign, Coins } from "@lucide/svelte";

  let activeTab = "subscription"; // "boosters"

  const plans = [
    {
      price: "$19",
      label: "BETA PLAN",
      tokens: "1,000 Tokens",
      desc: "For individuals exploring advanced AI tools.",
      services: [
        { text: "Video / Image Generation", ok: true },
        { text: "Sound Enhancer", ok: true },
        { text: "Copy Checker", ok: true },
        { text: "Chat AI Access", ok: true },
      ],
      button: "Choose Starter",
    },
    {
      price: "$30",
      label: "SIGMA PLAN",
      tokens: "3,500 Tokens",
      desc: "For collaborative teams and heavy-duty AI workloads.",
      services: [
        { text: "Video / Image Generation", ok: true },
        { text: "Sound Enhancer", ok: true },
        { text: "Copy Checker", ok: true },
        { text: "Chat AI Access", ok: true },
        { text: "Shared workspace", ok: true },
        { text: "Team usage analytics", ok: true },
        { text: "Premium support", ok: true },
      ],
      button: "Upgrade to Teams",
      highlight: true,
    },
    {
      price: "$15",
      label: "ALPHA PLAN",
      tokens: "2,000 Tokens",
      desc: "For professionals and creators who need more output.",
      services: [
        { text: "Video / Image Generation", ok: true },
        { text: "Sound Enhancer", ok: true },
        { text: "Copy Checker", ok: true },
        { text: "Chat AI Access", ok: true },
        { text: "Priority processing speed", ok: true },
        { text: "Early access to new models", ok: true },
      ],
      button: "Upgrade to Pro",
    },
  ];

  const boosters = [
    {
      name: "1500 Tokens",
      label: "CHAOS",
      price: "$10",
      desc: "Perfect for light users who need a quick boost.",
    },
    {
      name: "2500 Tokens",
      label: "DUMPSER",
      price: "$25",
      desc: "For creators handling mid-level workloads.",
    },
    {
      name: "4500 Tokens",
      label: "REGRET",
      price: "$60",
      desc: "Bulk booster for high-volume projects.",
    },
  ];
</script>

<Dialog>
  <DialogTrigger>
    <Button variant="outline">
      <BadgeDollarSign class="text-primary size-4" />
      <span>45 coins</span>
    </Button>
  </DialogTrigger>

  <DialogContent
    class="max-w-7xl! w-full bg-background p-6 rounded-xl border border-border"
  >
    <DialogHeader>
      <DialogTitle class="text-2xl font-semibold">
        Simple, transparent pricing.
      </DialogTitle>
      <DialogDescription>
        Get a subscription and use boosters to never run out of coins.
      </DialogDescription>
    </DialogHeader>

    <!-- Toggle Buttons -->
    <div
      class="flex bg-muted/30 rounded-full w-fit mx-auto mt-6 p-1 border border-border"
    >
      <button
        class="px-4 py-1 rounded-full text-sm transition
               {activeTab === 'subscription'
          ? 'bg-secondary text-secondary-foreground shadow'
          : 'text-muted-foreground hover:text-primary'}"
        on:click={() => (activeTab = "subscription")}
      >
        Subscription
      </button>

      <button
        class="px-4 py-1 rounded-full text-sm transition
               {activeTab === 'boosters'
          ? 'bg-secondary text-secondary-foreground shadow'
          : 'text-muted-foreground hover:text-primary'}"
        on:click={() => (activeTab = "boosters")}
      >
        Boosters
      </button>
    </div>

    <!-- Subscription Section -->
    {#if activeTab === "subscription"}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {#each plans as plan}
          <Card
            class="
              p-6 border-2 
              rounded-xl 
              bg-card 
              flex flex-col gap-3
              justify-between
              transition
              {plan.highlight
              ? 'border-primary shadow-md bg-primary/10'
              : 'hover:border-primary hover:bg-primary/10 opacity-70 hover:opacity-100'}
            "
          >
            <div>
              <p class="text-3xl font-bold">
                {plan.price}
                <span class="text-sm text-muted-foreground">/month</span>
              </p>

              <div class="mt-4 flex items-center gap-2">
                <span
                  class="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                >
                  {plan.label}
                </span>
                <span
                  class="ml-2 text-sm font-medium text-primary flex items-center gap-0.5"
                >
                  <Coins class="size-4" />
                  {plan.tokens}
                </span>
              </div>

              <p class="mt-3 text-sm text-muted-foreground">{plan.desc}</p>

              <ul class="mt-4 space-y-2 text-sm">
                {#each plan.services as item}
                  <li class="flex gap-2 items-center">
                    <span class="text-primary">✔</span>
                    <span>{item.text}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <Button class="mt-6 w-full">{plan.button}</Button>
          </Card>
        {/each}
      </div>
    {/if}

    <!-- Boosters Section (matching Subscription styles) -->
    {#if activeTab === "boosters"}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {#each boosters as booster}
          <Card
            class="
              p-6 border-2 
              rounded-xl 
              bg-card 
              flex flex-col gap-3
              justify-between
              transition
              {booster.highlight
              ? 'border-primary shadow-md bg-primary/10'
              : 'hover:border-primary hover:bg-primary/10 opacity-70 hover:opacity-100'}

            "
          >
            <div>
              <p class="text-3xl font-bold flex items-center gap-2">
                <Coins class="size-8 text-primary" />
                <span>{booster.name}</span>
              </p>

              <div class="mt-4 flex items-center gap-2">
                <span
                  class="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                >
                  {booster.label}
                </span>
                <span
                  class="ml-2 text-sm font-medium text-primary flex items-center gap-0.5"
                >
                  {booster.price}
                </span>
              </div>

              <p class="mt-3 text-sm text-muted-foreground">{booster.desc}</p>
            </div>

            <Button class="mt-6 w-full">Purchase</Button>
          </Card>
        {/each}
      </div>
    {/if}
  </DialogContent>
</Dialog>
