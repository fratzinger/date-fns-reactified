import { startOfISOWeek as _startOfISOWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfISOWeek = reactify(_startOfISOWeek);