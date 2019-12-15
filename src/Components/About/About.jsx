import React from "react";
import ProgressiveImage from "../ProgressiveImage";
import AboutTeacherImage from "../Images/AboutTeacher.jpg";
import AboutTeacherCompressedImage from "../Images/AboutTeacherCompressed.jpg";
import "./About.css";

const About = () => {
  return (
    <article className="About-wrapper">
      <section className="About-section">
        <h1 className="About-title">Обо мне</h1>
        <p>English teacher / Teacherpreneur</p>
        <p className="About-desc">
          Меня зовут Дарья, я преподаватель английского языка. <br />
          Мечтаете читать книги в оригинале? Понимать о чем говорит ваш любимый
          герой фильма или сериала? А может ваша мечта - поддержать разговор с
          иностранными коллегами или просто свободно путешествовать по всему
          миру? <br />
          Все это можно сделать реальностью! Уже 4 года я помогаю вашим мечтам
          сбываться.
          <span>Моё образование:</span>
          РГППУ, кафедра германской филологии, переводчик-лингвист. Обучалась и
          жила в Ирландии, Дублин. Проходила международную стажировку и обучала
          английскому языку в Турции.
        </p>
      </section>
      <section className="About-section Image-wrapper">
        <ProgressiveImage
          src={AboutTeacherImage}
          overlaySrc={AboutTeacherCompressedImage}
        />
      </section>
    </article>
  );
};

export default About;
