import { Tools } from "./Tools";
import { Services } from "./Services";
import { HighlightedProject } from "./HighlightedProject";

export const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          Hi! I'm Shubham Kumar Nayak, a dedicated engineering undergraduate
          specializing in Electronics and Computer Science Engineering at KIIT
          UNIVERSITY, Bhubaneswar. With a strong foundation in programming
          (C/C++), database management, and front-end development, I am
          passionate about creating user-friendly and visually engaging digital
          solutions.
        </p>
        <p>
          My technical toolkit includes SQL for database management, HTML and
          CSS for front-end development, and frameworks like Bootstrap and
          Tailwind CSS. I am also proficient in version control using Git and
          have hands-on experience with Figma for UI/UX design.
        </p>
        <p>
          Currently, I am expanding my knowledge in dynamic web development and
          interactive UI design, aiming to create impactful digital solutions.
          Always ready to embrace new challenges, I am passionate about blending
          creativity with technical expertise to solve real-world problems
          effectively.
        </p>
        
      </section>
      <Services />
      <HighlightedProject />
      <Tools />
    </article>
  );
};
