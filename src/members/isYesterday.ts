import { isYesterday as _isYesterday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isYesterday = reactify(_isYesterday);