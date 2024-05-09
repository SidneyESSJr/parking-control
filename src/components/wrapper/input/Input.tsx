import React, { ComponentPropsWithRef, ForwardedRef } from "react";
import styles from "./input.module.css";

type InputType = ComponentPropsWithRef<"input"> & {
  id?: string;
  error?: { ok: boolean; message?: string };
  label: string;
};

const Input = React.forwardRef(
  (
    { id, label, error, ...rest }: InputType,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.container}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" {...rest} aria-invalid={error?.ok} />
        {error && <p>{error.message}</p>}
      </div>
    );
  }
);

export default Input;
