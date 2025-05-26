import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import Index from "./pages/Index";
import SponsorsPage from "./pages/SponsorsPage";
import TeamPage from "./pages/TeamPage";
import TimelinePage from "./pages/Timeline";

import type { ReactNode } from "react";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (<Index />) as ReactNode,
  },
  {
    path: "about",
    element: (<AboutPage />) as ReactNode,
  },
  {
    path: "sponsors",
    element: (<SponsorsPage />) as ReactNode,
  },
  {
    path: "faq",
    element: (<FAQPage />) as ReactNode,
  },
  {
    path: "team",
    element: (<TeamPage />) as ReactNode,
  },
  {
    path: "timeline",
    element: (<TimelinePage />) as ReactNode,
  },
];

export default routes;
