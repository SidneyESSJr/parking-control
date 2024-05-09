import React, { ComponentPropsWithRef, ForwardedRef } from "react";
import styles from "./select.module.css";

export type Option = {
  name: string;
  value: string;
};

type Select = ComponentPropsWithRef<"select"> & {
  id?: string;
  label: string;
  options: Option[];
};

const Select = React.forwardRef(
  (
    { id, label, options, ...rest }: Select,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.container}>
        <label htmlFor={id}>{label}</label>
        <select id={id} {...rest}>
          {options.map((opt, key) => (
            <option key={key} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
