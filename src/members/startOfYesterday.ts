import { startOfYesterday as _startOfYesterday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfYesterday = reactify(_startOfYesterday);