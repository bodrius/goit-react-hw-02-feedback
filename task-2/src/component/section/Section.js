import React from "react";

//Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children).

const Section = ({ title, children }) => {
  console.log(title);
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
