import { differenceInMonths as _differenceInMonths } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInMonths = reactify(_differenceInMonths);