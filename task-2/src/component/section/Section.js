import React from "react";
import PropTypes from 'prop-types';
//Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children).

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes ={
  title: PropTypes.string,
  children: PropTypes.object
}

export default Section;
