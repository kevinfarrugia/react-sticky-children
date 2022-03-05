import { CSSProperties } from "react";

export { ReactStickyChildren } from "./ReactStickyChildren";

export interface OwnProps {
  /** Initial style to be applied on the element when the dummy is not visible in the viewport. (Default: { opacity: 0, visibility: "hidden" }) */
  initialStyle: CSSProperties;
  /** Style to be applied on the element when the dummy is visible in the viewport. (default: { opacity: 1, visibility: "visible" }) */
  intersectingStyle: CSSProperties;
  /** The IntersectionObserver interface's read-only `root` property identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target. If the `root` is null, then the bounds of the actual document viewport are used. */
  root?: Element | null;
  /** Top margin from the root in px. (Default: 0) */
  top?: number;
  /** Disconnect the IntersetionObserver after one intersection. */
  once?: boolean;

  className?: string;
}

export type Props = OwnProps;
