import Project from "./Project";
import { projectsList } from "./projectsList";

export default function Projects() {
  return (
    <>
      <section className="projects">
        <div className="projects__header">
          <h3 className="projects__header--headline">Projects</h3>
          <button className="projects__header--btn">CONTACT ME</button>
        </div>
        <div className="projects__container">
          {projectsList.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </div>
      </section>
    </>
  );
}
