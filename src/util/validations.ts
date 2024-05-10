import z from "zod";

const schema = z.object({
  nome: z.string().min(3, { message: "Minimo 3 caracteres" }),
  apto: z.string(),
  bloco: z.string(),
  vaga: z.string(),
  modelo: z.string().min(2, { message: "Minimo 2 caracteres" }),
  placa: z
    .string()
    .regex(/^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$/, {
      message: "Valor invalido",
    })
    .toUpperCase(),
  cor: z.string().min(2, { message: "Minimo 2 caracteres" }),
});

export default schema;
