import { IGalleryItem } from "@/types/ISolution";
import * as Dialog from "@radix-ui/react-dialog";
import "@styles/slider-modal.css";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";

export const SliderModal = ({ slides }: { slides: IGalleryItem[] }) => (
  <Dialog.Root>
    <Dialog.Trigger className="slider__trigger">
      <Swiper
        slidesPerView={1}
        speed={500}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        autoplay={{ delay: 3000 }}
        loop
        className="slider__container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.src}>
            {slide.type === "image" && <img alt="Image" src={slide.src} />}
            {slide.type === "video" && (
              <video
                playsInline
                preload="metadata"
                controls={false}
                src={slide.src}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="slider__overlay" />
      <Dialog.Content className="slider__content">
        <Swiper
          slidesPerView={1.33}
          spaceBetween={20}
          speed={500}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="slider__container"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              {slide.type === "image" && <img src={slide.src} />}
              {slide.type === "video" && (
                <video
                  playsInline
                  preload="metadata"
                  controls
                  src={slide.src}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
