import { startOfYear as _startOfYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfYear = reactify(_startOfYear);