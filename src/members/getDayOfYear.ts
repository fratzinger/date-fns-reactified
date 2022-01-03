import { getDayOfYear as _getDayOfYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getDayOfYear = reactify(_getDayOfYear);