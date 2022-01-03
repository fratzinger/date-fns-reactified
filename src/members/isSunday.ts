import { isSunday as _isSunday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSunday = reactify(_isSunday);