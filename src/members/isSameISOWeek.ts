import { isSameISOWeek as _isSameISOWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameISOWeek = reactify(_isSameISOWeek);