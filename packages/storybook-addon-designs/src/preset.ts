import { fileURLToPath } from "node:url";

export const managerEntries = (
  entries = [],
  options: { renderTarget?: "tab" | "panel" } = {},
) => {
  return [
    ...entries,
    options.renderTarget === "tab"
      ? fileURLToPath(
          import.meta.resolve("@storybook/addon-designs/register-tab"),
        )
      : fileURLToPath(
          import.meta.resolve("@storybook/addon-designs/register-panel"),
        ),
  ];
};
