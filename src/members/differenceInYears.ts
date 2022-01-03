import { differenceInYears as _differenceInYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInYears = reactify(_differenceInYears);