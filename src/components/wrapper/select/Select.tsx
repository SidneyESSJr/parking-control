import { ComponentProps } from "react";
import styles from "./select.module.css";

export type Option = {
  name: string;
  value: string;
};

type Select = ComponentProps<"select"> & {
  id: string;
  label: string;
  options: Option[];
};

export default function Select({ id, label, options, ...rest }: Select) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...rest}>
        {options.map((opt) => (
          <option value={opt.value}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
}
