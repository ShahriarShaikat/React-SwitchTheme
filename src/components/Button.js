export default function Button({ text,handleEvent,value }) {
    return (
        <a onClick={()=>handleEvent(value)} >
            {text}
        </a>
    );
}
