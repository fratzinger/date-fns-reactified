import { addISOWeekYears as _addISOWeekYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const addISOWeekYears = reactify(_addISOWeekYears);