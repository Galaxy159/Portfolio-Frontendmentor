export default function Project(props) {
  return (
    <>
      <div className="projects__project">
        <img src={props.img} alt="" className="projects__project--img" />
        <h4 className="projects__project--headline">{props.name}</h4>
        <div className="projects__project--tools">
          {props.tools.map((tool, index) => {
            return (
              <p className="projects__project--tools--tool" key={index}>
                {tool}
              </p>
            );
          })}
        </div>
        <div className="projects__project--links">
          <button className="projects__project--links-btn">VIEW PROJECT</button>
          <button className="projects__project--links-btn">VIEW CODE</button>
        </div>
      </div>
    </>
  );
}
