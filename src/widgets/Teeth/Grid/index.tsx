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
                className={"order-teeth-grid"}
        >
            <SwiperSlide className="teeth-section-col teeth-section-right">
                {teethSections.rightTop?.ITEMS?.SECTION && <TeethSection
										teethList={teethSections.rightTop.ITEMS?.SECTION}
										key={teethSections.rightTop.ID}
								/>}

                {teethSections.rightBottom?.ITEMS?.SECTION && <TeethSection
										teethList={teethSections.rightBottom.ITEMS?.SECTION}
										key={teethSections.rightBottom.ID}
								/>}
            </SwiperSlide>
            <SwiperSlide className="teeth-section-col teeth-section-left">
                {teethSections.leftTop?.ITEMS?.SECTION && <TeethSection
										teethList={teethSections.leftTop.ITEMS?.SECTION}
										key={teethSections.leftTop.ID}
								/>}

                {teethSections.leftBottom?.ITEMS?.SECTION && <TeethSection
										teethList={teethSections.leftBottom.ITEMS?.SECTION}
										key={teethSections.leftBottom.ID}
								/>}
            </SwiperSlide>
        </Swiper>
    )
})