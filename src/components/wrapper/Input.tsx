import { ComponentProps } from "react";

type Input = ComponentProps<"input"> & {
  id: string;
  label: string;
};

export default function Input({ id, label, ...rest }: Input) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...rest} />
    </div>
  );
}
