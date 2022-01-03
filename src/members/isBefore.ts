import { isBefore as _isBefore } from "date-fns";
import { reactify } from "@vueuse/core";

export const isBefore = reactify(_isBefore);