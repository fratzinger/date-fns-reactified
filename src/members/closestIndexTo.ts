import { closestIndexTo as _closestIndexTo } from "date-fns";
import { reactify } from "@vueuse/shared";

export const closestIndexTo = reactify(_closestIndexTo);