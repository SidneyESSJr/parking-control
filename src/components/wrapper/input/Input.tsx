import { ComponentProps } from "react";
import styles from './input.module.css'

type Input = ComponentProps<"input"> & {
  id: string;
  label: string;
};

export default function Input({ id, label, ...rest }: Input) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...rest} />
    </div>
  );
}
