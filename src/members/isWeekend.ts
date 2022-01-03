import { isWeekend as _isWeekend } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isWeekend = reactify(_isWeekend);