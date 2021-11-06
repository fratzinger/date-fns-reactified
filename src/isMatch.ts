import { isMatch as _isMatch } from "date-fns";
import { reactify } from "@vueuse/core";

export const isMatch = reactify(_isMatch);