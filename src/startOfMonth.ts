import { startOfMonth as _startOfMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfMonth = reactify(_startOfMonth);