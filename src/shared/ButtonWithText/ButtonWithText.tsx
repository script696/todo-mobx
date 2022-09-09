import s from "./ButtonWithText.module.scss";

export interface IButton {}

const Button = ({color, bg, text}: any) => {

  const StylesButton = [
    color === 'blue' ? s.button_text_color_blue : null,
    color === 'white' ? s.button_text_color_white : null,
    bg === 'blue' ? s.button_text_color_blue : null,
    bg === 'ghost' ? s.button_text_color_ghost : null,
  ];

  return <div className={StylesButton.join(' ')}>
    {text}
  </div>;
};

export default Button;
