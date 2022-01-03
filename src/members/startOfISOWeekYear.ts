import { startOfISOWeekYear as _startOfISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfISOWeekYear = reactify(_startOfISOWeekYear);