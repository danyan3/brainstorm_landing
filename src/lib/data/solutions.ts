import { ISolution } from "@/types/ISolution";
import cover from "@assets/images/solutions/services/cover.svg";
import video from "@assets/images/solutions/services/video.svg";
import script from "@assets/images/solutions/services/script.svg";
import subtitles from "@assets/images/solutions/services/subtitles.svg";
import transcription from "@assets/images/solutions/services/transcription.svg";
import translation from "@assets/images/solutions/services/translation.svg";
import voice from "@assets/images/solutions/services/voice.svg";
import cutting from "@assets/images/solutions/services/cutting.svg";

import site from "@assets/images/solutions/buisness/site.svg";
import design from "@assets/images/solutions/buisness/design.svg";
import auto from "@assets/images/solutions/buisness/auto.svg";
import mobile from "@assets/images/solutions/buisness/mobile.svg";
import legal from "@assets/images/solutions/buisness/legal.svg";
import ai from "@assets/images/solutions/buisness/ai.svg";
import individual from "@assets/images/solutions/buisness/individual.svg";

import online from "@assets/images/solutions/youtube/online.svg";
import starter from "@assets/images/solutions/youtube/starter.svg";
import beginner from "@assets/images/solutions/youtube/beginner.svg";
import basic from "@assets/images/solutions/youtube/basic.svg";
import pro from "@assets/images/solutions/youtube/pro.svg";
import proPlus from "@assets/images/solutions/youtube/pro+.svg";
import short from "@assets/images/solutions/youtube/short.svg";
import shortPro from "@assets/images/solutions/youtube/short-pro.svg";

