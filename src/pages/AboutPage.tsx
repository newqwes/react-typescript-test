import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>О нас</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laboriosam architecto dolorem quis amet vel neque quod enim. Quam at excepturi dolor ex voluptate dolore commodi asperiores sapiente totam fugiat!</p>
      <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  );
};
