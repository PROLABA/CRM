import {FC} from "react";
import './style.css'
import {TeethSection} from "@/entities/TeethSection";
import {Swiper, SwiperSlide} from 'swiper/react';
import {teethHoc} from "@/hooks/TeethHOK.tsx";

export const TeethGridWidget: FC = teethHoc(({teethSections}) => {
    return (
        <Swiper slidesPerView={"auto"}
                spaceBetween={7}
                freeMode={false}
                direction={'horizontal'}
                touchReleaseOnEdges={true}

        >
            <SwiperSlide className="teeth-section-col teeth-section-right">
                <TeethSection teethList={teethSections.rightTop.items}
                              key={teethSections.rightBottom.ID}
                />
                <TeethSection teethList={teethSections.rightBottom.items}
                              key={teethSections.leftBottom.ID}
                />
            </SwiperSlide>
            <SwiperSlide className="teeth-section-col teeth-section-left">
                <TeethSection teethList={teethSections.leftTop.items}
                              key={teethSections.rightTop.ID}
                />
                <TeethSection teethList={teethSections.leftBottom.items}
                              key={teethSections.leftTop.ID}
                />
            </SwiperSlide>
        </Swiper>
    )
})