const services: ISolution[] = [
  {
    type: "services",
    title: "Создание обложек",
    iconPath: cover,
    description:
      "Хотите превью, на которое кликают без раздумий? Наши дизайнеры создадут для вас такие обложки, что зрители не смогут удержаться от просмотра! Мы знаем, как сделать так, чтобы ваше видео не потерялось среди миллионов. Реализовываем самые сложные и креативные идеи.",
    price: [
      {
        name: "Standart",
        amount: 600,
      },
      {
        name: "Premium",
        amount: 1500,
        isPrimary: true,
        isFrom: true,
        desc: "Цена зависит от объема работы",
      },
    ],
    gallery: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/euphony/content/video/partners2663/large_watermarked/BB_b6f6d5dd-5e81-48a8-8b7a-1a6d13836f78_preview.mp4",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1468324231521-5bb8d15ff471?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/videos/d9149d5c-0805-558e-b40b-f0bb548a7f0f/horizontal/previews/videvo_watermarked/large.mp4",
      },
    ],
  },
  {
    type: "services",
    title: "Монтаж видео",
    iconPath: video,
    description:
      "Улучшите впечатление от вашего ролика с профессиональным монтажом! Наша услуга по созданию монтажа для видео поможет повысить качество и динамику вашего контента, привлекая больше зрителей и удерживая их внимание. Смонтируем любое видео для вас – редактура, монтаж, звук, инфографика, моушн-дизайн, 2D/3D графика.",
    price: [
      {
        name: "Горизонтальные видео",
        amount: 3000,
        isFrom: true,
      },
      {
        name: "Shorts/TikTok/Reels",
        amount: 1000,
        isFrom: true,
        desc: "Цена зависит от объема работы",
      },
    ],
    gallery: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/euphony/content/video/partners2663/large_watermarked/BB_b6f6d5dd-5e81-48a8-8b7a-1a6d13836f78_preview.mp4",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1468324231521-5bb8d15ff471?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/videos/d9149d5c-0805-558e-b40b-f0bb548a7f0f/horizontal/previews/videvo_watermarked/large.mp4",
      },
    ],
  },
  {
    type: "services",
    title: "Написание сценариев",
    iconPath: script,
    description:
      "Захватите внимание аудитории с первых секунд! Наша услуга по созданию сценариев для видео помогает увеличить вовлеченность и эффективность вашего контента. Мы разрабатываем уникальные, продающие и креативные сценарии, которые точно передают ваше сообщение и удерживают зрителя до последней минуты. Ваше видео заслуживает наилучшего сценария!",
    price: [
      {
        name: "",
        amount: 2000,
        isFrom: true,
        desc: "Цена зависит от количества символов в сценарии",
      },
    ],
  },
  {
    type: "services",
    title: "Создание субтитров",
    iconPath: subtitles,
    description:
      "Улучшите свои короткие видео, добавив в них субтитры. Это поможет сделать содержание видео более доступным и понятным, улучшая взаимодействие с аудиторией и увеличивая его привлекательность. Идеально подходит для тех, кто стремится максимально расширить охват и увеличить вовлеченность зрителей.",
    price: [
      {
        name: "1 Shorts/TikTok/Reels",
        amount: 250,
      },
    ],
    gallery: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/euphony/content/video/partners2663/large_watermarked/BB_b6f6d5dd-5e81-48a8-8b7a-1a6d13836f78_preview.mp4",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1468324231521-5bb8d15ff471?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/videos/d9149d5c-0805-558e-b40b-f0bb548a7f0f/horizontal/previews/videvo_watermarked/large.mp4",
      },
    ],
  },
  {
    type: "services",
    title: "Транскрибация ",
    iconPath: transcription,
    description:
      "Если вы работаете с видео или аудио, то наверняка находитесь в поисках удобных сервисов для расшифровки речи в текст. Например, для субтитров или написания статей. Мы поможем с легкостью преобразовать ваш видео/аудио файл в текст. Вы сможете скачать результат в формате docx, txt и xlsx.",
    price: [
      {
        name: "",
        amount: [250, 10000],
        desc: "Цена зависит от хронометража аудио/видео",
      },
    ],
  },
  {
    type: "services",
    title: "Перевод ",
    iconPath: translation,
    description:
      "Мы предлагаем профессиональный перевод вашего видео, аудио или статьи на английский язык. Эксперты с глубоким пониманием языка обеспечиват точность перевода и сохранение первоначального смысла материала. Расширьте свою аудиторию и увеличьте доступность вашего контента для англоязычных зрителей и читателей.",
    price: [
      {
        name: "",
        amount: 500,
        desc: "Цена зависит от объёма работы",
        isFrom: true,
      },
    ],
  },
  {
    type: "services",
    title: "Озвучка",
    iconPath: voice,
    description:
      "Предлагаем профессиональную студийную озвучку вашего видео или статьи на любом языке мира, используя передовые технологии нейросетей. Мы поможем вам найти идеальный голос и тон, который будет соответствовать вашему сообщению и целевой аудитории. Улучшите взаимодействие с зрителями и расширьте свои возможности на международном уровне!",
    price: [
      {
        name: "",
        amount: 1000,
        desc: "Цена зависит от объема работы",
        isFrom: true,
      },
    ],
    gallery: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/euphony/content/video/partners2663/large_watermarked/BB_b6f6d5dd-5e81-48a8-8b7a-1a6d13836f78_preview.mp4",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1468324231521-5bb8d15ff471?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        type: "video",
        src: "https://videocdn.cdnpk.net/videos/d9149d5c-0805-558e-b40b-f0bb548a7f0f/horizontal/previews/videvo_watermarked/large.mp4",
      },
    ],
  },
  {
    type: "services",
    title: "Нарезка видео",
    iconPath: cutting,
    description:
      "Наверняка вы знаете, насколько сложным занятием бывает нарезка длинного видео на интересные и вовлекающие Shorts/TikTok/Reels. Наш сервис готов помочь вам, выбрав наиболее подходящие моменты и нарезав видео любой длины на короткие ролики. Также, на каждый Shorts добавим субтитры.",
    price: [
      {
        name: "",
        amount: 2000,
        desc: "Цена зависит от хронометража видео",
        isFrom: true,
      },
    ],
  },
];

