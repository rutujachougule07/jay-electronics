import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "./services";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
});
