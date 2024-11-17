import { IGalleryItem } from "@/types/ISolution";
import * as Dialog from "@radix-ui/react-dialog";
import "@styles/slider-modal.css";
import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";

const Video = ({ src }: { src: string }) => {
  const [isPlay, setIsPlay] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlay) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [ref, isPlay]);

  useEffect(() => {
    if (ref.current) {
      if (ref.current.played) {
        setIsPlay(true);
      }
      if (ref.current.paused) {
        setIsPlay(false);
      }
    }
  }, [ref.current?.played]);

  return (
    <div className="slider__video-container">
      {!isPlay && (
        <button
          onClick={() => setIsPlay((prev) => !prev)}
          className="slider__video-play"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM22.2334 35.7071L36.4149 27.8754C37.1036 27.495 37.1036 26.505 36.4149 26.1246L22.2334 18.2929C21.5669 17.9249 20.75 18.407 20.75 19.1683V34.8317C20.75 35.593 21.5669 36.0751 22.2334 35.7071Z"
              fill="#161419"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM22.2334 35.7071L36.4149 27.8754C37.1036 27.495 37.1036 26.505 36.4149 26.1246L22.2334 18.2929C21.5669 17.9249 20.75 18.407 20.75 19.1683V34.8317C20.75 35.593 21.5669 36.0751 22.2334 35.7071Z"
              fill="url(#paint0_linear_962_788)"
              fill-opacity="0.8"
            />
            <defs>
              <linearGradient
                id="paint0_linear_962_788"
                x1="54"
                y1="54"
                x2="-5.40033"
                y2="47.2044"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5442DD" stop-opacity="0.5" />
                <stop offset="1" stop-color="#C892F6" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      )}

      <video
        ref={ref}
        onClick={() => {
          setIsPlay(false);
        }}
        style={{
          pointerEvents: isPlay ? "auto" : "none",
        }}
        preload="metadata"
        controls={isPlay}
        src={src}
      />
    </div>
  );
};

export const SliderModal = ({ slides }: { slides: IGalleryItem[] }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="slider__trigger">
        <Swiper
          slidesPerView={1}
          speed={500}
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          autoplay={{ delay: 3000 }}
          loop
          allowTouchMove={false}
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
            slideToClickedSlide
            spaceBetween={20}
            speed={500}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // mobile + tablet - 320-990
              0: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.4,
              },
              // desktop >= 991
              991: {
                slidesPerView: 1.99,
              },
            }}
            className="slider__container"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.src}>
                <div>
                  {slide.type === "image" && <img src={slide.src} />}
                  {slide.type === "video" && <Video src={slide.src} />}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
