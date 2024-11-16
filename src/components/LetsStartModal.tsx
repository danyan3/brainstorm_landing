import * as Dialog from "@radix-ui/react-dialog";
import telegramModal from "@assets/images/telegram-modal.svg";
import qrCode from "@assets/images/qr-code.svg";
import "@styles/lets-start-modal.css";
import { ComponentProps } from "react";

export const LetsStartModal = ({ children }: ComponentProps<"div">) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
    <Dialog.Portal>
      <div className="lets-start-slider">
        <Dialog.Overlay className="lets-start-slider__overlay" />
        <Dialog.Content className="lets-start-slider__content">
          <div className="lets-start-slider__spark-1" />
          <div className="lets-start-slider__spark-2" />
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
              @brainstorm_bot{" "}
            </li>
            <li>
              <div>
                Обязательно проверяйте корректность написания имени бота, во
                избежании столкновения с фейками и мошенниками.
                <div>
                  <Dialog.Trigger asChild>
                    <button className="button">Поехали!</button>
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
