import { useEffect, useState } from "react"
import "./modalVideo.css"
import { Button, Box, Modal } from "@mui/material"
import useVideoQuestion from "../../hooks/useVideoQuestion";
import CardVideo from "../cardVideo/CardVideo";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ModalVideo = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    let [indexMV, setIndexMV] = useState(0)
    const { dataVQ, setDataVQ, open, handleClose, indexVQ, setIndexVQ, somethingRecording } = useVideoQuestion()

    useEffect(() => {

        setIndexMV(indexVQ)

    }, [indexVQ])

    const nextQuestion = () => {


        if (indexMV < dataVQ.length - 1) {
            setIndexMV(indexMV + 1)
        }
    }

    const prevQuestion = () => {

        if (indexMV > 0) {
            setIndexMV(indexMV - 1)
        }
    }

    const finish = () => {
        handleClose()
        setIndexVQ('')
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="contentModal">
                        <Button onClick={finish} disabled={somethingRecording}> <ArrowBackIcon></ArrowBackIcon> Volver</Button>

                        <CardVideo index={indexMV} width={600} dataVideo={dataVQ[indexMV]} noClick={true}></CardVideo>
                        <div className="modal__contentButton">

                            <div className="modal__groupButtons">
                                <Button onClick={prevQuestion} disabled={somethingRecording}>Anterior</Button>
                                <Button onClick={nextQuestion} disabled={somethingRecording}>Siguiente</Button>

                            </div>
                            
                            
                            <div className="checkLists">
                                {dataVQ.map((d, i) => {

                                    return d.answered ? <CheckCircleIcon key={i + 'check'} style={{ color: '#444', ...(i == indexMV ? { fontSize: '2rem' } : {}) }}></CheckCircleIcon> : <ErrorOutlineIcon key={i + 'check'} style={{ color: '#444', ...(i == indexMV ? { fontSize: '2rem' } : {}) }}></ErrorOutlineIcon>
                                })}
                            </div>
                            <Button onClick={finish} style={dataVQ.every((el) => el.answered == true) ? {} : { display: 'none' }} disabled={somethingRecording}>Terminar</Button>
                        </div>                        
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ModalVideo