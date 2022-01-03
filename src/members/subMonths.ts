import { subMonths as _subMonths } from "date-fns";
import { reactify } from "@vueuse/core";

export const subMonths = reactify(_subMonths);