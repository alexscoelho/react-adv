import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  maxCount?: number;
  count?: number;
  isMaxCountReached: boolean;
}

export const ProductButtons = ({
  className,
  style,
  maxCount,
  isMaxCountReached,
}: Props) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        {" "}
        -{" "}
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${
          isMaxCountReached ? styles.disabled : null
        }`}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
