import { ComponentProps } from "react";

interface ProductButtonProps extends ComponentProps<"button"> {
  icon: string;
  isSelected: boolean;
}

const ProductButton: React.FC<ProductButtonProps> = ({
  isSelected,
  icon,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={isSelected}
      //products__button_${type}
      className={`products__button `}
    >
      <div className="icon-container">
        <img
          style={{
            filter: isSelected ? "brightness(1000%) contrast(100%)" : "",
          }}
          className="products__button_icon"
          src={icon}
          alt="Icon"
        />
      </div>
      <span className="products__button_text">{children}</span>
    </button>
  );
};

export default ProductButton;
