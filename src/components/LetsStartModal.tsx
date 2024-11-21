import * as Dialog from "@radix-ui/react-dialog";
import telegramModal from "@assets/images/telegram-modal.svg";
import qrCode from "@assets/images/qrcode.webp";
import "@styles/lets-start-modal.css";
import { ComponentProps } from "react";
import { TELEGRAM_LINK } from "@/utils/consts";

export const LetsStartModal = ({ children }: ComponentProps<"div">) => (
  <Dialog.Root modal>
    <img src={telegramModal} style={{ display: "none" }} />
    <img src={qrCode} style={{ display: "none" }} />
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <div className="lets-start-slider">
        <Dialog.Overlay className="lets-start-slider__overlay" />
        <Dialog.Content className="lets-start-slider__content">
          <div className="lets-start-slider__spark-2" />
          <div className="lets-start-slider__spark-1" />
          <Dialog.Title className="title">
            Дальнейшие
            <br /> действия <img src={telegramModal} alt="Telegram icon" />
          </Dialog.Title>
          <Dialog.Description className="description">
            С нашим чат-ботом в Telegram всё
            <br /> взаимодействие происходит в одном месте.
          </Dialog.Description>
          <ul className="modal-list">
            <li>
              Если у вас нет приложения Telegram — установите его на любое ваше
              устройство.
            </li>
            <li>
              Нажав кнопку «Поехали», вы будете перенаправлены в нашего
              Telegram-бота.
            </li>
            <li>
              Также бота можно найти через поиск в Telegram по названию:
              <a
                style={{
                  textDecoration: "none",
                  color: "#bc3def",
                  paddingLeft: "2px",
                }}
                href={TELEGRAM_LINK}
                target="_blanck"
              >
                @brainstormoff_bot
              </a>
            </li>
            <li>
              <div>
                Обязательно проверяйте корректность написания имени бота, во
                избежании столкновения с фейками и мошенниками.
                <div>
                  <Dialog.Trigger asChild>
                    <a
                      href={TELEGRAM_LINK}
                      style={{ width: "fit-content" }}
                      target="_blanck"
                      className="button modal-button"
                    >
                      Поехали!
                    </a>
                  </Dialog.Trigger>
                </div>
              </div>
              <img src={qrCode} alt="QR code" />
            </li>
          </ul>
        </Dialog.Content>
      </div>
    </Dialog.Portal>
  </Dialog.Root>
);
