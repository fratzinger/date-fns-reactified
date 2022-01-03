import { startOfISOWeekYear as _startOfISOWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfISOWeekYear = reactify(_startOfISOWeekYear);