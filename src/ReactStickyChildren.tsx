import * as React from "react";
import { Props } from ".";

// defaults
const defaultInitialStyle: React.CSSProperties = {
  opacity: 0,
  visibility: "hidden",
};

const defaultIntersectingStyle: React.CSSProperties = {
  opacity: 1,
  visibility: "visible",
};

export const ReactStickyChildren: React.FC<Props> = ({
  threshold,
  initialStyle,
  intersectingStyle,
  children,
  className,
}) => {
  const style = initialStyle || defaultInitialStyle;
  const computedStyle = intersectingStyle || defaultIntersectingStyle;

  const keys = Object.keys(style)
    .map((n) => {
      if (Object.keys(computedStyle).indexOf(n) === -1) {
        return n;
      }
      return null;
    })
    .filter((n) => n);

  if (keys.length) {
    throw new Error(
      `Missing styles attributes ${keys.join(", ")} in intersectingStyle prop`
    );
  }

  const dummyElement = React.useRef<HTMLDivElement>(null);
  const stickyEl = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (stickyEl.current) {
            const { current } = stickyEl;

            Object.keys(style).forEach((n) => {
              const computedStyleRule = entry.isIntersecting
                ? style[n]
                : computedStyle[n];

              current.style[n] = computedStyleRule;
            });
          }
        });
      },
      { threshold }
    );

    if (dummyElement && dummyElement.current) {
      observer.observe(dummyElement.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [computedStyle, style, threshold]);

  return (
    <>
      <div ref={dummyElement} />
      <section ref={stickyEl} style={style} className={className}>
        <div>{children}</div>
      </section>
    </>
  );
};
