import { isToday as _isToday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isToday = reactify(_isToday);