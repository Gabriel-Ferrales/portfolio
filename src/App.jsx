import { useState } from 'react';
import Navbar from './components/Navbar';

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

const technologies = [
  { name: 'Python', icon: 'python.svg' },
  { name: 'Google Cloud Storage', icon: 'google-cloud-storage.svg' },
  { name: 'BigQuery', icon: 'bigquery.svg' },
  { name: 'dbt Core', icon: 'dbt.svg' },
  { name: 'Looker Studio', icon: 'looker.svg' },
];

const dashboardViews = [
  { file: '01-overview.png', title: 'Overview', description: 'A catalog overview with game, platform, genre and company counts, alongside release trends over time.' },
  { file: '02-platforms-releases.png', title: 'Platforms & releases', description: 'Platform catalog sizes and release events. Recorded release dates may include future or approximate dates; they are not official platform launch dates.' },
  { file: '03-genres-ratings.png', title: 'Genres & ratings', description: 'Game counts by genre and a comparison of average user and critic ratings.' },
  { file: '04-companies.png', title: 'Companies', description: 'Comparisons of games developed and published by companies in the catalog.' },
  { file: '05-ratings-explorer.png', title: 'Ratings explorer', description: 'User ratings plotted against critic ratings, with a table of individual games and review counts.' },
];
const projects = [
  { name: 'Quizzical', image: 'quizzical.png', description: 'A trivia application with a choice of question count, category and difficulty.', tags: 'React · React Router · Fetch API', site: 'https://quizzicalgf.netlify.app/', code: 'Quizzical-V2' },
  { name: 'Flixx', image: 'flixx2.png', description: 'A movie and TV discovery application with title search and paginated browsing.', tags: 'React · React Router · Fetch API', site: 'https://flixxmoviesgfr.netlify.app/', code: 'Flixx-Movies-React' },
  { name: 'Weather App', image: 'weather-app.png', description: 'A five-day forecast using OpenWeather data, with city search, location lookup and unit selection.', tags: 'React · Fetch API · Tailwind CSS', site: 'https://weathergf.netlify.app/', code: 'Weather-App' },
];
const linkedin = 'https://www.linkedin.com/in/gabriel-armando-ferrales-ruedaflores-362649236/';

