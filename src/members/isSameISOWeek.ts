import { isSameISOWeek as _isSameISOWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameISOWeek = reactify(_isSameISOWeek);