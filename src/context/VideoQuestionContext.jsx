import { createContext, useState } from "react";
import videoList from "../Questions"
const VQContext = createContext()



const VQProvider = ({ children, data }) => {
    let [dataVQ, setDataVQ] = useState(videoList)
    let [videos, setVideos] = useState([])

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [somethingRecording, setSomethingRecording] = useState(false)

    let [indexVQ, setIndexVQ] = useState()

    return (
        <VQContext.Provider value={{
            data,
            dataVQ, setDataVQ,
            open, handleClose, handleOpen,
            indexVQ, setIndexVQ,
            videos, setVideos,
            somethingRecording, setSomethingRecording

        }}>
            {children}
        </VQContext.Provider>
    )
}

export { VQContext, VQProvider }