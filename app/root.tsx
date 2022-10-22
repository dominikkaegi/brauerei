import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { CookieBanner } from "./components/CookieBanner";
import { Footer } from "./components/Footer";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: 'Kägi Bräu',
  description: 'Bier aus der March.',
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="de">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <CookieBanner />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
