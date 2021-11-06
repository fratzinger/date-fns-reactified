import { closestIndexTo as _closestIndexTo } from "date-fns";
import { reactify } from "@vueuse/core";

export const closestIndexTo = reactify(_closestIndexTo);