export const DEMO_1 = `<ReactStickyChildren>
  <h1>I'm not sticky...</h1>
</ReactStickyChildren>`;

export const DEMO_2 = `<ReactStickyChildren className="TransitionOpacity Sticky">
  <h1>...but I am sticky!</h1>
</ReactStickyChildren>`;

export const DEMO_3 = `<ReactStickyChildren
  className="TransitionOpacity"
  top="240"
  initialStyle={{ opacity: 0 }}
  intersectingStyle={{ opacity: 1 }}
  once
>
  <UserCard
    username="sadpanda370"
    city="Noerre Alslev"
    profilePicture="https://randomuser.me/api/portraits/thumb/men/47.jpg"
  />
</ReactStickyChildren>`;

export const DEMO_4 = `<div className="Hero">
  <ReactStickyChildren
    className="TransitionOpacityLong"
    top="240"
    initialStyle={{ opacity: 0 }}
    intersectingStyle={{ opacity: 1 }}
    once
  >
    <img
      src={Hero}
      alt="3D render of blue and red clouds"
      width="1919"
      height="598"
      className="HeroImage"
    />
  </ReactStickyChildren>
  <ReactStickyChildren
    className="HeroTitle TransitionTransform"
    top="240"
    initialStyle={{ opacity: 0, transform: "translateX(-100%)" }}
    intersectingStyle={{ opacity: 1, transform: "translateX(0)" }}
    once
  >
    <h1>Amazing Effect</h1>
  </ReactStickyChildren>
</div>`;
