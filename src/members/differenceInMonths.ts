import { differenceInMonths as _differenceInMonths } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInMonths = reactify(_differenceInMonths);