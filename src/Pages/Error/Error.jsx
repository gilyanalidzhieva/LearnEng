import React from 'react'
import { useNavigate } from "react-router-dom";
import image from "../Images/sad.png"
import "./Error.scss"

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className='not-found-page'>
      <h1>Упс, что-то пошло не так.</h1>
      <p className='text-1'>Запрашиваемая вами страница не существует.</p>
      <img className='image1' src={image} alt='404 Not Found' />
      <button className='back-btn' onClick={() => navigate("/")}>Вернуться на главную</button>
    </div>
  );
};

export default Error;
  