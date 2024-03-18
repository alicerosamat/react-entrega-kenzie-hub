import { forwardRef } from "react";
import style from "../../styles/style.module.scss"

export const Input = forwardRef (({label, error, ...rest}, ref) => {
    return (
        <div className={style.formItem}>
            <label >
                {label}
                <p>
                <input ref={ref} {...rest} />
                {error ? <p>{error.message}</p>: null}
                </p>
            </label>
        </div>
    )
})