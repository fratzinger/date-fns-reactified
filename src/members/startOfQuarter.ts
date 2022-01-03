import { startOfQuarter as _startOfQuarter } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfQuarter = reactify(_startOfQuarter);