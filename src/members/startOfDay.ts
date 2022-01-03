import { startOfDay as _startOfDay } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfDay = reactify(_startOfDay);