import { differenceInYears as _differenceInYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInYears = reactify(_differenceInYears);