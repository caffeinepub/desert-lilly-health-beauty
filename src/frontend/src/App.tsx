import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import BookAppointment from "./pages/BookAppointment";
import BrowsLashes from "./pages/BrowsLashes";
import Contact from "./pages/Contact";
import HairServices from "./pages/HairServices";
import Home from "./pages/Home";
import MakeupServices from "./pages/MakeupServices";
import NailServices from "./pages/NailServices";
import Offers from "./pages/Offers";
import SkinFacial from "./pages/SkinFacial";
import WaxingServices from "./pages/WaxingServices";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const hairRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/hair",
  component: HairServices,
});
const skinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/skin",
  component: SkinFacial,
});
const nailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/nails",
  component: NailServices,
});
const waxingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/waxing",
  component: WaxingServices,
});
const makeupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/makeup",
  component: MakeupServices,
});
const browsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/brows-lashes",
  component: BrowsLashes,
});
const bookRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/book",
  component: BookAppointment,
});
const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/offers",
  component: Offers,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  hairRoute,
  skinRoute,
  nailsRoute,
  waxingRoute,
  makeupRoute,
  browsRoute,
  bookRoute,
  offersRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}
