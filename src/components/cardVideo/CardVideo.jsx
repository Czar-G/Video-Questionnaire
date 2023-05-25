import { Button } from "@mui/material"
import useVideoQuestion from "../../hooks/useVideoQuestion"
import "./cardVideo.css"
import VideoRecorder from "../videoRecorder/VideoRecorder"

const CardVideo = ({ dataVideo, width, index, showRecButton = true, noClick = false }) => {

    let { handleOpen, indexVQ, setIndexVQ, dataVQ, setDataVQ, videos, setVideos, setSomethingRecording } = useVideoQuestion()

    let handleOandM = () => {        
        handleOpen()

        let indexArray = dataVQ.findIndex((d) => d.id == dataVideo.id)
        setIndexVQ(indexArray)
        setSomethingRecording(false)
    }

    let updateRender = (data) => {
        setDataVQ((prev) =>
            prev.map((e) => {
                if (e.id !== data.id) return e

                return {
                    ...e,
                    ...data
                }
            })
        )
    }

    return (
        <div className="video-card" style={{ width }}>
            <div className="video-card__video">
                <VideoRecorder showRecButton={showRecButton} videos={videos} setVideos={setVideos} updateRender={updateRender} dataVideo={dataVideo} width={width}></VideoRecorder>
            </div>
            <div className="video-card__question-box"  onClick={ noClick ? () => {}:handleOandM} >
                <div className="video-card__question-square"></div>
                <Button title={dataVideo.question}>{dataVideo.question}</Button>                
                <div className="video-card__question-square"></div>
            </div>            
        </div>
    )
}

export default CardVideo