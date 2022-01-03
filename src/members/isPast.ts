import { isPast as _isPast } from "date-fns";
import { reactify } from "@vueuse/core";

export const isPast = reactify(_isPast);