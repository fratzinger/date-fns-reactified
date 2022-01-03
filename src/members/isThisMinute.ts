import { isThisMinute as _isThisMinute } from "date-fns";
import { reactify } from "@vueuse/core";

export const isThisMinute = reactify(_isThisMinute);