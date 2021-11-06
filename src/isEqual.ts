import { isEqual as _isEqual } from "date-fns";
import { reactify } from "@vueuse/core";

export const isEqual = reactify(_isEqual);