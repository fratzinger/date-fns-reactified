import { isSameWeek as _isSameWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameWeek = reactify(_isSameWeek);