import { differenceInQuarters as _differenceInQuarters } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInQuarters = reactify(_differenceInQuarters);