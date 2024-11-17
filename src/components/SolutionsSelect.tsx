import { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import { CloseIcon } from "./ui/icons/CloseIcon";
import { ISolution } from "@/types/ISolution";
import { ChevroneIcon } from "./ui/icons/ChevroneIcon";
import { CheckIcon } from "./ui/icons/CheckIcon";

export const SolutionsSelect = ({
  solutions,
  currentSolution,
  onChange,
}: {
  solutions: ISolution[];
  currentSolution: ISolution;
  onChange: (val?: ISolution) => void;
}) => (
  <Select.Root
    value={currentSolution.title}
    onValueChange={(val) => {
      onChange(solutions.find((sol) => sol.title === val));
    }}
  >
    <Select.Trigger asChild aria-label="Food">
      <button className="solution-select__trigger">
        <img
          className="solution-select__solution-icon"
          src={currentSolution.iconPath}
          alt="Icon"
        />
        {currentSolution.title}
        <ChevroneIcon className="solution-select__trigger-icon" />
      </button>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        position="popper"
        avoidCollisions={false}
        className="solution-select__content"
      >
        <Select.ScrollUpButton className="solution-select__scroll-button">
          <CloseIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="solution-select__viewport">
          <Select.Group>
            {solutions.map((solution) => (
              <SelectItem key={solution.title} value={solution.title}>
                <img
                  alt="Icon"
                  style={{
                    filter:
                      currentSolution.title === solution.title
                        ? "brightness(1000%) contrast(100%)"
                        : "",
                  }}
                  src={solution.iconPath}
                />
                {solution.title}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="solution-select__scroll-button">
          <CloseIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = forwardRef<HTMLDivElement, Select.SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={`solution-select__item ${className || ""}`}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator
          asChild
          className="solution-select__item-indicator"
        >
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
