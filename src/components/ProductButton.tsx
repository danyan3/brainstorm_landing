import { ServiceType, TariffType } from "../types";

interface ProductButtonProps {
  type: ServiceType | TariffType;
  icon: string;
  selected_icon: string;
  text: string;
  selected: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ProductButton: React.FC<ProductButtonProps> = ({ type, icon, selected_icon, text, selected, onClick }) => {
  return (
    <button
      value={type}
      onClick={onClick}
      disabled={selected}
      className={`products__button products__button_${type}`}
    >
      <div className='icon-container'>
        <img className='products__button_icon' src={selected ? selected_icon : icon} alt='Icon' />
      </div>
      <span className='products__button_text'>{text}</span>
    </button>
  );
};

export default ProductButton;