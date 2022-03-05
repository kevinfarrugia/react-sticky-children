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
