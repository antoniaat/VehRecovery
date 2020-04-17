import './about.scss';

import tlogo from 'assets/images/tlogo.png';
import aboutBgImage from 'assets/images/about-bg.jpg';

import React from 'react';
import { string } from 'prop-types';
import Benefit from '../benefits/benefit';
import { money, suitcase, puzzlePiece } from '../icons/FontAwesomeIcons';

const benefits = [
  {
    icon: money,
    title: 'Добри цени',
    subtitle: 'Тук може да намерите едни от най-добрите цени',
  },
  {
    icon: suitcase,
    title: 'Доверили се клиенти',
    subtitle: 'Благодарим на всички доверили се клиенти',
  },
  {
    icon: puzzlePiece,
    title: 'Голяма верига',
    subtitle: 'Най-голямата верига от доставчици',
  },
];

const About = ({ mainTitle, mainSubtitle, description }) => (
  <div className="about">
    <img src={tlogo} alt="logo" />
    <h2>{mainTitle}</h2>
    <section>
      <p className="about-subtitle">{mainSubtitle}</p>
      <p className="about-description">
        {description}
      </p>
      {benefits.map(({ icon, title, subtitle }) => (
        <Benefit icon={icon} title={title} subtitle={subtitle} />
      ))}
    </section>

    <section>
      <img src={aboutBgImage} alt="about-img" />
    </section>
  </div>
);

About.propTypes = {
  mainTitle: string.isRequired,
  mainSubtitle: string.isRequired,
  description: string.isRequired,
};

export default About;
