import { startOfMonth as _startOfMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfMonth = reactify(_startOfMonth);