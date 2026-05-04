import { useState, useEffect, useRef } from "react";

/**
 * Returns a ref to attach to the counter element.
 * When the element enters the viewport, it counts from 0 → target
 * over `duration` ms using easeOutQuart easing.
 *
 * @param {number|string} rawTarget  The final value (e.g. "14,285" or 5192)
 * @param {number}        duration   Animation duration in ms (default 1800)
 */
export function useCountUp(rawTarget, duration = 1800) {
    const ref = useRef(null);
    const [displayed, setDisplayed] = useState("0");

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Strip non-numeric chars to get the numeric target
        const numericStr = String(rawTarget).replace(/[^0-9.]/g, "");
        const target = parseFloat(numericStr);
        if (isNaN(target)) { setDisplayed(rawTarget); return; }

        // Detect if original had a "+" suffix or "KG" etc. to append
        const suffix = String(rawTarget).replace(/[0-9,.\s]/g, "");
        // Detect comma formatting (e.g. "14,285")
        const hasCommas = String(rawTarget).includes(",");

        const format = (val) => {
            const rounded = Math.round(val);
            if (hasCommas) return rounded.toLocaleString("en-IN") + (suffix || "");
            return String(rounded) + (suffix || "");
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.unobserve(el);
                el.classList.add("is-visible"); // trigger .reveal transition

                const startTime = performance.now();

                const tick = (now) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // easeOutQuart
                    const eased = 1 - Math.pow(1 - progress, 4);
                    setDisplayed(format(eased * target));
                    if (progress < 1) requestAnimationFrame(tick);
                };

                requestAnimationFrame(tick);
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rawTarget, duration]);

    return { ref, displayed };
}
