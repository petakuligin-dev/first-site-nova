import { siteContent } from '../data/content'
import { Icon } from '../components/Icon'
import { ResponsiveImage } from '../components/ResponsiveImage'

export function TeamPage() {
  const { team } = siteContent

  return (
    <main className="main-content">
      <section className="page-hero">
        <div className="container">
          <span className="section-label">{team.title}</span>
          <h1 className="page-hero__title">{team.subtitle}</h1>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="team__grid">
            {team.members.map((member) => (
              <article key={member.name} className="team-card">
                <div className="team-card__avatar">
                  <ResponsiveImage
                    src={member.image}
                    alt={member.name}
                    className="team-card__photo"
                    width={96}
                    height={96}
                  />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <div className="team-card__skills">
                  {member.skills.map((skill) => (
                    <span key={skill} className="team-card__skill">{skill}</span>
                  ))}
                </div>
                <p className="team-card__bio">{member.bio}</p>
                <div className="team-card__social">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} в LinkedIn`}>
                    <Icon name="linkedin" />
                  </a>
                  <a href={member.telegram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} в Telegram`}>
                    <Icon name="telegram" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
