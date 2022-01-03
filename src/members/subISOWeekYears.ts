import { subISOWeekYears as _subISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subISOWeekYears = reactify(_subISOWeekYears);