import useVideoQuestion from "../../hooks/useVideoQuestion"
import "./ContainerVQ.css"



const ContainerVQ = ({ children }) => {
    let { dataVQ, videos } = useVideoQuestion()
    const sendData = () => {
        alert('Se enviaron las Video Respuestas')
    }
    return (
        <div className="containervq">
            <div className="containervq__title"><h1>VIDEO QUESTIONS</h1></div>
            <div className="containervq__videoContent">{children}</div>
            <div className="containervq__sendButton">

                <button onClick={sendData} {...(dataVQ.every((el) => el.answered == true) ? 'fe' : { disabled: 'disabled', })} >Enviar</button>
            </div>
        </div>
    )
}



export default ContainerVQ