import avatar from '../assets/my-avatar.png';
import { IonIcon } from '@ionic/react';
import {
  mailOutline,
  calendarOutline,
  locationOutline,
  logoLinkedin,
  logoTwitter,
  logoGithub,
  chevronDown,
} from 'ionicons/icons';
import { useState } from 'react';

export const Sidebar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    if (active){
      setActive(false);
    }else{
      setActive(true);
    }
  };

  return (
    <aside className={active?'sidebar active':'sidebar'}>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img src={avatar} alt='Shubham Nayak' width='80' />
        </figure>

        <div className='info-content'>
          <h1 className='name' title='Shubham Nayak'>
            Shubham Nayak
          </h1>

          <p className='title'>Developer & UI Designer</p>
        </div>

        <button className='info_more-btn' onClick={isActive}>
          <span>Show Contacts</span>

          <IonIcon icon={chevronDown}></IonIcon>
        </button>
      </div>

      <div className='sidebar-info_more'>
        <div className='separator'></div>

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <IonIcon icon={mailOutline}></IonIcon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Email</p>

              <a href='mailto:shubhamnayak446@gmail.com@gmail.com' className='contact-link'>
                shubhamnayak446@gmail.com
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IonIcon icon={calendarOutline}></IonIcon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Birthday</p>
              <time dateTime='1982-06-23'>14 April, 2002</time>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IonIcon icon={locationOutline}></IonIcon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Location</p>
              <address>Bhubaneswar, India</address>
            </div>
          </li>
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <a href='https://www.linkedin.com/in/shubhamnayak014/' className='social-link' target='_blank'>
              <IonIcon icon={logoLinkedin}></IonIcon>
            </a>
          </li>

          {/* <li className='social-item'>
            <a href='https://x.com/AnimeshMaiti7' className='social-link' target='_blank'>
              <IonIcon icon={logoTwitter}></IonIcon>
            </a>
          </li> */}

          <li className='social-item'>
            <a href='https://github.com/ShubhamNayak14' className='social-link' target='_blank'>
              <IonIcon icon={logoGithub}></IonIcon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
