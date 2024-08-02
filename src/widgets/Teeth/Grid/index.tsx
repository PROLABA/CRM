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
                {teethSections.rightTop?.SECTION_ITEMS && <TeethSection
										teethList={teethSections.rightTop.SECTION_ITEMS}
										key={teethSections.rightTop.ID}
								/>}

                {teethSections.rightBottom?.SECTION_ITEMS && <TeethSection
										teethList={teethSections.rightBottom.SECTION_ITEMS}
										key={teethSections.rightBottom.ID}
								/>}
            </SwiperSlide>
            <SwiperSlide className="teeth-section-col teeth-section-left">
                {teethSections.leftTop?.SECTION_ITEMS && <TeethSection
										teethList={teethSections.leftTop.SECTION_ITEMS}
										key={teethSections.leftTop.ID}
								/>}

                {teethSections.leftBottom?.SECTION_ITEMS && <TeethSection
										teethList={teethSections.leftBottom.SECTION_ITEMS}
										key={teethSections.leftBottom.ID}
								/>}
            </SwiperSlide>
        </Swiper>
    )
})