import { isSameMonth as _isSameMonth } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameMonth = reactify(_isSameMonth);