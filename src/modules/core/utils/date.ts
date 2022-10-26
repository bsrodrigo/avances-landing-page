import { format, isValid } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";

export const formatDate = (
  data: Date,
  dataFormat: string = "dd/MM/yyyy"
): string => {
  try {
    if (!isValid(data)) return "";

    const formattedData = format(data, dataFormat, { locale: ptBR });

    return formattedData;
  } catch {
    return "";
  }
};
