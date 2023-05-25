import CardVideo from "../cardVideo/CardVideo"
import "./containerVideoCard.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import useVideoQuestion from "../../hooks/useVideoQuestion";



const ContainerVideoCard = () => {

    let { dataVQ } = useVideoQuestion()
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
        style={{with:"100%"}}>
            {dataVQ.map((dataVideodadda, i) => <SwiperSlide key={i + 'swip'}>
                <CardVideo showRecButton={false} index={i} width={200} dataVideo={dataVideodadda}></CardVideo>
            </SwiperSlide>)}
        </Swiper>
    )
}

export default ContainerVideoCard