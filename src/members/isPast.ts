import { isPast as _isPast } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isPast = reactify(_isPast);