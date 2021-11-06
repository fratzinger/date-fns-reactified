import { addISOWeekYears as _addISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const addISOWeekYears = reactify(_addISOWeekYears);