import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Softwares <span>&</span>
          <br /> Application i use
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>After Effects</h4>
                <h5>By Adobe</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
             create animated graphics, visual effects, motion graphics, title sequences, 
             add transitions to video footage, design animated typography, color grade videos, 
            composite different elements together, create 3D animations (with plugins),
             and essentially bring life to static images or videos by adding movement and effects
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Premiere Pro,</h4>
                <h5>By Adobe</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            edit video by combining clips, adding transitions, adjusting color, enhancing
            audio quality, creating animated titles, incorporating special effects, 
             adding captions, and exporting your final video in various formats
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Photoshop</h4>
                <h5>By Adobe</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              edit photos, create graphics, and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
