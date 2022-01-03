import { isToday as _isToday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isToday = reactify(_isToday);