import { ServicesData } from '../../Data/Data';

export const Services = () => {
  return (
    <section className='service'>
      <h3 className='h3 service-title'>What I'm Doing</h3>

      <ul className='service-list'>
        {ServicesData.map((serviceData, index) => (
          <li key={index} className='service-item-about'>
             <div className='service-icon-box'>
              <img src={serviceData.img} alt='design icon' width='30' />
            </div>
            <div className='service-content-box'>
              <h4 className='h4 service-item-title'>{serviceData.title}</h4>
              <p className='service-item-desc'>{serviceData.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
