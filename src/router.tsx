import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Always scroll to top on page load/refresh, regardless of scroll position or URL hash
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  // Clear any hash anchor so the URL doesn't jump to a section on refresh
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
