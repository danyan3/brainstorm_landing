import React, { useEffect, useState } from "react";
import { SolutionType } from "@/types/SolutionType";
import { SliderModal } from "./SliderModal";
import ProductButton from "./ProductButton";
import { SOLUTIONS } from "@/lib/data/solutions";

import "@styles/solution-block.css";
import { ISolution } from "@/types/ISolution";
import { SolutionsSelect } from "./SolutionsSelect";
import { formatPrice } from "@/utils/helpers";
import { Element } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const SolutionBlock: React.FC = () => {
  const [currentType, setCurrentType] = useState<SolutionType>("services");
  const [activeSolution, setActiveSolution] = useState<ISolution>();

  const handleSwitchType = (type: SolutionType) => {
    setCurrentType(type);
  };

  const handleSwitchActiveSolution = (type?: ISolution) => {
    setActiveSolution(type);
  };

  useEffect(() => {
    if (currentType) {
      handleSwitchActiveSolution(
        SOLUTIONS.find((solution) => solution.type === currentType)
      );
    }
  }, [currentType]);

  const filtredSolutions = SOLUTIONS.filter(
    (solution) => solution.type === currentType
  );

  return (
    <Element id="services" name="services">
      <div className="solution-block-container">
        <section className="solution-block">
          <h2 className="solution-block__title">
            Персональные решения для вас
          </h2>
          <div className={`switch switch_${currentType}`}>
            <button
              disabled={currentType === "services"}
              onClick={() => handleSwitchType("services")}
              className="switch__button switch__button_services"
            >
              Услуги
            </button>
            <button
              disabled={currentType === "buisness"}
              onClick={() => handleSwitchType("buisness")}
              className="switch__button switch__button_tariffs"
            >
              Бизнес
            </button>
            <button
              disabled={currentType === "youtube"}
              onClick={() => handleSwitchType("youtube")}
              className="switch__button switch__button_youtube"
            >
              YouTube
            </button>
          </div>
          {activeSolution && (
            <div className="solution-select">
              <SolutionsSelect
                currentSolution={activeSolution}
                solutions={filtredSolutions}
                onChange={handleSwitchActiveSolution}
              />
            </div>
          )}

          <div className={`solution-block__content `}>
            <AnimatePresence mode="wait">
              {activeSolution && (
                <motion.div
                  key={activeSolution.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="service-info"
                >
                  <div className="service-info__header">
                    <div className="service-info__title">
                      <h3>{activeSolution.title}</h3>
                      {activeSolution.subTitle && (
                        <span>{activeSolution.subTitle}</span>
                      )}
                    </div>

                    <div className="icon-container">
                      <img
                        className="service-info__header_icon"
                        src={activeSolution.iconPath}
                        alt="Icon"
                      />
                    </div>
                  </div>
                  <div className="service-info__main">
                    <div
                      className="service-info__description"
                      dangerouslySetInnerHTML={{
                        __html: activeSolution.description,
                      }}
                    />
                    <div className="service-info__container">
                      {activeSolution.gallery && (
                        <div className="service-info__slider">
                          <div className="price__title-container">
                            <h4 className="price__title">Наши работы</h4>
                            <div className="break" />
                          </div>
                          <div className="service-info__slider-container">
                            <SliderModal slides={activeSolution.gallery} />
                          </div>
                        </div>
                      )}

                      <div className="service-info__price">
                        <div className="price__title-container">
                          <h4 className="price__title">Цена</h4>
                          <div className="break" />
                        </div>
                        <div className="price__content-container">
                          <div className="price__content">
                            <ul className="price__list">
                              {activeSolution.price.map((item, index, arr) => {
                                return (
                                  <li key={index}>
                                    <div
                                      className={`${
                                        arr.length === 1
                                          ? "price__list-item"
                                          : "price__list-item_point"
                                      }`}
                                    >
                                      {item.name && (
                                        <span
                                          className={`${
                                            item.isPrimary
                                              ? "price__text_gradient"
                                              : "price__text_name"
                                          }`}
                                        >
                                          {item.name}{" "}
                                        </span>
                                      )}
                                      {item.isFrom && (
                                        <span className="price__text_ordinary">
                                          от{" "}
                                        </span>
                                      )}
                                      <span className="price__text_value">
                                        {formatPrice(item.amount)}{" "}
                                      </span>
                                      <span className="price__text_currency">
                                        ₽{item.isDepends && "*"}
                                      </span>
                                    </div>
                                    {item.isDepends && (
                                      <span className="price__text_depends">
                                        * - цена зависит от объема работы
                                      </span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <button className="button_purchase">
                            ПРИОБРЕСТИ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key={currentType}
                className="products"
              >
                <div className="products-group">
                  {filtredSolutions.map((solution) => (
                    <ProductButton
                      key={solution.title}
                      icon={solution.iconPath}
                      isSelected={solution.title === activeSolution?.title}
                      onClick={() => setActiveSolution(solution)}
                    >
                      {solution.title}
                    </ProductButton>
                  ))}
                </div>
              </motion.div>{" "}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default SolutionBlock;
