import { closestTo as _closestTo } from "date-fns";
import { reactify } from "@vueuse/core";

export const closestTo = reactify(_closestTo);