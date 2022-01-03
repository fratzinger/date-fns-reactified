import { startOfDay as _startOfDay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfDay = reactify(_startOfDay);