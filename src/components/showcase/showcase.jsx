import modules from "./modules";

const showcaseUtil = modules => (
  modules.map((module, i) => (
    <a href={module.url} target='_blank' key={i} className="wrapper" id='modwrapper'>
      <div className="overlay" id='module-overlay'>
        <img src={module.img} alt={module.title} />
        <div className="module" id={i} >
          <h3>{module.title}</h3>
          <p>{module.description}</p>
        </div>
      </div>
    </a>
  ))
)

const Showcase = () => (
  <section className="wrapper" id='showcase'>
    <h3>Recent Work</h3>
    {showcaseUtil(modules)}
  </section>
)

export default Showcase