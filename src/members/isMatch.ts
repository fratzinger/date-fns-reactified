import { isMatch as _isMatch } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isMatch = reactify(_isMatch);