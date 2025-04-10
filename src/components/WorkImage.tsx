import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleMouseEnter = () => {
    if (props.video) {
      setIsVideoVisible(true);
    }
  };

  return (
    <div className="work-image" style={{ position: "relative", overflow: "hidden" }}>
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideoVisible(false)}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img
          src={props.image}
          alt={props.alt}
          style={{ width: "100%", display: "block", position: "relative", zIndex: 0 }}
        />

        {isVideoVisible && props.video && (
          <video
            src={props.video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;
