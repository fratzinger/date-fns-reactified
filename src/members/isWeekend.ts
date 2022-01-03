import { isWeekend as _isWeekend } from "date-fns";
import { reactify } from "@vueuse/core";

export const isWeekend = reactify(_isWeekend);