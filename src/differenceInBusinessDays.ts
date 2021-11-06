import { differenceInBusinessDays as _differenceInBusinessDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInBusinessDays = reactify(_differenceInBusinessDays);