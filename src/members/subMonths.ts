import { subMonths as _subMonths } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subMonths = reactify(_subMonths);