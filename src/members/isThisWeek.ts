import { isThisWeek as _isThisWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisWeek = reactify(_isThisWeek);