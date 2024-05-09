import z from "zod";

const schema = z.object({
  nome: z.string().min(3, { message: "Valor invalido" }),
  apto: z.string(),
  bloco: z.string(),
  vaga: z.string(),
  modelo: z.string().min(2, { message: "Valor invalido" }),
  placa: z.string().regex(/^[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}$/, {
    message: "Valor invalido",
  }),
  cor: z.string().min(2, { message: "Valor invalido" }),
});

export default schema;
