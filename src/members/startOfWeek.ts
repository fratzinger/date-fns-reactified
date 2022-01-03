import { startOfWeek as _startOfWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfWeek = reactify(_startOfWeek);