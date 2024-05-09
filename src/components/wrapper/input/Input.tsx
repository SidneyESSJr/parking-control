import React, { ComponentPropsWithRef, ForwardedRef } from "react";
import styles from "./input.module.css";

type InputType = ComponentPropsWithRef<"input"> & {
  id?: string;
  label: string;
};

const Input = React.forwardRef(
  ({ id, label, ...rest }: InputType, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.container}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...rest} />
      </div>
    );
  }
);

export default Input;
