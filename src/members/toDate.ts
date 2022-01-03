import { toDate as _toDate } from "date-fns";
import { reactify } from "@vueuse/core";

export const toDate = reactify(_toDate);