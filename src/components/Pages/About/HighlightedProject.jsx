import { useState, useRef } from "react";
import { IonIcon } from "@ionic/react";
import {
  closeOutline,
  chevronBackOutline,
  chevronForwardOutline,
} from "ionicons/icons";

import quoteIcon from "@assets/icon-quote.svg";
import { projectData } from "../../Data/Data";

export const HighlightedProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollList = (direction) => {
    if (!scrollRef.current) return;

    let newIndex = currentIndex + (direction === "left" ? -1 : 1);
    // clamp between 0 and last index
    newIndex = Math.max(0, Math.min(projectData.length - 1, newIndex));
    setCurrentIndex(newIndex);

    const card = scrollRef.current.children[newIndex];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  return (
    <>
      <section className="projects">
        <h3 className="h3 projects-title">Highlighted Projects</h3>

        <div className="projects-container">
          <button
            className="scroll-btn left"
            onClick={() => scrollList("left")}
            disabled={currentIndex === 0}
          >
            <IonIcon icon={chevronBackOutline} />
          </button>

          <ul className="projects-list has-scrollbar" ref={scrollRef}>
            {projectData.map((project, index) => (
              <li key={index} className="projects-item-1">
                <div
                  className="content-card"
                  onClick={() => openModal(project)}
                >
                  <figure className="projects-avatar-box">
                    <img src={project.avatar} alt={project.name} width="40" />
                  </figure>
                  <h4 className="h4 projects-item-title">{project.name}</h4>
                  <div className="projects-text">
                    <p>{project.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="scroll-btn right"
            onClick={() => scrollList("right")}
            disabled={currentIndex === projectData.length - 1}
          >
            <IonIcon icon={chevronForwardOutline} />
          </button>
        </div>
      </section>

      {/* Modal Section */}
      {isModalOpen && selectedProject && (
        <div className="modal-container">
          <div className="overlay" onClick={closeModal} />

          <section className="projects-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <IonIcon icon={closeOutline} size={30} />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={selectedProject.avatar}
                  alt={selectedProject.name}
                  width="80"
                />
              </figure>
              <img src={quoteIcon} alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedProject.name}</h4>
              <time dateTime="2021-06-14"></time>
              <div>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  {selectedProject.text}
                </p>
                <a
                  className="a"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
