import './topicitem.css'

export default function TopicItem(props){
    return(

        <a href="#" className="topic-btn">
        <div className="icon-box">
        <i style={{color:'#728197'}} className ='icons-hover' class={props.data.iconClass}></i>
        </div>
        <p style={{color : "#728197"}}>{props.data.title}</p>
        </a>

    )
}