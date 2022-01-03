import { startOfYesterday as _startOfYesterday } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfYesterday = reactify(_startOfYesterday);