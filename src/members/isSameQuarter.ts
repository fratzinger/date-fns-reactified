import { isSameQuarter as _isSameQuarter } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameQuarter = reactify(_isSameQuarter);