
import "./Buttons.css"

export function BuPrimary(props){
   return ( <button data-hasfill={props.hasfill} onClick={props.onClick} disabled = {props.disabled} className={`button bu-primary flex-row flex gap-2 items-center  justify-center ${props.className}`}>
            {props.LeftIcon ? <props.LeftIcon className="button__left-icon icon" /> : null }
            {props.text ? <p className="button__text fw-semibold">{props.text}</p> : null}
            {props.RightIcon ? <props.RightIcon className="button__right-icon icon" /> : null }
            {props.children}
    </button> );
}

export function BuSecondary(props){
    return (
        <button data-hasfill={props.hasfill} onClick={props.onClick} disabled = {props.disabled} className={`button bu-secondary flex gap-2  items-center justify-center ${props.className}`}>
            {props.LeftIcon ? <props.LeftIcon className="button__left-icon icon" /> : null }
            {props.text ? <p className="button__text fw-semibold">{props.text}</p> : null}
            {props.RightIcon ? <props.RightIcon className="button__right-icon icon" /> : null }
            {props.children}
        </button>
    )
}

export function BuAccent(props){
    return (
        <button data-hasfill={props.hasfill} onClick={props.onClick} disabled = {props.disabled} className={`button bu-accent flex gap-2  items-center justify-center ${props.className}`}>
            {props.LeftIcon ? <props.LeftIcon className="button__left-icon icon" /> : null }
            {props.text ? <p className="button__text fw-semibold">{props.text}</p> : null}
            {props.RightIcon ? <props.RightIcon className="button__right-icon icon" /> : null }
            {props.children}
        </button>
    )
}


export function BuMinimal(props){
    return (
        <button data-hasfill={props.hasfill} onClick={props.onClick} disabled = {props.disabled} className={`button bu-minimal  flex gap-2  items-center justify-center ${props.className}`}>
            {props.LeftIcon ? <props.LeftIcon className="button__left-icon icon" /> : null }
            {props.text ? <p className="button__text font-semibold">{props.text}</p> : null}
            {props.RightIcon ? <props.RightIcon className="button__right-icon icon" /> : null }
            {props.children}
        </button>
    )
}