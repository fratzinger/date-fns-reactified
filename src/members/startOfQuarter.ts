import { startOfQuarter as _startOfQuarter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfQuarter = reactify(_startOfQuarter);