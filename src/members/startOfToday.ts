import { startOfToday as _startOfToday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfToday = reactify(_startOfToday);