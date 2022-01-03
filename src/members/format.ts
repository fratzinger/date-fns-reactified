import { format as _format } from "date-fns";
import { reactify } from "@vueuse/shared";

export const format = reactify(_format);