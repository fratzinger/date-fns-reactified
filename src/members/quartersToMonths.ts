import { quartersToMonths as _quartersToMonths } from "date-fns";
import { reactify } from "@vueuse/shared";

export const quartersToMonths = reactify(_quartersToMonths);