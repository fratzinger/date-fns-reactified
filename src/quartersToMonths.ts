import { quartersToMonths as _quartersToMonths } from "date-fns";
import { reactify } from "@vueuse/core";

export const quartersToMonths = reactify(_quartersToMonths);