import { closestTo as _closestTo } from "date-fns";
import { reactify } from "@vueuse/shared";

export const closestTo = reactify(_closestTo);