import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "First Website",
    category: "Portfolio",
    tools: "HTML, JavaScript, CSS",
    image: "/images/project1.webp",
    video: "https://res.cloudinary.com/dp2yx8p4y/video/upload/v1744314976/project1_ffb9fg.mp4",
    link: "https://p3xz.github.io",
  },
  {
    title: "Second Website",
    category: "Portfolio",
    tools: "Next.js, Stripe, Tailwind",
    image: "/images/project2.webp",
    video: "https://res.cloudinary.com/dp2yx8p4y/video/upload/v1744314975/project2_ounnci.mp4",
    link: "https://namishy-github-io.vercel.app/",
  },
  {
    title: "School LAN Event",
    category: "BGMI",
    tools: "Competitive",
    image: "/images/project3.png", // Updated image for Project 3
    video: "https://res.cloudinary.com/dp2yx8p4y/video/upload/v1744315727/ScreenRecording_11-11-2024_15-32-28_1_cre544.mov", // Video embed link for Project 3
    link: "https://www.youtube.com/shorts/VZjCaa8Ar0s", // Link for Project 3
  },
  {
    title: "School LAN Event",
    category: "BGMI",
    tools: "Competitive",
    image: "/images/project4.png", // Updated image for Project 4
    video: "https://res.cloudinary.com/dp2yx8p4y/video/upload/v1744315724/ScreenRecording_11-11-2024_16-07-02_1_h6k7f6.mov", // Video embed link for Project 4
    link: "https://www.youtube.com/shorts/kbdvTgIyJO8", // Link for Project 4
  },
  {
    title: "Coming soon",
    category: "Comming soon",
    tools: "Comming soon",
    image: "/images/project5.jpg",
    video: "",
    link: "https://example5.com",
  },
  {
    title: "Coming soon",
    category: "Coming soon",
    tools: "Coming soon",
    image: "/images/project6.jpg",
    video: "",
    link: "https://example6.com",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                video={project.video}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
