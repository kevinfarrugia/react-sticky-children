import * as React from "react";

const StickyMatchBanner = ({ themeColor1, themeColor2, children }) => {
  const rubberDuckyEl = React.useRef(null);
  const stickyEl = React.useRef(null);

  const style: React.CSSProperties = React.useMemo(
    () => ({
      opacity: 0,
      background: `linear-gradient(to bottom right, ${themeColor1}, ${themeColor2})`,
      visibility: "hidden",
    }),
    [themeColor1, themeColor2]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visiblePct = entry.isIntersecting ? 0 : 1;
          if (stickyEl && stickyEl.current) {
            stickyEl.current.style = `visibility: ${
              entry.isIntersecting ? "hidden" : "visible"
            }; background: linear-gradient(to bottom right, ${themeColor1}, ${themeColor2}); opacity: ${visiblePct}`;
          }
        });
      },
      { threshold: 1 }
    );

    if (rubberDuckyEl && rubberDuckyEl.current) {
      observer.observe(rubberDuckyEl.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [themeColor1, themeColor2]);

  return (
    <>
      <div ref={rubberDuckyEl} />
      <section ref={stickyEl} style={style}>
        <div>{children}</div>
      </section>
    </>
  );
};

export default StickyMatchBanner;
