import "./App.css";
import Hero from "./Hero/hero.jpg";
import { ReactStickyChildren } from "react-sticky-children";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

import { DEMO_1, DEMO_2, DEMO_3, DEMO_4 } from "./constants";
import UserCard from "./UserCard";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>React Sticky Children</h1>
        <p>Scroll down to see the plugin in action.</p>
      </header>
      <div className="Wrapper">
        <div className="Container Viewport25">
          <div className="Code">
            <SyntaxHighlighter language="jsx" showLineNumbers style={vs}>
              {DEMO_1}
            </SyntaxHighlighter>
          </div>
        </div>
        <ReactStickyChildren>
          <h1 className="AlternateContainer">I'm not sticky...</h1>
        </ReactStickyChildren>
        <div className="Container Viewport25">
          <div className="Code">
            <SyntaxHighlighter language="jsx" showLineNumbers style={vs}>
              {DEMO_2}
            </SyntaxHighlighter>
          </div>
        </div>
        <ReactStickyChildren className="TransitionOpacity Sticky">
          <h1 className="AlternateContainer">...but I am sticky!</h1>
        </ReactStickyChildren>
        <div className="Container Viewport25">
          <div className="Code">
            <SyntaxHighlighter language="jsx" showLineNumbers style={vs}>
              {DEMO_3}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="Container">
          <ReactStickyChildren
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
          </ReactStickyChildren>
          <ReactStickyChildren
            className="TransitionOpacity"
            top="240"
            initialStyle={{ opacity: 0 }}
            intersectingStyle={{ opacity: 1 }}
            once
          >
            <UserCard
              username="greentiger101"
              city="Busselton"
              profilePicture="https://randomuser.me/api/portraits/thumb/women/47.jpg"
            />
          </ReactStickyChildren>
          <ReactStickyChildren
            className="TransitionOpacity"
            top="240"
            initialStyle={{ opacity: 0 }}
            intersectingStyle={{ opacity: 1 }}
            once
          >
            <UserCard
              username="blueelephant79"
              city="North Charleston"
              profilePicture="https://randomuser.me/api/portraits/thumb/men/21.jpg"
            />
          </ReactStickyChildren>
          <ReactStickyChildren
            className="TransitionOpacity"
            top="240"
            initialStyle={{ opacity: 0 }}
            intersectingStyle={{ opacity: 1 }}
            once
          >
            <UserCard
              username="happywhale99"
              city="اهواز"
              profilePicture="https://randomuser.me/api/portraits/thumb/women/47.jpg"
            />
          </ReactStickyChildren>
        </div>
        <div className="Container Viewport25">
          <div className="Code">
            <SyntaxHighlighter language="jsx" showLineNumbers style={vs}>
              {DEMO_4}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="Hero">
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
        </div>
        <p className="Text">
          Photo by{" "}
          <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Pawel Czerwinski
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
        <div className="Container Viewport100">
          <p className="Text">Empty space to allow for scrolling.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
