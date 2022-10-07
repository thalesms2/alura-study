import style from "./Watch.module.scss";

interface Props {
    time: number | undefined;
}

const Watch: React.FunctionComponent<Props> = ({ time = 0 }) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minDec, minUni] = String(minutes).padStart(2, "0");
    const [secDec, secUni] = String(seconds).padStart(2, "0");
    return (
        <>
            <span className={style.relogioNumero}>{minDec}</span>
            <span className={style.relogioNumero}>{minUni}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secDec}</span>
            <span className={style.relogioNumero}>{secUni}</span>
        </>
    );
}
export default Watch