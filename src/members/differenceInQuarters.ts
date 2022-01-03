import { differenceInQuarters as _differenceInQuarters } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInQuarters = reactify(_differenceInQuarters);