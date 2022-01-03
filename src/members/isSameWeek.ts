import { isSameWeek as _isSameWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameWeek = reactify(_isSameWeek);