const buisness: ISolution[] = [
  {
    type: "buisness",
    title: "Создание сайтов",
    iconPath: site,
    description:
      "Мы создаем сайты и лендинги, которые не просто существуют, а работают на вас. Разрабатываем уникальные дизайны, которые отражают суть вашего бренда. Работаем над каждой деталью: от аккуратной вёрстки до полной адаптивности, чтобы ваш сайт выглядел отлично на любом устройстве. Если у вас уже есть сайт, но его нужно освежить или усовершенствовать, мы с радостью возьмемся за доработку и внедрение нужных решений.",
  },
  {
    type: "buisness",
    title: "Дизайн",
    iconPath: design,
    description:
      "От первых впечатлений до постоянных клиентов всего один шаг — грамотный дизайн! Наша команда профессионалов создаст для вас стильные и функциональные дизайны сайтов, лендингов, визиток, баннеров, логотипов или карточек товаров. Нам под силу сделать даже рекламные объявления и оформить мобильные приложения, которые привлекут и удержат внимание.",
  },
  {
    type: "buisness",
    title: "Автоматизация",
    iconPath: auto,
    description:
      "Почему бы не сделать работу проще и быстрее? Наша команда разрабатывает клиент-серверные приложения и продвинутых ботов, способных выполнять разноплановые задачи. Будь то сложные бизнес-процессы или повседневные операции, мы создаем специализированные программы и сервисы, адаптированные под ваши нужды. Нужна собственная CRM? Без проблем! И, конечно, автоматическое ведение отчётности — чтобы вы тратили меньше времени на бумаги и больше на то, что действительно важно.",
  },
  {
    type: "buisness",
    title: "Моб. приложения",
    iconPath: mobile,
    description:
      "В современном мире мобильные устройства — это главный инструмент связи с пользователями. Мы создаем мобильные приложения для iOS и Android любой сложности. Предоставляем полный цикл разработки, от идеи до публикации на площадках. Уникальный дизайн и функциональность — всё для того, чтобы клиентам было удобно и приятно пользоваться вашими услугами!",
  },
  {
    type: "buisness",
    subTitle:
      "Юридические услуги любой сложности онлайн и офлайн, услуги адвоката",
    title: "Юридические услуги",
    iconPath: legal,
    description:
      "Хотите быть уверены в защите своих прав в сети и за ее пределами? Мы предлагаем юридические услуги различной сложности как онлайн, так и офлайн. Поможем с любыми правовыми задачами — от подготовки документов, консультаций, защите в суде до решения сложных споров. Наши юристы, имеющие более 30 лет опыта, знают, как вас поддержать!",
  },
  {
    type: "buisness",
    title: "Интеграция ИИ",
    iconPath: ai,
    description:
      "ИИ — это не просто модный тренд, а необходимость в современном бизнесе. Мы внедряем искусственный интеллект, чтобы сделать ваши продукты более интерактивными и умными. С помощью ИИ можно автоматизировать множество задач — от ответов на часто задаваемые вопросы до персонализации пользовательского опыта.",
  },
  {
    type: "buisness",
    title: "Индивидуальные услуги",
    iconPath: individual,
    description:
      "Не нашли нужной услуги? Не проблема. Мы понимаем, что каждый проект уникален и требует особого подхода. Наша команда готова выслушать ваши идеи и предложить решения, которые подойдут именно вам. Подберем профессиональных исполнителей, проконтролируем сроки и качество выполнения задач. Мы будем с вами на каждом этапе, доводя проект до идеала.",
  },
];

