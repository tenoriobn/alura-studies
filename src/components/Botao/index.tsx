import React from 'react';
import style from './Botao.module.scss';

interface Props {
  texto: string, type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

export default function Botao({ onClick, type, texto }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {texto}
    </button>
  )
}