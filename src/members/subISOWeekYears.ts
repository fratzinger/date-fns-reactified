import { subISOWeekYears as _subISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const subISOWeekYears = reactify(_subISOWeekYears);