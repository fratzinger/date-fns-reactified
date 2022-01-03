import { isSameISOWeekYear as _isSameISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameISOWeekYear = reactify(_isSameISOWeekYear);