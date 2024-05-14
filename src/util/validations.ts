import z from "zod";

const schema = z.object({
  nome: z.string().min(3, { message: "Minimo 3 caracteres" }),
  apto: z.string().min(1, { message: "Obrigatório" }),
  bloco: z.string().min(1, { message: "Obrigatório" }),
  vaga: z.string().min(1, { message: "Obrigatório" }),
  modelo: z.string().min(2, { message: "Obrigatório" }),
  placa: z
    .string()
    .min(7, { message: "Deve conter 7 caracteres" })
    .regex(/^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$/, {
      message: "Valor invalido",
    })
    .toUpperCase(),
  cor: z.string().min(2, { message: "Obrigatório" }),
});

export default schema;
