import { useState, useEffect, useRef } from "react";

/**
 * Looping two-phase animated counter:
 *   Phase 1 → counts 0 → val2026   (label: "In 2026")
 *   1 s pause
 *   Phase 2 → counts val2026 → valTotal (label: "All-time Total")
 *   2.5 s pause → loops back to Phase 1
 *
 * Restarts every time the element re-enters the viewport.
 * Stops and resets when the element leaves.
 */
export function useTwoPhaseCount(val2026, valTotal, duration1 = 1400, duration2 = 1000) {
    const ref    = useRef(null);
    const stop   = useRef(false);
    const rafId  = useRef(null);
    const tmrId  = useRef(null);
    const [display, setDisplay] = useState({ value: "0", phase: 1 });

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // ── helpers ──────────────────────────────────────
        const parseNum  = (raw) => parseFloat(String(raw).replace(/[^0-9.]/g, ""));
        const getSuffix = (raw) => String(raw).replace(/[0-9,.\s]/g, "");
        const hasComma  = (raw) => String(raw).includes(",");
        const fmt = (raw, n) => {
            const r = Math.round(n);
            const s = getSuffix(raw);
            return hasComma(raw) ? r.toLocaleString("en-IN") + s : String(r) + s;
        };
        const ease = (p) => 1 - Math.pow(1 - p, 3);

        const t1 = parseNum(val2026);
        const t2 = parseNum(valTotal);

        const cancel = () => {
            stop.current = true;
            if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null; }
            if (tmrId.current) { clearTimeout(tmrId.current);         tmrId.current = null; }
        };

        // ── animation cycle ───────────────────────────────
        const runCycle = () => {
            stop.current = false;

            // Phase 1: 0 → val2026
            const s1 = performance.now();
            const tick1 = (now) => {
                if (stop.current) return;
                const p = Math.min((now - s1) / duration1, 1);
                setDisplay({ value: fmt(val2026, ease(p) * t1), phase: 1 });
                if (p < 1) {
                    rafId.current = requestAnimationFrame(tick1);
                } else {
                    // 1 s pause → Phase 2
                    tmrId.current = setTimeout(() => {
                        if (stop.current) return;
                        const s2 = performance.now();
                        const tick2 = (now2) => {
                            if (stop.current) return;
                            const p2 = Math.min((now2 - s2) / duration2, 1);
                            setDisplay({ value: fmt(valTotal, t1 + ease(p2) * (t2 - t1)), phase: 2 });
                            if (p2 < 1) {
                                rafId.current = requestAnimationFrame(tick2);
                            } else {
                                // 2.5 s hold → loop
                                tmrId.current = setTimeout(runCycle, 2500);
                            }
                        };
                        rafId.current = requestAnimationFrame(tick2);
                    }, 1000);
                }
            };
            rafId.current = requestAnimationFrame(tick1);
        };

        // ── viewport observer ─────────────────────────────
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                runCycle();
            } else {
                cancel();
                setDisplay({ value: fmt(val2026, 0), phase: 1 });
            }
        }, { threshold: 0.3 });

        observer.observe(el);
        return () => { cancel(); observer.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { ref, display };
}
