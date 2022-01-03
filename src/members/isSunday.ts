import { isSunday as _isSunday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSunday = reactify(_isSunday);