function App() {
  const [viewIndex, setViewIndex] = useState(0);
  const view = dashboardViews[viewIndex];
  const imagePath = publicAsset(`projects/dashboard/${view.file}`);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <section className="hero container" aria-labelledby="intro-heading">
          <div className="hero-copy">
            <p className="eyebrow">Gabriel Ferrales · Hermosillo, Mexico</p>
            <h1 id="intro-heading">A finance background.<br />A focus on <span>data analytics.</span></h1>
            <p className="intro">I’m Gabriel, a Finance graduate and developer focusing on data analytics. I’m interested in exploring data and presenting it in clear, useful ways.</p>
            <div className="actions"><a className="button primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a><a className="text-link" href="#about">More about me <span aria-hidden="true">→</span></a></div>
          </div>
          <a className="hero-preview" href="#featured-project" aria-label="Explore the featured video game analytics project">
            <div className="preview-label"><span className="status-dot" /> Featured project <span aria-hidden="true">↗</span></div>
            <img src={publicAsset('projects/dashboard/01-overview.png')} alt="Video game dashboard showing catalog totals and release trends" width="2396" height="1796" />
            <div className="preview-footer"><strong>IGDB Gaming Analytics</strong><span>Data Engineering / Dashboard</span></div>
          </a>
        </section>

        <section className="section container" id="work" aria-labelledby="work-heading">
          <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2 id="work-heading">Data in focus.</h2></div><p>One featured data project.<br />Three complementary web applications.</p></div>
          <article className="featured-project" id="featured-project" aria-labelledby="project-heading">
            <div className="project-intro"><div><p className="eyebrow">01 / Featured · Data Engineering</p><h3 id="project-heading">IGDB Gaming Analytics</h3></div><p>IGDB game metadata transformed into BigQuery analytics and a five-page Looker Studio dashboard. Explore release activity, platform catalogs, genres, company roles, and current user and critic ratings.</p></div>
            <div className="engineering-context">
              <ul className="technology-stack" aria-label="Technologies used">{technologies.map((technology) => <li key={technology.name}><img src={publicAsset(`technologies/${technology.icon}`)} alt="" width="24" height="24" /><span>{technology.name}</span></li>)}</ul>
              <div className="pipeline-summary" aria-label="Project workflow"><span>IGDB API</span><span aria-hidden="true">→</span><span>Python &amp; GCS</span><span aria-hidden="true">→</span><span>BigQuery &amp; dbt</span><span aria-hidden="true">→</span><span>Looker Studio</span></div>
              <div className="engineering-grid">
                <div><h4>From source to analysis</h4><p>Python extracts six IGDB endpoints into immutable GCS batches. Validated staging loads merge records by source ID in BigQuery; dbt builds dimensions, bridges, facts and analytics marts.</p></div>
                <div><h4>Counts with a clear grain</h4><p>Platform catalog membership and release events are aggregated separately to avoid inflated counts from many-to-many relationships. Python and dbt tests cover counts, keys and relationships.</p></div>
              </div>
              <p className="data-note">The pipeline runs manually; automated orchestration is future work. IGDB metadata can be incomplete or approximate. Screenshots show a loaded snapshot and may include display filters; ratings reflect the current loaded state, not historical snapshots.</p>
              <div className="actions"><a className="button primary" href="https://datastudio.google.com/reporting/5f8316d4-6de2-4821-923f-601822531579/page/p_is1l4jc67d">Explore live dashboard <span aria-hidden="true">↗</span></a><a className="button" href="https://github.com/Gabriel-Ferrales/igdb-gaming">Source code <span aria-hidden="true">↗</span></a><p className="attribution">Source data: <a className="text-link" href="https://www.igdb.com/">IGDB and its contributors</a></p></div>
            </div>
            <div className="gallery" role="region" aria-label="Dashboard screenshots">
              <div className="gallery-views" aria-label="Choose a dashboard view">{dashboardViews.map((item, index) => <button key={item.file} type="button" aria-pressed={index === viewIndex} aria-controls="dashboard-figure" onClick={() => setViewIndex(index)}><span className="view-number">0{index + 1}</span> {item.title}</button>)}</div>
              <figure id="dashboard-figure">
                <a className="dashboard-image-link" href={imagePath} target="_blank" rel="noreferrer" aria-label={`Open ${view.title} screenshot at full size (new tab)`}><img src={imagePath} alt={view.description} width="2396" height="1796" /></a>
                <figcaption aria-live="polite" aria-atomic="true"><strong>{view.title}</strong><p>{view.description}</p><a className="text-link" href={imagePath} target="_blank" rel="noreferrer">Open full-size screenshot <span aria-hidden="true">↗</span><span className="sr-only"> (new tab)</span></a></figcaption>
              </figure>
              <div className="gallery-controls"><button type="button" onClick={() => setViewIndex((viewIndex + dashboardViews.length - 1) % dashboardViews.length)} aria-controls="dashboard-figure">← Previous</button><span aria-live="polite">{viewIndex + 1} / {dashboardViews.length}</span><button type="button" onClick={() => setViewIndex((viewIndex + 1) % dashboardViews.length)} aria-controls="dashboard-figure">Next →</button></div>
            </div>
          </article>
          <div className="complementary-heading"><h3>Complementary projects</h3><p>Web development work with APIs and interactive interfaces.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.name}>
            <img src={publicAsset(`projects/${project.image}`)} alt={`${project.name} application interface`} loading="lazy" width="960" height="600" />
            <div className="card-copy"><p className="eyebrow">0{index + 2} / Web application</p><h4>{project.name}</h4><p>{project.description}</p><p className="project-tags">{project.tags}</p><div className="card-links"><a href={project.site}>Visit site <span aria-hidden="true">↗</span><span className="sr-only">: {project.name}</span></a><a href={`https://github.com/Gabriel-Ferrales/${project.code}`}>Source code<span className="sr-only">: {project.name}</span></a></div></div>
          </article>)}</div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-heading"><div className="container about-layout">
          <div className="portrait-wrap"><img src={publicAsset('images/myprofile.jpg')} alt="Gabriel Ferrales" loading="lazy" width="600" height="600" /><p>Based in Hermosillo, Sonora, Mexico</p></div>
          <div><p className="eyebrow">About me</p><h2 id="about-heading">Connecting finance,<br />data and development.</h2><p>I hold a bachelor’s degree in Finance from UNISON, where I was introduced to R and Python. That experience sparked my interest in programming and data analysis.</p><p>My background also includes building web applications with JavaScript, React and Tailwind CSS, along with knowledge of SQL databases and Python APIs using Flask. I’m now focusing my portfolio on data analytics, bringing together my finance education and development work.</p><a className="button" href={publicAsset('Gabriel_Ferrales_CV.pdf')} target="_blank" rel="noopener noreferrer">View my resume <span className="file-type">PDF</span></a></div>
        </div></section>

        <section className="section container contact-section" id="contact" aria-labelledby="contact-heading"><p className="eyebrow">Get in touch</p><h2 id="contact-heading">Let’s talk data.</h2><p>For conversations about data analytics, projects or opportunities, get in touch by email or connect with me on LinkedIn.</p><a className="contact-email" href="mailto:gabriel.ferrales.97@gmail.com">gabriel.ferrales.97@gmail.com <span aria-hidden="true">↗</span></a><div className="social-links"><a href={linkedin}>LinkedIn ↗</a><a href="https://github.com/Gabriel-Ferrales">GitHub ↗</a></div></section>
      </main>
      <footer className="container footer"><span>Gabriel Ferrales · Data Analytics Portfolio</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
export default App;