const youtube: ISolution[] = [
  {
    type: "youtube",
    title: "Онлайн-консультация",
    iconPath: online,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li>Ответим на любые вопросы по YouTube</li>
        <li>Рассмотрим ошибки, которые вы совершаете сейчас и устраним их</li>
        <li>Дадим рекомендации по продвижению вашего YouTube-канала</li>
        <li>Сделаем подробный аудит канала в виде презентации/документа</li>
      </ul>
    </div>
    <div>
      <strong>Преимущества консультации <i></i></strong>
      <ul>
        <li>Ответим на любые вопросы по YouTube</li>
        <li>Вы сэкономите время, нервы и деньги от неправильных решений</li>
        <li>Получите порядок действий, который улучшит именно ваш канал</li>
        <li>На базовом уровне начнете разбираться в алгоритмах YouTube</li>
        <li>Получите конкретные и практичные советы по развитию, которые помогут вам достичь желаемых результатов</li>
      </ul>
    </div>
    <div>
      <strong>Сроки <i></i></strong>
      <ul>
        <li>3 дня на разбор вашего канала и подготовку аудита</li>
        <li>Затем 1-2 часовой созвон, где мы подробно расскажем вам об ошибках и направим в нужное русло</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 5000,
        isFrom: true,
        desc: "Цена зависит от объема работы",
      },
    ],
  },
  {
    type: "youtube",
    title: "Starter Pack",
    iconPath: starter,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li >Регистрация нового канала</li><li >Создание аккаунта бренда</li><li >Внутренняя настройка канала</li><li >Сбор семантического ядра и подбор тегов</li><li >Настройка плейлистов, добавление ссылок на сайт или соц. сети, создание шаблона загрузки видео</li><li >Создание персонального дизайна: шапка, логотип канала</li><li >Базовые рекомендации по созданию контента</li><li >Презентация нашей работы в онлайн-созвоне/текстовом формате (по вашему желанию)</li>
      </ul>
    </div>
    <div>
      <strong>Преимущества <i></i></strong>
      <ul>
       <li >Вы получите полностью настроенный и оптимизированный YouTube-канал, который сразу будет готов к работе</li><li >Впечатляющий и индивидуальный дизайн вашего канала, который понравится вашим зрителям</li><li >Ваш проект будет в надежных руках опытного специалиста и дизайнеров</li><li >Благодаря правильному оформлению канала вы удержите новых зрителей, повысите кликабельность канала и будете набирать новые просмотры</li>
      </ul>
    </div>
    <div>
      <strong>Сроки <i></i></strong>
      <ul>
        <li>Срок полного выполнения работы - до 7 дней</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 9000,
        isFrom: true,
        desc: "Цена зависит от объёма работы и дизайна",
      },
    ],
  },
  {
    type: "youtube",
    title: "Beginner’s Pack",
    iconPath: beginner,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li >В Beginner's Pack входят все опции из Starter Pack (при необходимости)</li><li >Изучим ваш продукт и целевую аудиторию</li><li >Подберём подходящие форматы и рубрики видео</li><li >Составим контент-план из актуальных и популярных тем</li><li >Разработаем концепции и стратегии продвижения</li><li >Анализ ниши и конкурентов</li><li >Рекомендации по созданию контента</li><li >Проведём онлайн-консультацию по готовой стратегии</li>
      </ul>
    </div>
    <div>
      <strong>Преимущества <i></i></strong>
      <ul>
       <li >Вам станет понятно стратегическое направление для создания и продвижения вашего видеоконтента</li><li >Контент-стратегия защитит вас от нерациональной потери денег и траты времени на неправильные действия</li><li >У вас появится список тем, по которым миллионы зрителей прямо сейчас ищут ролики в вашей нише и которые интересны алгоритмам YouTube</li><li >Индивидуальный подход и адаптация контента под ваши уникальные потребности</li><li >А также все преимущества Starter Pack</li>
      </ul>
    </div>
    <div>
      <strong>Сроки <i></i></strong>
      <ul>
        <li >5-12 дней на полное оформление и проработку контент-стратегии вашего канала</li><li >Затем 1-2 часовой созвон с презентацией стратегии</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 25000,
        isFrom: true,
        desc: `<ul>
          <li>Если у вас уже имеется свой YouTube-канал – переплаты за опции Starter Pack не будет!</li>
          <li>Цена зависит от вашей ниши, конкурентов и сложности разработки контент-стратегии</li>
        </ul>`,
      },
    ],
  },
  {
    type: "youtube",
    title: "Basic Pack",
    iconPath: basic,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li >Создание кликабельного заголовка и правильного описания ролика</li><li >Дизайн превью (обложки) любой сложности</li><li >SEO-оптимизация видео</li><li >Добавление тайм-кодов (при необходимости)</li><li >Правильная загрузка и публикация видео/Shorts</li><li >Проверка ролика на соответствие требованиям YouTube</li><li >Размещение видео в подходящую категорию и плейлист</li><li >Добавление подсказок/конечных заставок/хештегов</li><li >НЕ включает монтаж видео</li><li >Ежемесячный отчёт о работе</li>
      </ul>
    </div>
    <div>
      <strong>Преимущества <i></i></strong>
      <ul>
       <li >Автоматизация публикации ваших роликов</li><li >Ваши ролики получат больше шансов попасть в ТОП поиска YouTube по ключевым запросам вашей целевой аудитории и в рекомендованные видео</li><li >Благодаря работе профессионалов, вам не нужно волноваться «выйдет ли ролик вовремя?» или думать «какое превью и заголовок сделать?»</li><li >Благодаря качественной SEO-оптимизации и правильно подобранным заголовкам и превью, у ваших роликов будет огромный шанс «выстрелить» на миллионы просмотров</li>
      </ul>
    </div>
    <div>
      <strong>Сроки <i></i></strong>
      <ul>
        <li >Срок подготовки одного видео - 3 дня</li><li >До 8 горизонтальных видео и 8 Shorts в месяц</li><li >В конце месяца приводим отчет о проведенной работе, по необходимости созваниваемся в онлайн-формате</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 20000,
        isFrom: true,
        desc: "Цена зависит от количества роликов и Shorts в месяц, а также от их хронометража",
      },
    ],
  },
  {
    type: "youtube",
    title: "YouTube Pro Pack",
    iconPath: pro,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li >В YouTube Pro Pack входят все опции из Basic Pack</li><li >Изучим ваш продукт и целевую аудиторию</li><li >Подберём подходящие форматы и рубрики видео</li><li >Составим контент-план из актуальных и популярных тем</li><li >Разработаем концепции и стратегии продвижения</li><li >Анализ ниши и конкурентов</li><li >Рекомендации по созданию контента</li><li >Модерация комментариев</li><li >Монтаж ваших горизонтальных видео - редактура, монтаж, звук, инфографика, моушн-дизайн, 2D/3D графика (при необходимости)</li><li >Публикация постов и викторин на вкладке «Сообщество»</li><li >Статистика и профессиональная аналитика</li>
      </ul>
    </div>
    <div>
      <strong>Преимущества <i></i></strong>
      <ul>
       <li >Автоматизация контента</li><li >Персональный план роста канала — наша команда поможет вывести ваш канал на новый уровень</li><li >Индивидуальная поддержка — решаем самые разнообразные вопросы, связанные с вашим YouTube-каналом</li><li >Ведение канала «под ключ» означает, что вам не придется думать об алгоритмах, SEO, продвижении и поиске людей — мы всё сделаем за вас!</li><li >А также все преимущества Basic Pack</li>
      </ul>
    </div>
    <div>
      <strong>Сроки <i></i></strong>
      <ul>
        <li >Сроки монтажа рассчитываются индивидуально</li><li >До 4 горизонтальных видео и 8 Shorts в месяц</li><li >Срок SEO-подготовки ролика - 3 дня</li><li >Сроки составления стратегии развития и контент-плана — от 4 дней</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 70000,
        isFrom: true,
        desc: "Цена зависит от вашей ниши, количества видео и Shorts в месяц, а также объема монтажа",
      },
    ],
  },
  {
    type: "youtube",
    title: "YouTube Pro+ Pack",
    iconPath: proPlus,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li >YouTube Pro+ Pack — наш самый «жирный» тариф, включающий в себя ПОЛНОЕ создание, ведение и продюсирование вашего YouTube-канала «под ключ»</li><li >Сюда входят все опции и преимущества YouTube Pro Pack, Starter Pack и Shorts Pack</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 100000,
        isFrom: true,
        desc: "Цена зависит от вашей ниши, объема работ над конент-планом, количества видео и Shorts в месяц, объема монтажа и дизайна",
      },
    ],
  },
  {
    type: "youtube",
    title: "Shorts Pack",
    iconPath: short,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li >Выберем наиболее подходящие моменты из горизонтального видео</li><li >Нарежем ваш горизонтальный ролик любой длины на короткие видео</li><li >Добавление субтитров в Shorts</li><li >Правильная загрузка и публикация Shorts</li><li >Создание кликабельного заголовка и правильного описания Shorts</li><li >SEO-оптимизация Shorts</li><li >Проверка Shorts на соответствие требованиям YouTube</li><li >Размещение Shorts в подходящую категорию и плейлист</li><li >НЕ включает монтаж Shorts с нуля</li><li >Ежемесячный отчёт о работе</li>
      </ul>
    </div>
    <div>
      <strong>Преимущества <i></i></strong>
      <ul>
       <li >Автоматизация публикации ваших Shorts</li><li >Ваши Shorts получат больше шансов попасть в ТОП поиска YouTube по ключевым запросам вашей целевой аудитории и в рекомендованные видео</li><li >Благодаря работе профессионалов, вам не нужно волноваться «выйдет ли Shorts вовремя?» или думать «какое описание и заголовок сделать?»</li><li >Благодаря качественной SEO-оптимизации и правильно подобранным заголовкам и превью, у ваших Shorts будет огромный шанс «выстрелить» на миллионы просмотров</li>
      </ul>
    </div>
    <div>
      <strong>Сроки <i></i></strong>
      <ul>
        <li >Срок SEO-подготовки Shorts - 2 часа</li><li >В конце месяца приводим отчет о проведенной работе, по необходимости созваниваемся в онлайн-формате</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 20000,
        isFrom: true,
        desc: `<ul>
          <li>Цена зависит от объёма работы и количества Shorts в месяц</li>
          <li>Если вам не нужная нарезка Short и добавление субтитров – переплаты за них не будет!</li>
        </ul>`,
      },
    ],
  },
  {
    type: "youtube",
    title: "Shorts Pro Pack",
    iconPath: shortPro,
    description: `
    <div>
      <strong>Что мы сделаем? <i></i></strong>
      <ul>
        <li >В Beginner's Pack входят все опции из Starter Pack (при необходимости)</li><li >Изучим ваш продукт и целевую аудиторию</li><li >Подберём подходящие форматы и рубрики видео</li><li >Составим контент-план из актуальных и популярных тем</li><li >Разработаем концепции и стратегии продвижения</li><li >Анализ ниши и конкурентов</li><li >Рекомендации по созданию контента</li><li >Проведём онлайн-консультацию по готовой стратегии</li>
      </ul>
    </div>
    <div>
      <strong>Преимущества <i></i></strong>
      <ul>
       <li >Вам станет понятно стратегическое направление для создания и продвижения вашего видеоконтента</li><li >Контент-стратегия защитит вас от нерациональной потери денег и траты времени на неправильные действия</li><li >У вас появится список тем, по которым миллионы зрителей прямо сейчас ищут ролики в вашей нише и которые интересны алгоритмам YouTube</li><li >Индивидуальный подход и адаптация контента под ваши уникальные потребности</li><li >А также все преимущества Starter Pack</li>
      </ul>
    </div>
    <div>
      <strong>Сроки <i></i></strong>
      <ul>
        <li >5-12 дней на полное оформление и проработку контент-стратегии вашего канала</li><li >Затем 1-2 часовой созвон с презентацией стратегии</li>
      </ul>
    </div>
    `,
    price: [
      {
        amount: 60000,
        isFrom: true,
        desc: "Цена зависит от вашей ниши, объема работ над контент-планом, количества Shorts в месяц, сложности монтажа",
      },
    ],
  },
];

export const SOLUTIONS: ISolution[] = [...services, ...buisness, ...youtube];
