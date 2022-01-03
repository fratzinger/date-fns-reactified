import { isSameMinute as _isSameMinute } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameMinute = reactify(_isSameMinute);