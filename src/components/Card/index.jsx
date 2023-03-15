import './styles.css';

export function Card(props){
    return(
    <div className='card'>
            <img src={props.avatar}/>
            <strong>{props.name}</strong>
            <small>{props.bio}</small>
            <small id="time">{props.time}</small>  
    </div> 
    )
}