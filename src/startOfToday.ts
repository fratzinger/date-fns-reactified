import { startOfToday as _startOfToday } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfToday = reactify(_startOfToday);