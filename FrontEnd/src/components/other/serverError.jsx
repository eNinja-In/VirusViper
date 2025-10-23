import style from './serverError.module.css'
import serverError from '/serverError.png'

export default function ServerError () {
    return (
        <div className={style.main}>
            <div className={style.error}>
                <div className={style.errorLogo}>
                    <img src={serverError} alt="" />
                </div>
            </div>
        </div>
    )
}