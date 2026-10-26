import type { Messages } from "@/messages/types";

export const clientNamespaces = [
  "Nav",
  "LocaleSwitcher",
] as const satisfies readonly (keyof Messages)[];

type ClientMessages = Pick<Messages, (typeof clientNamespaces)[number]>;

export function pickClientMessages(messages: Messages): ClientMessages {
  return Object.fromEntries(clientNamespaces.map((ns) => [ns, messages[ns]])) as ClientMessages;
}
