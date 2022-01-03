import { getDayOfYear as _getDayOfYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const getDayOfYear = reactify(_getDayOfYear);