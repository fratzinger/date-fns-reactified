import { isThisMinute as _isThisMinute } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isThisMinute = reactify(_isThisMinute);