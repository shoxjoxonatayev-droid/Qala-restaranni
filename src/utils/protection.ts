/**
 * Client-side protection against DevTools inspection, source viewing, and content copying
 */
export function initPageProtection(): void {
  if (typeof window === 'undefined') return;

  // 1. Suppress all console logs
  try {
    const noop = () => {};
    console.log = noop;
    console.info = noop;
    console.warn = noop;
    console.debug = noop;
    console.dir = noop;
    console.table = noop;
    console.clear();
  } catch {
    // ignore if restricted
  }

  // Clear console periodically
  setInterval(() => {
    try {
      console.clear();
    } catch {
      // ignore
    }
  }, 2500);

  // 2. Disable Context Menu (Right Click)
  document.addEventListener('contextmenu', (e: MouseEvent) => {
    e.preventDefault();
    return false;
  });

  // 3. Disable DevTools and Source-View keyboard shortcuts
  window.addEventListener(
    'keydown',
    (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';

      // F12 key
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // Ctrl+Shift+I / Cmd+Option+I (Inspect)
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      // Ctrl+Shift+C / Cmd+Option+C (Element selector)
      // Ctrl+Shift+K (Firefox console)
      if (cmdOrCtrl && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c', 'K', 'k'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Mac option+cmd+I, option+cmd+J, option+cmd+U, option+cmd+C
      if (e.altKey && cmdOrCtrl && ['I', 'i', 'J', 'j', 'U', 'u', 'C', 'c'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U / Cmd+U (View Page Source)
      if (cmdOrCtrl && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S / Cmd+S (Save Page)
      if (cmdOrCtrl && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+P / Cmd+P (Print Page)
      if (cmdOrCtrl && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+A / Ctrl+C / Ctrl+X outside of editable input fields
      if (!isInput && cmdOrCtrl && ['a', 'A', 'c', 'C', 'x', 'X'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
    true
  );

  // 4. Disable Copy, Cut, and Dragging of content
  document.addEventListener('copy', (e: ClipboardEvent) => {
    const target = e.target as HTMLElement | null;
    const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';
    if (!isInput) {
      e.preventDefault();
    }
  });

  document.addEventListener('cut', (e: ClipboardEvent) => {
    const target = e.target as HTMLElement | null;
    const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';
    if (!isInput) {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', (e: DragEvent) => {
    e.preventDefault();
    return false;
  });

  document.addEventListener('selectstart', (e: Event) => {
    const target = e.target as HTMLElement | null;
    const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';
    if (!isInput) {
      e.preventDefault();
      return false;
    }
  });
}
