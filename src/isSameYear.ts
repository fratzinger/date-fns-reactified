import { isSameYear as _isSameYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const isSameYear = reactify(_isSameYear);