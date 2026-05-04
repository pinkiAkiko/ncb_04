import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, `visibleClass` is added.
 * @param {string} visibleClass  CSS class to add when visible (default: "is-visible")
 * @param {object} options       IntersectionObserver options
 */
export function useScrollReveal(visibleClass = "is-visible", options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add(visibleClass);
                    observer.unobserve(el); // fire once
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [visibleClass]);

    return ref;
}

/**
 * Observes multiple child elements inside a container ref and
 * adds `visibleClass` to each child with a staggered delay.
 * @param {string} childSelector  querySelector to find children (default: ":scope > *")
 * @param {string} visibleClass   CSS class to add
 * @param {number} staggerMs      Delay between each child (default: 80ms)
 */
export function useStaggerReveal(childSelector = ":scope > *", visibleClass = "is-visible", staggerMs = 80) {
    const ref = useRef(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const children = Array.from(container.querySelectorAll(childSelector));

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    children.forEach((child, i) => {
                        setTimeout(() => child.classList.add(visibleClass), i * staggerMs);
                    });
                    observer.unobserve(container);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [childSelector, visibleClass, staggerMs]);

    return ref;
}
