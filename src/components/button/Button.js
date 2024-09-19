

export default function Button(props) {
  return (
    <div>
      <button className = {props.className} style = {props.style}>{props.title}</button>
    </div>
  )
}
