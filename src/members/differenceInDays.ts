import { differenceInDays as _differenceInDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInDays = reactify(_differenceInDays);