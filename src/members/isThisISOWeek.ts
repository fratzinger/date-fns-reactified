import { isThisISOWeek as _isThisISOWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisISOWeek = reactify(_isThisISOWeek);