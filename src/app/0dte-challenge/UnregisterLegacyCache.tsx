"use client";

import { useEffect } from "react";

/**
 * The retired standalone challenge page could leave a service worker or
 * Cache Storage entry pointing at challenge.css / app.js. This origin
 * no longer ships a worker — unregister anything leftover.
 */
export function UnregisterLegacyCache() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.getRegistrations().then((regs) => {
        for (const registration of regs) {
          void registration.unregister();
        }
      });
    }
    if ("caches" in window) {
      void caches.keys().then((keys) => {
        for (const key of keys) {
          if (/challenge|odte|workbox|precache|cosanalyst/i.test(key)) {
            void caches.delete(key);
          }
        }
      });
    }
  }, []);

  return null;
}
