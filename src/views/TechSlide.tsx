import React from 'react'

import '../styles/views.tech.css'

const TechSlide = () => {
  return (
    <section className='main__slide --tech-slide' id='tech-slide'>
      <flex-wrapper class='slide-tech__f-wrapper'>
        <h2 className='f-wrapper__slide-header'>Tech</h2>

        <section className='--tech-slide-section'>
          <h3 className='--tech-slide-section-header'>languages</h3>
          <flex-wrapper class='lang-section__f-wrapper'>
            {['JavaScript', 'TypeScript', 'Python', 'C#'].map(lang => (
              <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
            ))}
          </flex-wrapper>
        </section>

        <flex-item class='f-wrapper__f-item-tools'>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Front End</h3>
              <flex-wrapper class='tools-section__f-wrapper'>
                {['ReactJS', 'NextJS', 'CSS'].map(lang => (
                  <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
                ))}
              </flex-wrapper>
          </section>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Back End</h3>
            <flex-wrapper class='tools-section__f-wrapper'>
              {['NodeJS', '.NET', 'Express', 'Flask', 'Docker'].map(lang => (
                <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
              ))}
            </flex-wrapper>
          </section>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Database</h3>
            <flex-wrapper class='tools-section__f-wrapper'>
              {['MongoDB', 'PostgreSQL', 'SQLite'].map(lang => (
                <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
              ))}
            </flex-wrapper>
          </section>
          <section className='--tech-slide-section'>
            <h3 className='--tech-slide-section-header'>Other</h3>
            <flex-wrapper class='tools-section__f-wrapper'>
              {['Agile Work Methods', 'AWS Lightsail', 'Netlify', 'Figma', 'Git'].map(lang => (
                <p key={lang} className='f-wrapper__lang-item'>{lang}</p>
              ))}
            </flex-wrapper>
          </section>
        </flex-item>
      </flex-wrapper>
    </section>
  )
}

export default TechSlide