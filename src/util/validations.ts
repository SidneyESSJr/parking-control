import z from "zod";

const schema = z.object({
    nome: z.string(),
    apto: z.string(),
    bloco: z.string(),
    vaga: z.string(),
    modelo: z.string(),
    placa: z.string(),
    cor: z.string(),
});

export default schema;
