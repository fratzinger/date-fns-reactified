import { isSameMonth as _isSameMonth } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameMonth = reactify(_isSameMonth);