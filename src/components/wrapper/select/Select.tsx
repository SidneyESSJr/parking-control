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
  options: Option[];
};

const Select = React.forwardRef(
  (
    { id, label, error, options, ...rest }: Select,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.container}>
        <label htmlFor={id}>{label}</label>
        <select id={id} {...rest} aria-invalid={error?.ok}>
          {options.map((opt, key) => (
            <option key={key} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
        {error && <p>{error.message}</p>}
      </div>
    );
  }
);

export default Select;
