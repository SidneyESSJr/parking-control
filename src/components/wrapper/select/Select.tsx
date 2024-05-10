import React, { ComponentPropsWithRef, ForwardedRef } from "react";
import styles from "./select.module.css";

export type Option = {
  name: string;
  value: string;
};

type Select = ComponentPropsWithRef<"select"> & {
  id?: string;
  error?: { ok: boolean; message?: string };
  label: string;
  options: string[];
};

const Select = React.forwardRef(
  (
    { id, label, error, options, ...rest }: Select,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.container}>
        <label htmlFor={id}>{label}</label>
        {error && <p>{error.message}</p>}
        <select id={id} {...rest} aria-invalid={error?.ok}>
          {options.map((opt, key) => (
            <option key={key} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
