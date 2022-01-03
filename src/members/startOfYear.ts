import { startOfYear as _startOfYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfYear = reactify(_startOfYear);