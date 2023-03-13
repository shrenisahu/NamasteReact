import { useState } from "react";

const Section = ({ title, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black bg-red-50">
      <h1 className="text-xl">{title}</h1>
      {!isVisible ? (
        <button className="bg-green-300" onClick={() => setIsVisible(true)}>
          Show
        </button>
      ) : (
        <button
          className="bg-green-300"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      )}

      {isVisible && (
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsu
        </p>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleTab, setVisibleTab] = useState("");
  return (
    <>
      <Section
        title="About"
        isVisible={visibleTab === "about"}
        setIsVisible={() => {
          if (visibleTab !== "about") setVisibleTab("about");
          else setVisibleTab("");
        }}
      />
      <Section
        title="Teams"
        isVisible={visibleTab === "teams"}
        setIsVisible={() => {
          if (visibleTab !== "teams") setVisibleTab("teams");
          else setVisibleTab("");
        }}
      />
      <Section
        title="Career"
        isVisible={visibleTab === "careers"}
        setIsVisible={() => {
          if (visibleTab !== "careers") setVisibleTab("careers");
          else setVisibleTab("");
        }}
      />
    </>
  );
};
export default InstaMart;
