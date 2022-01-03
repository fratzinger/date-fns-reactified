import { isSameMinute as _isSameMinute } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameMinute = reactify(_isSameMinute);