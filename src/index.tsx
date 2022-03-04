import { CSSProperties } from "react";

export { ReactStickyChildren } from "./ReactStickyChildren";

export interface IntersectionObserverOptions extends IntersectionObserverInit {
  /** The IntersectionObserver interface's read-only `root` property identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target. If the `root` is null, then the bounds of the actual document viewport are used. */
  root?: Element | null;
  /** Margin around the root. Can have values similar to the CSS margin property, e.g. `10px 20px 30px 40px` (top, right, bottom, left). */
  rootMargin?: string;
  /** Number between `0` and `1` indicating the percentage that should be visible before triggering. Can also be an `array` of numbers, to create multiple trigger points. */
  threshold?: number | number[];
  /** Only trigger the inView callback once */
  triggerOnce?: boolean;
  /** Skip assigning the observer to the `ref` */
  skip?: boolean;
  /** Set the initial value of the `inView` boolean. This can be used if you expect the element to be in the viewport to start with, and you want to trigger something when it leaves. */
  initialInView?: boolean;
  /** Fallback to this inView state if the IntersectionObserver is unsupported, and a polyfill wasn't loaded */
  fallbackInView?: boolean;
  /** IntersectionObserver v2 - Track the actual visibility of the element */
  trackVisibility?: boolean;
  /** IntersectionObserver v2 - Set a minimum delay between notifications */
  delay?: number;
}

export interface OwnProps {
  /** Initial style to be applied on the element when the dummy is not visible in the viewport
   *  (default: { opacity: 0, visibility: "hidden" })
   */
  initialStyle: CSSProperties;
  /** Style to be applied on the element when the dummy is visible in the viewport
   *  (default: { opacity: 1, visibility: "visible" })
   */
  intersectingStyle: CSSProperties;

  className?: string;
}

export type Props = OwnProps & Pick<IntersectionObserverOptions, "threshold">;
