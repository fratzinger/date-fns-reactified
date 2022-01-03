import { startOfWeek as _startOfWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfWeek = reactify(_startOfWeek);