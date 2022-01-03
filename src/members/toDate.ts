import { toDate as _toDate } from "date-fns";
import { reactify } from "@vueuse/shared";

export const toDate = reactify(_toDate);