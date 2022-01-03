import { isSameISOWeekYear as _isSameISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameISOWeekYear = reactify(_isSameISOWeekYear);