import { differenceInDays as _differenceInDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInDays = reactify(_differenceInDays);