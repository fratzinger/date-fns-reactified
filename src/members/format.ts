import { format as _format } from "date-fns";
import { reactify } from "@vueuse/core";

export const format = reactify(_format);