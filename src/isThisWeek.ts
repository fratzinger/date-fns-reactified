import { isThisWeek as _isThisWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisWeek = reactify(_isThisWeek);