import { differenceInMinutes as _differenceInMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInMinutes = reactify(_differenceInMinutes);