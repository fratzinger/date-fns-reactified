import { startOfISOWeek as _startOfISOWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfISOWeek = reactify(_startOfISOWeek);