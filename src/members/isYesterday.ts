import { isYesterday as _isYesterday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isYesterday = reactify(_isYesterday);