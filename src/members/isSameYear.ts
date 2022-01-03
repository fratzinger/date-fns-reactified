import { isSameYear as _isSameYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isSameYear = reactify(_isSameYear);