import { differenceInMinutes as _differenceInMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInMinutes = reactify(_differenceInMinutes);