"use client";

import { useEffect } from "react";

/**
 * ContentProtection
 * - Disables text selection, copying, cutting, and dragging of page elements.
 * - Prevents right-click context menu (except inside legitimate form inputs).
 * - Disables DevTools and source inspection keyboard shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S, Ctrl+P, etc.).
 * - Traps DevTools with dynamic debugger loops when inspection tools are opened.
 * - Disables console printing / clears console output.
 * - Preserves normal interaction inside <input>, <textarea>, and contenteditable elements.
 */
export default function ContentProtection() {
  useEffect(() => {
    // Helper to check if target is an interactive form element
    const isFormField = (el: EventTarget | null): boolean => {
      if (!el || !(el instanceof HTMLElement)) return false;
      const tag = el.tagName.toUpperCase();
      return (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        el.isContentEditable ||
        Boolean(el.closest("input, textarea, select, [contenteditable='true']"))
      );
    };

    // 1. Prevent Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      if (isFormField(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 2. Prevent Copy and Cut actions
    const handleCopyCut = (e: ClipboardEvent) => {
      if (isFormField(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 3. Prevent Selection Start
    const handleSelectStart = (e: Event) => {
      if (isFormField(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 4. Prevent Dragging elements (images, text, links)
    const handleDragStart = (e: DragEvent) => {
      if (isFormField(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 5. Block DevTools and Source inspection shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
      const key = e.key ? e.key.toUpperCase() : "";
      const keyCode = e.keyCode || e.which;

      // F12 or Shift+F12
      if (key === "F12" || keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+I / Cmd+Option+I (Inspect)
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      // Ctrl+Shift+C / Cmd+Option+C (Inspect element)
      // Ctrl+Shift+K / Cmd+Option+K (Firefox console)
      // Ctrl+Shift+E / Cmd+Option+E (Network tab)
      if (
        (ctrlOrCmd && e.shiftKey && ["I", "J", "C", "K", "E"].includes(key)) ||
        (isMac && e.altKey && e.metaKey && ["I", "J", "C"].includes(key))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U / Cmd+U (View Page Source)
      if (ctrlOrCmd && key === "U") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S / Cmd+S (Save Page)
      if (ctrlOrCmd && key === "S") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+P / Cmd+P (Print Page)
      if (ctrlOrCmd && key === "P") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Block Ctrl+C / Ctrl+X / Ctrl+A outside form fields
      if (ctrlOrCmd && ["C", "X", "A"].includes(key)) {
        if (!isFormField(e.target)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }
    };

    // 6. DevTools Debugger Trap
    // When DevTools is opened, this loop pauses execution repeatedly on the debugger statement
    const devToolsTrap = () => {
      try {
        const check = () => {
          // Function constructor prevents static compiler/bundler from stripping 'debugger'
          (function () {
            return false;
          }
            ["constructor"]("debugger")
            ());
        };
        check();
      } catch {
        // Silently catch in case browser blocks eval/Function constructor
      }
    };

    // Run trap on interval
    const trapInterval = setInterval(devToolsTrap, 800);

    // 7. Clear console and suppress console logs
    const clearConsole = () => {
      try {
        console.clear();
      } catch {
        // ignore
      }
    };

    const consoleInterval = setInterval(clearConsole, 3000);

    // Attach listeners with capture = true to intercept early
    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("copy", handleCopyCut, { capture: true });
    document.addEventListener("cut", handleCopyCut, { capture: true });
    document.addEventListener("selectstart", handleSelectStart, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      clearInterval(trapInterval);
      clearInterval(consoleInterval);
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("copy", handleCopyCut, { capture: true });
      document.removeEventListener("cut", handleCopyCut, { capture: true });
      document.removeEventListener("selectstart", handleSelectStart, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, []);

  return null;
}
