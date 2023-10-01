import { TempoParaSegundos } from '../../../common/utils/date';
import style from './Relogio.module.scss';

export default function Relogio() {
  console.log('conversão: ', TempoParaSegundos('01:01:01'));
  
  return (
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  )
}
