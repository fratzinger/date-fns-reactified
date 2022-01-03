import { differenceInBusinessDays as _differenceInBusinessDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInBusinessDays = reactify(_differenceInBusinessDays);