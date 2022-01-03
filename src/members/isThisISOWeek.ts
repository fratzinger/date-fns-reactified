import { isThisISOWeek as _isThisISOWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisISOWeek = reactify(_isThisISOWeek);