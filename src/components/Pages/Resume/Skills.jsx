import { useEffect, useState } from 'react';
import { SkillsData } from '../../Data/Data';

export const Skills = () => {
  const [animatedValues, setAnimatedValues] = useState(
    Array(SkillsData.length).fill(0)
  );

  useEffect(() => {
    SkillsData.forEach((skill, index) => {
      let value = 0;
      const delay = index * 200; // Stagger delay
      setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedValues(prev => {
            const updated = [...prev];
            if (updated[index] < skill.value) {
              updated[index] += 1;
            } else {
              clearInterval(interval);
            }
            return updated;
          });
        }, 15); // animation speed
      }, delay);
    });
  }, []);

  return (
    <section className='skill'>
      <h3 className='h3 skills-title'>My Skills</h3>

      <ul className='skills-list glass-card'>
        {SkillsData.map((skill, index) => (
          <li key={index} className='skills-item' title={`${skill.value}%`}>
            <div className='title-wrapper'>
              <h5 className='h5'>{skill.title}</h5>
              <span className='percentage'>{animatedValues[index]}%</span>
            </div>

            <div className='skill-progress-bg'>
              <div
                className='skill-progress-fill'
                style={{ width: `${animatedValues[index]}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
