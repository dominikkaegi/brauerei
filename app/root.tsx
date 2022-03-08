import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { CookieBanner } from "./components/CookieBanner";
import { Footer } from "./components/Footer";

export const meta: MetaFunction = () => {
  return {
    title: 'Kägi Bräu',
    description: 'Bier aus der March.',
  };
};


export default function App() {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
