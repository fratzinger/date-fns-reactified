import { isSameQuarter as _isSameQuarter } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameQuarter = reactify(_isSameQuarter);