import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { Sun } from "lucide-react";
import "./index.css";
import App from "./App.tsx";
import RecipePage from "./Recipe.tsx";

function RouterView() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      event.preventDefault();
      window.history.pushState({}, "", url.pathname);
      setPathname(url.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onDocumentClick);
    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  const RootPage = pathname === "/recipe" ? RecipePage : App;

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-200/70 bg-white/80 shadow-[0_0_30px_rgba(255,132,63,0.2)] backdrop-blur">
              <Sun className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <div className="text-xl font-black tracking-[0.08em] text-slate-900">
                Uni<span className="text-orange-500">Vol</span>
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Balcony Solar Solutions</div>
            </div>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(255,132,63,0.35)] transition hover:bg-orange-600">
              Log in
            </button>
          </div>
        </div>
      </header>

      <main className="pt-[92px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0.02 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.02 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <RootPage />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterView />
  </StrictMode>
);
